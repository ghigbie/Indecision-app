
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
                <button>What should I do?</button>
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
    </div>
);

const appRoot = document.getElementById('react-container');

ReactDOM.render(jsx, appRoot);