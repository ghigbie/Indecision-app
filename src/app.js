// const React    = require('react');
// const ReactDOM = require('react-dom');

let app = {
    title: 'Indecison App',
    subtitle: 'Put your life in the hands of a computer!',
    itemOne: 'Item One',
    itemTwo: 'Item Two',
    itemThree: 'Item Three'
};

let bearOne = {
    name: 'Yogi Bear!!!',
    age: 540,
    // location: 'Lani\'i'
};

let getLocation = (object) =>{
    if(object.location){
        return object.location;
    }else{
        return 'Unknown';
    }
};

let getLocationTwo = (object) => object.location? object.location : 'Bubba';

let template = (
    <div>
        <h1>{app.title}</h1>
        <h2>{app.subtitle}</h2>
        <ol>
            <li>{app.itemOne}</li>
            <li>{app.itemTwo}</li>
            <li>{app.itemThree}</li>
        </ol>
    </div>
);

let templateTwo = (
    <div>
        <h1>Name: {bearOne.name}</h1>
        <p>Age :{bearOne.age}</p>
        <p>Location: {getLocationTwo(bearOne)}</p>
    </div>
)
;
let appRoot = document.getElementById('react-container');

ReactDOM.render(templateTwo, appRoot);