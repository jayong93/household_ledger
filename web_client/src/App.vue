<template>
  <v-app>
    <v-app-bar app dense dark>
      <div class="d-flex align-center">가계부</div>
      <v-spacer></v-spacer>
      <span v-if="typeof user !== 'undefined'">
      <amplify-sign-out></amplify-sign-out>
      </span>
    </v-app-bar>

    <v-main>
      <v-row class="fill-height" v-if="typeof user === 'undefined'">
        <v-col class="align-center">
          <amplify-auth-container>
            <amplify-authenticator>
              <div v-if="authState === 'signedin' && user">
                {{ user.username }}
              </div>
            </amplify-authenticator>
          </amplify-auth-container>
        </v-col>
      </v-row>
      <v-row class="mb-2" v-if="typeof user !== 'undefined'">
        <v-col>
          <v-sheet height="64">
            <v-toolbar flat>
              <v-btn
                outlined
                class="mr-4"
                color="grey darken-2"
                @click="setToday"
              >
                Today
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="prev">
                <v-icon small> mdi-chevron-left </v-icon>
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="next">
                <v-icon small> mdi-chevron-right </v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu bottom right>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    outlined
                    color="grey darken-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span>{{ typeToLabel[type] }}</span>
                    <v-icon right> mdi-menu-down </v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="type = 'day'">
                    <v-list-item-title>Day</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                    <v-list-item-title>Week</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'">
                    <v-list-item-title>Month</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = '4day'">
                    <v-list-item-title>4 days</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              locale="ko-KR"
              :event-overlap-mode="overlap_mode"
              :event-overlap-threshold="1"
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
              @change="updateRange"
            ></v-calendar>
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
            >
              <v-card color="grey lighten-4" min-width="350px" flat>
                <v-toolbar :color="selectedEvent.color" dark>
                  <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-toolbar-title
                    v-html="selectedEvent.name"
                  ></v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text>
                  <pre v-html="selectedEvent.details"></pre>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="secondary" @click="selectedOpen = false">
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-sheet>
        </v-col>
      </v-row>
      <div class="d-flex justify-center">
        <v-card class="d-flex px-4 py-2 mx-10 outlined align-center flex-grow-1">
          <span> Import Data </span>
          <span class="flex-grow-1 mr-5 ml-2">
            <v-file-input
              ref="file_input"
              chips
              small-chips
              @change="selectFile"
            ></v-file-input>
          </span>
          <v-btn v-if="selectedFile !== null" @click="saveData">Import</v-btn>
        </v-card>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import "regenerator-runtime/runtime";
import "@aws-amplify/ui-vue";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import axios from "axios";
const parse = require("csv-parse");

export default {
  name: "App",

  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    });
  },
  data: () => ({
    cached_data: {},
    authState: undefined,
    user: undefined,
    unsubscribeAuth: undefined,
    overlap_mode: "column",
    cur_start: Date.now(),
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    selectedFile: null,
    events: [],
  }),
  methods: {
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      this.cur_start = start;
      this.load_data(start, end);
    },
    load_data(start) {
      const year_month = `${start.year}${start.month
        .toString()
        .padStart(2, 0)}`;

      const cached_data = this.cached_data[year_month];
      if (cached_data !== undefined) {
        this.events = cached_data;
      } else {
        const events = [];
        axios
          .get(
            "https://51c22t1aba.execute-api.ap-northeast-2.amazonaws.com/test",
            {
              headers: {
                Authorization:
                  "Bearer " + this.user.signInUserSession.idToken.jwtToken,
              },
              params: {
                year_month: year_month,
              },
            }
          )
          .then(({ status, data }) => {
            if (status == 200) {
              data.forEach(({ timestamp, name, change, tag, memo }) => {
                const time = new Date(timestamp * 1000);
                events.push({
                  name: `${change}; ${name}`,
                  start: time,
                  timed: true,
                  color: change < 0 ? "blue" : "red",
                  category: tag,
                  details:
                    `시간: ${time.toLocaleString("ko-KR")}` +
                    "\n" +
                    `태그: ${tag}` +
                    "\n" +
                    `메모: ${memo}`,
                });
              });
              this.cached_data[year_month] = events;
              this.events = events;
            }
          });
      }
    },
    saveData() {
      const reader = new FileReader();
      const authToken = this.user.signInUserSession.idToken.jwtToken;
      const timestamp_regex = /(\d+)\.(\d+)\.(\d+)\s+(\d+):(\d+):(\d+)/;
      reader.onload = function () {
        parse(reader.result, {}, function (err, output) {
          if (!err) {
            let body = [];
            for (var i = 1; i < output.length; ++i) {
              let data = {};
              for (var j = 0; j < output[0].length; ++j) {
                if (output[i][j].length == 0) {
                  continue;
                }
                if (output[0][j] == "timestamp") {
                  const match = output[i][j].match(timestamp_regex);
                  const date = new Date(
                    Date.parse(
                      `${match[1]}-${match[2]}-${match[3]}T${match[4]}:${match[5]}:${match[6]}.000+09:00`
                    )
                  );
                  data[output[0][j]] = date.getTime() / 1000;
                  data["year_month"] =
                    date.getFullYear() * 100 + date.getMonth() + 1;
                } else if (output[0][j] == "change") {
                  data[output[0][j]] = parseInt(
                    output[i][j].replaceAll(",", "")
                  );
                } else {
                  data[output[0][j]] = output[i][j];
                }
              }
              body.push(data);
            }
            console.log(body);
            axios
              .post(
                "https://51c22t1aba.execute-api.ap-northeast-2.amazonaws.com/test",
                JSON.stringify(body),
                {
                  headers: {
                    Authorization: "Bearer " + authToken,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then(function ({ status }) {
                if (status == 200) {
                  this.cached_data = {};
                  this.load_data(this.cur_start);
                }
              });
          }
        });
      };
      reader.readAsText(this.selectedFile);
    },
    selectFile(file) {
      this.selectedFile = file;
    },
    beforeDestroy() {
      this.unsubscribeAuth();
    },
  },
};
</script>
