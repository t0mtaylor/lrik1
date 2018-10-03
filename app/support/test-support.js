global.requireComponent = path => require(`${__dirname}/../src/base/${path}`);

import 'raf/polyfill';

// Temporary hack to suppress error
// https://github.com/facebookincubator/create-react-app/issues/3199
window.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0);
  return 0;
};

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
  return 0;
};



//See: https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f
//import { configure } from 'enzyme';
import Enzyme, { shallow, render, mount, configure } from 'enzyme';
//configure({ adapter: new Adapter() });
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;



var jasmineReporters = require('jasmine-reporters');
/*global jasmine*/
/*eslint no-undef: "error"*/
jasmine.VERBOSE = true;
jasmine.getEnv().addReporter(
  new jasmineReporters.JUnitXmlReporter({
    consolidateAll: false,
    savePath: 'test-reports'
  })
);