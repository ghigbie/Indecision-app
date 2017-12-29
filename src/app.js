class Header extends React.Component {   //extending this class give all of the features of React
    render(){  //The component class requires render to be implimented andmust return JSX
        return (
            <div>
                <h1>This is from header</h1>
            </div>
        );
    }    
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header/>
    </div>
);

const appRoot = document.getElementById('react-container');

ReactDOM.render(jsx, appRoot);