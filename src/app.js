// const React    = require('react');
// const ReactDOM = require('react-dom');
const appRoot = document.getElementById('react-container');
const app = {
    title: 'Indecison App',
    subtitle: 'Put your life in the hands of a computer!',
    itemOne: 'Item One',
    itemTwo: 'Item Two',
    itemThree: 'Item Three',
    options: []
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
    const option = event.target.elements.option.value; //points to the element that the event started with, which is the form
    if(option){
        app.options.push(option);
        event.target.elements.option.value = ''; //removes the item from the input field
    }
    renderReactElement();
};

const onRemoveAll = () => {
  app.options = [];
  renderReactElement();
};

const addOptionsList = () => {
    app.options.map((option) => {
        return <p key={option}> {option}</p>;
    });
    renderReactElement();
};

const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    const choice = app.options[random];
    console.log(choice);
    alert(choice);
    //document.getElementsByTagName('li').style.background = '#fff';
    //document.querySelectorAll('li')[random].style.background = 'blue';
};

const renderReactElement = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            {app.options.length > 0 ? options : noOptions}
            <h3>{app.options.length}</h3>
            
            <button id="makeDecision" 
                    disabled={app.options.length === 0}
                    className="btn btn-default" 
                    onClick={onMakeDecision}>What should I do?</button>
            <button id="removeAll" 
                    disabled={app.options.length === 0}
                    className="btn btn-default" 
                    onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                   app.options.map((option) => {
                       return <li key={option}>{option}</li>;
                   })
                }
            </ol>
            
            <form className="form" 
                  onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button className="btn btn-default">Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

renderReactElement();
