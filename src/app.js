
const appTitle = 'Indecison App';
const appSubtitle = "Put your life in the hands of a computer";

class Header extends React.Component {   //extending this class give all of the features of React
    render(){  //The component class requires render to be implimented andmust return JSX
        return (
            <div>
                <h1>{appTitle}</h1>
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
                <h3>Here are your options</h3>
                <ol>
                    <li>Option One</li>
                    <li>Option Two</li>
                    <li>Option Three</li>
                </ol>
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

//React Components added to jsx need to begin with a capital letter
const jsx = (
    <div>
        <h1>Title</h1>
        <Header/> 
        <Action/>
        <Options/>
        <AddOption/>
    </div>
);

const appRoot = document.getElementById('react-container');

ReactDOM.render(jsx, appRoot);