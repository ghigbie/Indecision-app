// const React    = require('react');
// const ReactDOM = require('react-dom');
/*globa ReactDOM*/

const app = {
    title: 'Indecison App',
    subtitle: 'Put your life in the hands of a computer!',
    itemOne: 'Item One',
    itemTwo: 'Item Two',
    itemThree: 'Item Three',
    options: ['option one', 'option two']
};

const options = <div><h3>Here are your options:</h3>
            <p>{app.options[0]}</p>
            <p>{app.options[1]}</p></div>;
            
const noOptions = <h3>No options for you!!!</h3>;

const user = {
    name: 'Kat Fight!!!',
    age: 98,
    location: 'Lani\'i'
};

const getLocation = (object) => object.location? <p>Location: {object.location}</p> : <p>Location: Bubba</p>;

const template = (
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

let count = 0;
const increment = (incrementValue) => {
    count++;
    renderCounterApp();
};
const decrement = (decrementValue) => {
    count > 0 ? count-- : count = 0;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button className="btn btn-default" id="increment" onClick={increment}>+1</button>
            <button className="btn btn-default" id="decrement" onClick={decrement}>-1</button>
            <button className="btn btn-default" id="reset" onClick={reset}>Reset</button>
        </div>
    );
    const appRoot = document.getElementById('react-container');
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();