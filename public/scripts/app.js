'use strict';

// const React    = require('react');
// const ReactDOM = require('react-dom');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is JSX!!!'
    ),
    React.createElement(
        'h2',
        null,
        'Yo!'
    )
);

var appRoot = document.getElementById('react-container');

ReactDOM.render(template, appRoot);
