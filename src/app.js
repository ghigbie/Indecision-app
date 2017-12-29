class Header extends React.Component {   //extending this class give all of the features of React
    render(){  //The component class requires render to be implimented andmust return JSX
        return (
            <div>
                <h1>This is from header</h1>
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