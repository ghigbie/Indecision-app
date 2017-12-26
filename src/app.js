// const React    = require('react');
// const ReactDOM = require('react-dom');

let app = {
    title: 'Indecison App',
    subtitle: 'Put your life in the hands of a computer!',
    itemOne: 'Item One',
    itemTwo: 'Item Two',
    itemThree: 'Item Three',
    options: ['option one', 'option two']
};

let options = <div><h3>Here are your options:</h3>
            <p>{app.options[0]}</p>
            <p>{app.options[1]}</p></div>;
            
let noOptions = <h3>No options for you!!!</h3>;

let user = {
    name: 'Kat Fight!!!',
    age: 98,
    location: 'Lani\'i'
};

let getLocation = (object) => object.location? <p>Location: {object.location}</p> : <p>Location: Bubba</p>;

let template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>{app.subtitle}</h2>}
        {app.options.length > 0 ? options : noOptions}
        <ol>
            <li>{app.itemOne}</li>
            <li>{app.itemTwo}</li>
            <li>{app.itemThree}</li>
        </ol>
    </div>
);

let templateTwo = (
    <div>
        <h1>Name: {user.name ? user.name : 'AnonyMoose'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age} </p>}
        {getLocation(user)}
    </div>
)
;
let appRoot = document.getElementById('react-container');

ReactDOM.render(template, appRoot);