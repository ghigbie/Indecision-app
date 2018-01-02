class IndecisionApp extends React.Component{
    render(){
        return(
            <div>
                <Header title="Indecison App"/>
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

const appSubtitle = "Put your life in the hands of a computer";

class Header extends React.Component {   //extending this class give all of the features of React
    render(){  //The component class requires render to be implimented andmust return JSX
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{appSubtitle}</h2>
            </div>
        );
    }    
}

class Action extends React.Component {
    render(){
        return(
            <div>
                <button id="what"
                        class="btn btn-default">What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                <h3>Here are your options:</h3>
                <ol>
                    <Option />
                </ol>
            </div>
        );
    }   
}

const optionString = 'An option is here';

class Option extends React.Component{
    render(){
        return(
            <div>
                <li>{optionString}</li>
                <li>{optionString}</li>
                <li>{optionString}</li>
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <input type="text"
                           placeholder="Add option here"/>
                    <button type="submit"
                            id="addOption"
                            class="btn btn-default">Add option</button>
                </form>
            </div>
        );
    }
}

const appRoot = document.getElementById('react-container');

ReactDOM.render(<IndecisionApp />, appRoot);