'use strict';

// const React    = require('react');
// const ReactDOM = require('react-dom');

var app = {
    title: 'Indecison App',
    subtitle: 'Put your life in the hands of a computer!',
    itemOne: 'Item One',
    itemTwo: 'Item Two',
    itemThree: 'Item Three'
};

var bearOne = {
    name: 'Yogi Bear!!!',
    age: 540
    // location: 'Lani\'i'
};

var getLocation = function getLocation(object) {
    if (object.location) {
        return object.location;
    } else {
        return 'Unknown';
    }
};

var getLocationTwo = function getLocationTwo(object) {
    return object.location ? object.location : 'Bubba';
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            app.itemOne
        ),
        React.createElement(
            'li',
            null,
            app.itemTwo
        ),
        React.createElement(
            'li',
            null,
            app.itemThree
        )
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
        getLocationTwo(bearOne)
    )
);
var appRoot = document.getElementById('react-container');

ReactDOM.render(templateTwo, appRoot);
