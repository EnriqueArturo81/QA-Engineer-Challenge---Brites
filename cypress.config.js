const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://www.imdb.com/",
    videoUploadOnPasses: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    /*waitForAnimations: false,
    animationDistanceThreshold: 50,*/
  },
});
