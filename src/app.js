// const React    = require('react');
// const ReactDOM = require('react-dom');
const appRoot = document.getElementById('react-container');
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
const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if(option){
        app.options.push(option);
        event.target.elements.option.value = '';
    }
    renderReactElement();
};
const onRemoveAll = () => {
  app.options = [];
  renderReactElement();
};

const renderReactElement = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            {app.options.length > 0 ? options : noOptions}
            <h3>{app.options.length}</h3>
            <button id="removeAll" onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>{app.itemOne}</li>
                <li>{app.itemTwo}</li>
                <li>{app.itemThree}</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

renderReactElement();
