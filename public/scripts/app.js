'use strict';

// const React    = require('react');
// const ReactDOM = require('react-dom');

var template = React.createElement(
  'h1',
  null,
  'This is JSX'
);
var appRoot = document.getElementById('react-container');

ReactDOM.render(template, appRoot);
