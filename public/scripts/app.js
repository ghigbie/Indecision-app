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

var user = {
    name: 'Kat Fight!!!',
    age: 98,
    location: 'Lani\'i'
};

var getLocation = function getLocation(object) {
    return object.location ? React.createElement(
        'p',
        null,
        'Location: ',
        object.location
    ) : React.createElement(
        'p',
        null,
        'Location: Bubba'
    );
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
        user.name ? user.name : 'AnonyMoose'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age,
        ' '
    ),
    getLocation(user)
);
var appRoot = document.getElementById('react-container');

ReactDOM.render(templateTwo, appRoot);
