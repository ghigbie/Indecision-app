'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: ['Walk dog', 'Wash dishes', 'Hunt rabbits']
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNumber = Math.floor(Math.random() * this.state.options.length);
            var randomChoice = this.state.options[randomNumber];
            alert(randomChoice);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Please enter a valid option with words and stuf : )';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Please enter a valid option that does not already exist : )';
            }

            console.log(option);
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var appTitle = 'Indecison App';
            var appSubtitle = 'Put your life in the hands of a computer';
            var hasOptions = this.state.options.length > 0; //results in boolean to check if array is empty

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: appTitle, subtitle: appSubtitle }),
                React.createElement(Action, {
                    hasOptions: hasOptions,
                    handlePick: this.handlePick }),
                React.createElement(Options, {
                    hasOptions: hasOptions,
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        //extending this class give all of the features of React
        value: function render() {
            //The component class requires render to be implimented andmust return JSX
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { id: 'what',
                disabled: !props.hasOptions,
                onClick: props.handlePick,
                'class': 'btn btn-default' },
            'What should I do?'
        )
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

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { id: 'removeAll',
                        disabled: !this.props.hasOptions,
                        'class': 'btn btn-danger',
                        onClick: this.props.handleDeleteOptions },
                    'Remove All'
                ),
                React.createElement(
                    'h3',
                    null,
                    'Here are your options: ',
                    this.props.options.length
                ),
                React.createElement(
                    'ol',
                    null,
                    this.props.options.map(function (option) {
                        return React.createElement(Option, { key: option, optionText: option });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var optionString = 'An option is here';

// class Option extends React.Component{
//     render(){
//         return(
//             <li>{this.props.optionText}</li>
//         );
//     }
// }

var Option = function Option(props) {
    return React.createElement(
        'li',
        null,
        props.optionText
    );
};

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this4.handleAddOption = _this4.handleAddOption.bind(_this4);
        _this4.state = {
            error: undefined
        };
        return _this4;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(event) {
            console.log(event);
            event.preventDefault();
            var option = event.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text',
                        id: 'option',
                        name: 'option',
                        placeholder: 'Add option here' }),
                    React.createElement(
                        'button',
                        { type: 'submit',
                            id: 'addOption',
                            'class': 'btn btn-default' },
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// const User = (props) => {
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }

var appRoot = document.getElementById('react-container');

ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
