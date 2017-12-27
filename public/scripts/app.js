'use strict';

// const React    = require('react');
// const ReactDOM = require('react-dom');
/*globa ReactDOM*/

var app = {
    title: 'Indecison App',
    subtitle: 'Put your life in the hands of a computer!',
    itemOne: 'Item One',
    itemTwo: 'Item Two',
    itemThree: 'Item Three',
    options: ['option one', 'option two']
};

var options = React.createElement(
    'div',
    null,
    React.createElement(
        'h3',
        null,
        'Here are your options:'
    ),
    React.createElement(
        'p',
        null,
        app.options[0]
    ),
    React.createElement(
        'p',
        null,
        app.options[1]
    )
);

var noOptions = React.createElement(
    'h3',
    null,
    'No options for you!!!'
);

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
    app.subtitle && React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    app.options.length > 0 ? options : noOptions,
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

ReactDOM.render(template, appRoot);
