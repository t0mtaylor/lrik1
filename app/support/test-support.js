import 'raf/polyfill';



//See: https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f
//import { configure } from 'enzyme';
import { shallow, render, mount, configure } from 'enzyme';
//configure({ adapter: new Adapter() });
import Adapter from 'enzyme-adapter-react-16';

global.requireComponent = path => require(`${__dirname}/../src/${path}`);

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

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;


//setupJest.js or similar file
global.fetch = require('jest-fetch-mock')

