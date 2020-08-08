const React = require('react');
const ReactDOM = require('react-dom');

// Global styles
require('normalize.css');
require('../src/styles/reset.css');
require('./src/styles/typography.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('./src/styles/style.css');

// Expose React and ReactDOM for debugging
window.React = React;
window.ReactDOM = ReactDOM;

window.useGatsbyImage = true;
