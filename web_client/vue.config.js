module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/household_ledger/'
        : '/',

    transpileDependencies: [
      'vuetify'
    ]
}
