class IndecisionApp extends React.Component{
    constructor(props){
        super(props); 
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
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
                <AddOption />
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

class Action extends React.Component {
    render(){
        return(
            <div>
                <button id="what"
                        disabled={!this.props.hasOptions}
                        onClick={this.props.handlePick}
                        class="btn btn-default">What should I do?</button>
            </div>
        );
    }
}

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
    handleAddOption(e){
       e.preventDefault();
       const option = e.target.elements.option.value.trim();
       
       if(option){
           alert(option);
           this.state.options.push(option);
       }
    }
    
    render(){
        return(
            <div>
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

const appRoot = document.getElementById('react-container');

ReactDOM.render(<IndecisionApp />, appRoot);