class IndecisionApp extends React.Component{
    constructor(props){
        super(props); 
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    
    handleDeleteOptions(){
        this.setState(() => ({options: []}));
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
        const title = 'Indecison App';
        const subtitle = 'Put your life in the hands of a computer';
        let hasOptions = this.state.options.length > 0; //results in boolean to check if array is empty
    
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
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

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

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

const Options = (props) => {
        return(
            <div>
                <button id="removeAll"
                        disabled={!props.hasOptions}
                        class="btn btn-danger"
                        onClick={props.handleDeleteOptions}>Remove All</button>
                <h3>Here are your options: {props.options.length}</h3>
                <ol>
                    { props.options.map((option) => <Option key={option} optionText={option}/>) }
                </ol>
            </div>
        );
};

const optionString = 'An option is here';

const Option = (props) => {
    return(
        <li>{props.optionText}</li>
    );
};

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
       this.setState(() => ({error}));
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


const appRoot = document.getElementById('react-container');

ReactDOM.render(<IndecisionApp />, appRoot);