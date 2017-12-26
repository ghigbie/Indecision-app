// const React    = require('react');
// const ReactDOM = require('react-dom');

let template = (
    <div>
        <h1>This is JSX!!!</h1>
        <h2>Yo!</h2>
    </div>
);

let appRoot = document.getElementById('react-container');

ReactDOM.render(template, appRoot);