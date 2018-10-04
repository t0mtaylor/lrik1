var jasmineReporters = require('jasmine-reporters')
/*global jasmine*/
/*eslint no-undef: "error"*/
jasmine.VERBOSE = true
jasmine.getEnv().addReporter(
  new jasmineReporters.JUnitXmlReporter({
    consolidateAll: false,
    savePath: 'test-reports'
  })
)
