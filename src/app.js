class IndecisionApp extends React.Component{
    constructor(props){
        super(props); 
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['Walk dog', 'Wash dishes', 'Hunt rabbits']
        };
    }
    
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    
    handlePick(){
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const randomChoice = this.state.options[randomNumber];
        alert(randomChoice);
    }
    
    handleAddOption(option){
        if(!option){
            return 'Please enter a valid option with words and stuf : )';
        }else if(this.state.options.indexOf(option) > -1){
            return 'Please enter a valid option that does not already exist : )';
        }
        
        console.log(option);
        this.setState((prevState) => {
           return{
               options: prevState.options.concat(option)
           }; 
        });
    }
    
    render(){
        const appTitle = 'Indecison App';
        const appSubtitle = 'Put your life in the hands of a computer';
        let hasOptions = this.state.options.length > 0; //results in boolean to check if array is empty
    
        return(
            <div>
                <Header title={appTitle} subtitle={appSubtitle} />
                <Action 
                    hasOptions={hasOptions} 
                    handlePick={this.handlePick} />
                <Options
                    hasOptions={hasOptions}
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption 
                    handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}


class Header extends React.Component {   //extending this class give all of the features of React
    render(){  //The component class requires render to be implimented andmust return JSX
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }    
}

const Action = (props) => {
    return (
        <div>
            <button id="what"
                        disabled={!props.hasOptions}
                        onClick={props.handlePick}
                        class="btn btn-default">What should I do?</button>
        </div>
    );
};

// class Action extends React.Component {
//     render(){
//         return(
//             <div>
//                 <button id="what"
//                         disabled={!this.props.hasOptions}
//                         onClick={this.props.handlePick}
//                         class="btn btn-default">What should I do?</button>
//             </div>
//         );
//     }
// }

class Options extends React.Component{
    render(){
        return(
            <div>
                <button id="removeAll"
                        disabled={!this.props.hasOptions}
                        class="btn btn-danger"
                        onClick={this.props.handleDeleteOptions}>Remove All</button>
                <h3>Here are your options: {this.props.options.length}</h3>
                <ol>
                    { this.props.options.map((option) => <Option key={option} optionText={option}/>) }
                </ol>
            </div>
        );
    }   
}

const optionString = 'An option is here';

class Option extends React.Component{
    render(){
        return(
            <li>{this.props.optionText}</li>
        );
    }
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    
    handleAddOption(event){
       console.log(event);
       event.preventDefault();
       const option = event.target.elements.option.value.trim();
       const error = this.props.handleAddOption(option);
       
       this.setState(() => {
           return { error };
       })
    }
    
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text"
                           id="option"
                           name="option"
                           placeholder="Add option here"/>
                    <button type="submit"
                            id="addOption"
                            class="btn btn-default">Add option</button>
                </form>
            </div>
        );
    }
}

const User = () => {
    return(
        <div>
            <p>Name: </p>
            <p>Age: </p>
        </div>
    );
}

const appRoot = document.getElementById('react-container');

ReactDOM.render(<User />, appRoot);