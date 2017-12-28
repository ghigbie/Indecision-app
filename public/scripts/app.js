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
    options: ['bake bread', 'hunt bears', 'eat snowcone', 'fly atlatic']
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
    var option = event.target.elements.option.value; //points to the element that the event started with, which is the form
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = ''; //removes the item from the input field
    }
    renderReactElement();
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderReactElement();
};

var addOptionsList = function addOptionsList() {
    app.options.map(function (option) {
        return React.createElement(
            'p',
            { key: option },
            ' ',
            option
        );
    });
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
            { id: 'removeAll', className: 'btn btn-default', onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { className: 'form', onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                { className: 'btn btn-default' },
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderReactElement();
