'use strict';

// const React    = require('react');
// const ReactDOM = require('react-dom');
var appRoot = document.getElementById('react-container');
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
var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();
    var option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
    }
    renderReactElement();
};
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderReactElement();
};

var renderReactElement = function renderReactElement() {
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
            'h3',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { id: 'removeAll', onClick: onRemoveAll },
            'Remove All'
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderReactElement();
