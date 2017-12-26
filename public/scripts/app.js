'use strict';

// const React    = require('react');
// const ReactDOM = require('react-dom');
var bearOne = {
    name: 'Yogi Bear!!!',
    age: 540,
    location: 'Lani\'i'
};

var itemOne = {};
itemOne.sentence = 'This is JSX!';
itemOne.info = 'yo!!!!';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        itemOne.sentence
    ),
    React.createElement(
        'h2',
        null,
        itemOne.greeting
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

ReactDOM.render(templateTwo, appRoot);
