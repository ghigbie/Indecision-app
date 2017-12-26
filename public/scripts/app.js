'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var template = React.createElement(
  'h1',
  null,
  'This is JSX'
);
var appRoot = document.getElementById('react-container');

ReactDOM.render(template, appRoot);
