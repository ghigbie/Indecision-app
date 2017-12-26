// const React    = require('react');
// const ReactDOM = require('react-dom');
let bearOne = {
    name: 'Yogi Bear!!!',
    age: 540,
    location: 'Lani\'i'
};

let itemOne = {};
itemOne.sentence = 'This is JSX!';
itemOne.info = 'yo!!!!';

let template = (
    <div>
        <h1>{itemOne.sentence}</h1>
        <h2>{itemOne.greeting}</h2>
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

ReactDOM.render(templateTwo, appRoot);