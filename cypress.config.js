

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 50000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});