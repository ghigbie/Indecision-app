'use strict';

// const React    = require('react');
// const ReactDOM = require('react-dom');

var temp = {
    title: 'This is JSX!!!',
    subtitle: 'JSX is awesome yo!'
};

var bearOne = {
    name: 'Yogi Bear!!!',
    age: 540,
    location: 'Lani\'i'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        temp.title
    ),
    React.createElement(
        'h2',
        null,
        temp.subtitle
    )
);
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name: ',
        bearOne.name
    ),
    React.createElement(
        'p',
        null,
        'Age :',
        bearOne.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        bearOne.location
    )
);

var appRoot = document.getElementById('react-container');

ReactDOM.render(template, appRoot);
