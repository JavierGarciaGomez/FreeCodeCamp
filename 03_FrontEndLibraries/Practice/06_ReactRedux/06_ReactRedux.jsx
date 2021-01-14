// 01 Getting started
class DisplayMessages extends React.Component {
	// Change code below this line
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			messages: []
		};
	}
	// Change code above this line
	render() {
		return <div />;
	}
}

//   02 React and Redux: Manage State Locally First

class DisplayMessages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			messages: []
		};
	}
	// Add handleChange() and submitMessage() methods here
	handleChange(event) {
		this.setState({
			input: event.target.value,
			messages: this.state.messages
		});
	}
	submitMessage() {
		this.setState((state) => ({
			messages: [ ...this.state.messages, this.state.input ],
			input: ''
		}));
	}

	render() {
		const { input, messages } = this.state;
		return (
			<div>
				<h2>Type in a new Message:</h2>
				{/* Render an input, button, and ul below this line */}
				<input onChange={this.handleChange.bind(this)} value={input} />
				<button onClick={this.submitMessage.bind(this)}> Click Me! </button>
				<ul>{this.state.messages.map((message, index) => <li key={index}> {message} </li>)}</ul>

				{/* Change code above this line */}
			</div>
		);
	}
}

//   03
// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (message) => ({
	type: ADD,
	message
});

const messageReducer = (state = [], action) => {
	switch (action.type) {
		case ADD: {
			return [ ...state, action.message ];
		}
	}

	return state;
};

const store = Redux.createStore(messageReducer);

// 04
