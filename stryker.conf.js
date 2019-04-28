module.exports = function(config) {
  config.set({
    mutate: [
      "src/*.js"
    ],
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress", "dashboard"],
    testRunner: "karma",
    transpilers: [],
    testFramework: "jasmine",
    coverageAnalysis: "perTest",
    karma: {
      projectType: "custom",
      configFile: "karma.conf.js",
      config: {}
    }
  });
};
