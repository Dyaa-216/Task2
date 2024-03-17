const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://admin-demo.nopcommerce.com/",
    watchForFileChanges: true, //
    trashAssetsBeforeRuns: true, //
    screenshotOnRunFailure: true, // only
    screenshotsFolder: "cypress/screenshots", // Default folder for screenshots
    video: true, // Enable video recording
    videosFolder: "cypress/videos" // Default folder for videos
  },
});
