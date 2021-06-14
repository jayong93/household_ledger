<template>
  <div>
    <amplify-auth-container>
      <amplify-authenticator>
        <div v-if="authState === 'signedin' && user">{{ user.username }}</div>
        <button v-if="authState === 'signedin' && user" v-on:click="load_data">
          load data
        </button>
        <amplify-sign-out></amplify-sign-out>
      </amplify-authenticator>
    </amplify-auth-container>
  </div>
</template>

<script>
import "regenerator-runtime/runtime";
import "@aws-amplify/ui-vue";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import axios from "axios";

export default {
  name: "App",
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
      console.log(authData);
    });
  },
  data() {
    return {
      authState: undefined,
      user: undefined,
      unsubscribeAuth: undefined,
    };
  },
  methods: {
    load_data() {
      axios
        .get(
          "https://51c22t1aba.execute-api.ap-northeast-2.amazonaws.com/test",
          {
            headers: {
              Authorization:
                "Bearer " + this.user.signInUserSession.idToken.jwtToken,
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
  beforeDestroy() {
    this.unsubscribeAuth();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
