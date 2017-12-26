// const React    = require('react');
// const ReactDOM = require('react-dom');

let temp = {
    title: 'This is JSX!!!',
    subtitle: 'JSX is awesome yo!'
};

let bearOne = {
    name: 'Yogi Bear!!!',
    age: 540,
    location: 'Lani\'i'
};

let template = (
    <div>
        <h1>{temp.title}</h1>
        <h2>{temp.subtitle}</h2>
    </div>
);
let templateTwo = (
    <div>
        <h1>Name: {bearOne.name}</h1>
        <p>Age :{bearOne.age}</p>
        <p>Location: {bearOne.location}</p>
    </div>
)

let appRoot = document.getElementById('react-container');

ReactDOM.render(template, appRoot);