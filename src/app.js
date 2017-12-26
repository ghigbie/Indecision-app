// const React    = require('react');
// const ReactDOM = require('react-dom');

let template = (
    <div>
        <h1>This is JSX!!!</h1>
        <h2>Yo!</h2>
    </div>
);
let templateTwo = (
    <div>
        <h1>Name: Yogi Bear</h1>
        <p>Age: 500</p>
        <p>Location: Liverpool</p>
    </div>
)

let appRoot = document.getElementById('react-container');

ReactDOM.render(templateTwo, appRoot);