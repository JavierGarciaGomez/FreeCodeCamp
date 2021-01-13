// 2
const JSX = (
	<div>
		<h1 />
		<p />
		<ul>
			<li />
			<li />
			<li />
		</ul>
	</div>
);

// 4

// Change code below this line
ReactDom.render(JSX, document.querySelector('#challenge-node'));

//   13

// Change code below this line

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>My First React Component!</h1>
			</div>
		);
	}
}

ReactDOM.render(<MyComponent />, document.querySelector('#challenge-node'));

// 15 default props
const ShoppingCart = (props) => {
	return (
		<div>
			<h1>Shopping Cart Component</h1>
		</div>
	);
};
// Change code below this line
ShoppingCart.defaultProps = { items: 0 };

//   17

const Items = (props) => {
	return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

// Change code below this line
Items.propTypes = { quantity: PropTypes.number.isRequired };
// Change code above this line

Items.defaultProps = {
	quantity: 0
};

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Items />;
	}
}

//   19 Accessing props using this

class ReturnTempPassword extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{/* Change code below this line */}
				<p>
					Your temporary password is: <strong />
				</p>
				{/* Change code above this line */}
			</div>
		);
	}
}

class ResetPassword extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h2>Reset Password</h2>
				<h3>We've generated a new temporary password for you.</h3>
				<h3>Please reset this password from your account settings ASAP.</h3>
				{/* Change code below this line */}

				{/* Change code above this line */}
			</div>
		);
	}
}

/* 
 20 
  React: Review Using Props with Stateless Functional Components
Except for the last challenge, you've been passing props to stateless functional components. These components act like pure functions. They accept props as input and return the same view every time they are passed the same props. You may be wondering what state is, and the next challenge will cover it in more detail. Before that, here's a review of the terminology for components.


A stateless functional component is any function you write which accepts props and returns JSX. A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state (covered in the next challenge). Finally, a stateful component is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.

A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

The code editor has a CampSite component that renders a Camper component as a child. Define the Camper component and assign it default props of { name: 'CamperBot' }. Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop. Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.
  */

// 20

class CampSite extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Camper />
			</div>
		);
	}
}
// Change code below this line

const Camper = (props) => {
	return <p>{props.name}</p>;
};

Camper.defaultProps = {
	name: 'CamperBot'
};

Camper.propTypes = {
	name: PropTypes.string.isRequired
};

// 21
class StatefulComponent extends React.Component {
	constructor(props) {
		super(props);
		// Only change code below this line
		this.state = {
			name: 'Javier'
		};
		// Only change code above this line
	}
	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
			</div>
		);
	}
}

//   22
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'freeCodeCamp'
		};
	}
	render() {
		return (
			<div>
				{/* Change code below this line */}
				<h1>{this.state.name} </h1>
				{/* Change code above this line */}
			</div>
		);
	}
}

//   23
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'freeCodeCamp'
		};
	}
	render() {
		// Change code below this line
		const name = this.state.name;
		// Change code above this line
		return (
			<div>
				{/* Change code below this line */}
				<h1>{name}</h1>
				{/* Change code above this line */}
			</div>
		);
	}
}

//   24
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Initial State'
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		// Change code below this line
		this.setState({ name: 'Javier' });
		// Change code above this line
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Click Me</button>
				<h1>{this.state.name}</h1>
			</div>
		);
	}
}

//   25
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Hello'
		};
		// Change code below this line
		this.handleClick = this.handleClick.bind(this);
		// Change code above this line
	}
	handleClick() {
		this.setState({
			text: 'You clicked!'
		});
	}
	render() {
		return (
			<div>
				{/* Change code below this line */}
				<button onClick={this.handleClick}>Click Me</button>
				{/* Change code above this line */}
				<h1>{this.state.text}</h1>
			</div>
		);
	}
}

//   27
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  increment () {
    this.setState((state) =>({
      count: state.count+1
    }))
  }
  decrement () {
    this.setState((state) =>({
      count: state.count-1
    }))
  }
  reset () {
    this.setState((state) =>({
      count: 0
    }))
  }
  
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

// 27
class ControlledInput extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		input: ''
	  };
	  // Change code below this line
	  
	  // Change code above this line
	}
	// Change code below this line
	handleChange(event){
	  let string = event.target.value
	  console.log(string);
	  this.setState({
		input: string
	  })
	}
	// Change code above this line
	render() {
	  return (
		<div>
		  { /* Change code below this line */}
		  <input onChange = {this.handleChange.bind(this)} value={this.state.input}/>
		  { /* Change code above this line */}
		  <h4>Controlled Input:</h4>
		  <p>{this.state.input}</p>
		</div>
	  );
	}
  };

//   29
// 29
class MyForm extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		input: '',
		submit: ''
	  };
	}
	handleChange(event) {
	  this.setState({
		input: event.target.value
	  });
	}
  
	// saves the input value into submit
	handleSubmit(event) {
	  event.preventDefault();
	  // Change code below this line
	  console.log(event.target.value)
	  // Change code above this line
	  this.setState( state => ({
		submit: state.input
	  }))
	}
	render() {
	  const {input, submit} = this.state;
	  return (
		<div>
		  <form onSubmit={this.handleSubmit.bind(this)}>
			{/* Change code below this line */}
			<input onChange = {this.handleChange.bind(this)} value={input}/>
			{/* Change code above this line */}
			<button type='submit'>Submit!</button>
		  </form>
		  {/* Change code below this line */}
		  <h1>{submit}</h1>
		  {/* Change code above this line */}
		</div>
	  );
	}
  }

//   30


class MyApp extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		name: 'CamperBot'
	  }
	}
	render() {
	  console.log(this.state)
	  return (
		 <div>
		   {/* Change code below this line */}
		   <Navbar name={this.state.name}/>
		   {/* Change code above this line */}
		 </div>
	  );
	}console.log({this.props.input});
  };
  
  class Navbar extends React.Component {
	constructor(props) {
	  super(props);
	}
	render() {
	  return (
	  <div>
		{/* Change code below this line */}
		<h1>Hello, my name is: {this.props.name}</h1>
		{/* Change code above this line */}
	  </div>
	  );
	}
  };

//   31 React: Pass a Callback as Props
class MyApp extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		inputValue: ''
	  }
	  this.handleChange = this.handleChange.bind(this);
	}
	// method that sets the state inputValue
	handleChange(event) {
	  this.setState({
		inputValue: event.target.value
	  });
	}
	render() {
	  console.log("hereee")
	  console.log(this.state.inputValue)
	  return (
		 <div>
		  { /* Change code below this line */ }
		  // we call the child and pass the input and the handleChange method
		  <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
		  <RenderInput input={this.state.inputValue} />
		  { /* Change code above this line */ }
		 </div>
	  );
	}
  };
  
  class GetInput extends React.Component {
	constructor(props) {
	  super(props);
	}
	
	render() {
	  return (
		<div>
		  <h3>Get Input:</h3>
		  <input
			// with this we set the value of the input (if We dont write anything, remains the same, because is equal of the value)
			value={this.props.input}
			// with this We call the method of the parent (myApp)
			onChange={this.props.handleChange}/>
		</div>
	  );
	}
  };
  
  class RenderInput extends React.Component {
	constructor(props) {
	  super(props);
	}
	render() {
	  return (
		<div>
		  <h3>Input Render:</h3>
		  <p>{this.props.input}</p>
		</div>
	  );
	}
  };

//   32

class MyComponent extends React.Component {
	constructor(props) {
	  super(props);
	}
	componentWillMount() {
	  // Change code below this line
	  console.log("before mount")
	  // Change code above this line
	}
	render() {
	  return <div />
	}
  };

//   33
class MyComponent extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		activeUsers: null
	  };
	}
	componentDidMount() {
	  setTimeout(() => {
		this.setState({
		  activeUsers: 1273
		});
	  }, 2500);
	}
	render() {
	  return (
		<div>
		  {/* Change code below this line */}
		  <h1>Active Users: {this.state.activeUsers}</h1>
		  {/* Change code above this line */}
		</div>
	  );
	}
  }

//    34 Add Event Listeners
class MyComponent extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		message: ''
	  };
	  this.handleEnter = this.handleEnter.bind(this);
	  this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	// Change code below this line
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}
	componentWillUnmount() {
	  document.addEventListener('keydown', this.handleKeyPress);
	}
	// Change code above this line
	handleEnter() {
	  console.log('Im in handleEnter()');
	  this.setState((state) => ({
		message: state.message + 'You pressed the enter key! '
	  }));
	}
	handleKeyPress(event) {
	  console.log('Im in handleKeyPress()');
	  if (event.keyCode === 13) {
		this.handleEnter();
	  }
	}
	render() {
	  return (
		<div>
		  <h1>{this.state.message}</h1>
		</div>
	  );
	}
  };


//   35 React: Add Event Listeners
class MyComponent extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		message: ''
	  };
	  this.handleEnter = this.handleEnter.bind(this);
	  this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	// Change code below this line
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}
	componentWillUnmount() {
	  document.removeEventListener('keydown', this.handleKeyPress);
	}
	// Change code above this line
	handleEnter() {
	  console.log('Im in handleEnter()');
	  this.setState((state) => ({
		message: state.message + 'You pressed the enter key! '
	  }));
	}
	handleKeyPress(event) {
	  console.log('Im in handleKeyPress()');
	  if (event.keyCode === 13) {
		this.handleEnter();
	  }
	}
	render() {
	  return (
		<div>
		  <h1>{this.state.message}</h1>
		</div>
	  );
	}
  };

//   36 React: Optimize Re-Renders with shouldComponentUpdate

class OnlyEvens extends React.Component {
	constructor(props) {
	  super(props);
	}
	shouldComponentUpdate(nextProps, nextState) {
	  console.log(this.props);
	  console.log(nextProps);
  
  
	  console.log('Should I update?');
	  // Change code below this line
	  if (nextProps.value %2 === 0){
		return true;
	  }
	  
	  // Change code above this line
	}
	componentDidUpdate() {
	  console.log('Component re-rendered.');
	}
	render() {
	  return <h1>{this.props.value}</h1>;
	}
  }
  
  class Controller extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		value: 0
	  };
	  this.addValue = this.addValue.bind(this);
	}
	addValue() {
	  this.setState(state => ({
		value: state.value + 1
	  }));
	}
	render() {
	  return (
		<div>
		  <button onClick={this.addValue}>Add</button>
		  <OnlyEvens value={this.state.value} />
		</div>
	  );
	}
  }

//   36
class Colorful extends React.Component {
	render() {
	  return (
		<div style={{color: 'red', fontSize: 72}}>Big Red</div>
	  );
	}
  };

//   37 React: Add Inline Styles in React
const styles = {
    color: 'purple',
    fontSize: 40,
    border: "2px solid purple"
  }
  
class Colorful extends React.Component {
  
  render() {

    return (
      <div style={styles}>Big Red</div>
    );
  }
};

// 38
const inputStyle = {
	width: 235,
	margin: 5
  };
  
  class MagicEightBall extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		userInput: '',
		randomIndex: ''
	  };
	  this.ask = this.ask.bind(this);
	  this.handleChange = this.handleChange.bind(this);
	}
	ask() {
	  if (this.state.userInput) {
		this.setState({
		  randomIndex: Math.floor(Math.random() * 20),
		  userInput: ''
		});
	  }
	}
	handleChange(event) {
	  this.setState({
		userInput: event.target.value
	  });
	}
	render() {
	  const possibleAnswers = [
		'It is certain',
		'It is decidedly so',
		'Without a doubt',
		'Yes, definitely',
		'You may rely on it',
		'As I see it, yes',
		'Outlook good',
		'Yes',
		'Signs point to yes',
		'Reply hazy try again',
		'Ask again later',
		'Better not tell you now',
		'Cannot predict now',
		'Concentrate and ask again',
		"Don't count on it",
		'My reply is no',
		'My sources say no',
		'Most likely',
		'Outlook not so good',
		'Very doubtful'
	  ];
	  const answer = 'change me!'; // Change this line
	  return (
		<div>
		  <input
			type='text'
			value={this.state.userInput}
			onChange={this.handleChange}
			style={inputStyle}
		  />
		  <br />
		  <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
		  <br />
		  <h3>Answer:</h3>
		  <p>
			{/* Change code below this line */}
			{possibleAnswers[this.state.randomIndex]}
			{/* Change code above this line */}
		  </p>
		</div>
	  );
	}
  }

//   39 React: Render with an If-Else Condition

class MyComponent extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		display: true
	  }
	  this.toggleDisplay = this.toggleDisplay.bind(this);
	}
	toggleDisplay() {
	  this.setState((state) => ({
		display: !state.display
	  }));
	}
	render() {
	  // Change code below this line
	  console.log(this.state.display);
	  if(this.state.display){
	  return (
		 <div>
		   <button onClick={this.toggleDisplay}>Toggle Display</button>
		   <h1>Displayed!</h1>
		 </div>
	  );
  
	  } else{
			return (
		 <div>
		   <button onClick={this.toggleDisplay}>Toggle Display</button>
		 </div>
	  );
	  }
  
	}
  };

//   40 React: Use && for a More Concise Conditional

class MyComponent extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		display: true
	  }
	  this.toggleDisplay = this.toggleDisplay.bind(this);
	}
	toggleDisplay() {
	  this.setState(state => ({
		display: !state.display
	  }));
	}
	render() {
	  // Change code below this line
	  
	  return (
		 <div>
		   <button onClick={this.toggleDisplay}>Toggle Display</button>
		   {(this.state.display) && 
		   <h1>Displayed!</h1>}
		 </div>
	  );
	}
  };

//   41 React: Use a Ternary Expression for Conditional Rendering
const inputStyle = {
	width: 235,
	margin: 5
  };
  
  class CheckUserAge extends React.Component {
	constructor(props) {
	  super(props);
	  // Change code below this line
	  this.state = {
		userAge: '',
		input: ''
	  }
	  // Change code above this line
	  this.submit = this.submit.bind(this);
	  this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
	  this.setState({
		input: e.target.value,
		userAge: ''
	  });
	}
	submit() {
	  this.setState(state => ({
		userAge: state.input
	  }));
	}
	render() {
	  const buttonOne = <button onClick={this.submit}>Submit</button>;
	  const buttonTwo = <button>You May Enter</button>;
	  const buttonThree = <button>You Shall Not Pass</button>;
	  return (
		<div>
		  <h3>Enter Your Age to Continue</h3>
		  <input
			style={inputStyle}
			type='number'
			value={this.state.input}
			onChange={this.handleChange}
		  />
		  <br />
		  {/* Change code below this line */}
			{
			this.state.userAge === ''
			  ? buttonOne
			  : this.state.userAge >= 18
				? buttonTwo
				: buttonThree
			}
		  {/* Change code above this line */}
		</div>
	  );
	}
  }

//   42 React: Render Conditionally from PropsPassed
const Results = (props) => (<h1>{
	props.fiftyFifty?'You Win!':'You Lose!'
	  }</h1>
	)
  
  class GameOfChance extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		counter: 1
	  };
	  this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
	  this.setState({
		counter: 1+this.state.counter // Change this line
	  });
	}
	render() {
	  const expression = Math.random()>0.5; // Change this line
	  console.log(expression);
	  return (
		<div>
		  <button onClick={this.handleClick}>Play Again</button>
		  {/* Change code below this line */}
		  <Results fiftyFifty={expression}/>
		  {/* Change code above this line */}
		  <p>{'Turn: ' + this.state.counter}</p>
		</div>
	  );
	}
  }

//   43 React: Change Inline CSS Conditionally Based on Component State

class GateKeeper extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		input: ''
	  };
	  this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
	  this.setState({ input: event.target.value })
	}
	render() {
  
	  // Change code below this line
	  let inputLength = this.state.input.length
	  
	  let inputStyle = inputLength>15?{
		border: '3px solid red'
	  }:{
		border: '1px solid black'
	  };
	  // Change code above this line
	  return (
		<div>
		  <h3 style={inputStyle}>Don't Type Too Much:</h3>
		  <input
			type="text"
			style={inputStyle}
			value={this.state.input}
			onChange={this.handleChange} />
		</div>
	  );
	}
  };

//   44 React: Use Array.map() to Dynamically Render Elements
const textAreaStyles = {
	width: 235,
	margin: 5
  };
  
  class MyToDoList extends React.Component {
	constructor(props) {
	  super(props);
	  // Change code below this line
	  this.state = {
		userInput: "",
		toDoList: []
	  };
  
	  // Change code above this line
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit() {
	  const itemsArray = this.state.userInput.split(',');
	  this.setState({
		toDoList: itemsArray
	  });
	}
	handleChange(e) {
	  this.setState({
		userInput: e.target.value
	  });
	}
	render() {
	  const items = this.state.toDoList.map( item => (
		<li>{item}</li>
	  )
		
	  ); // Change this line
	  return (
		<div>
		  <textarea
			onChange={this.handleChange}
			value={this.state.userInput}
			style={textAreaStyles}
			placeholder='Separate Items With Commas'
		  />
		  <br />
		  <button onClick={this.handleSubmit}>Create List</button>
		  <h1>My "To Do" List:</h1>
		  <ul>{items}</ul>
		</div>
	  );
	}
  }

//   45 React: Give Sibling Elements a Unique Key Attribute
const frontEndFrameworks = [
	'React',
	'Angular',
	'Ember',
	'Knockout',
	'Backbone',
	'Vue'
  ];
  
  function Frameworks() {
	const renderFrameworks = frontEndFrameworks.map((framework, index) => (<li key={index}>{framework}</li>))
	return (
	  <div>
		<h1>Popular Front End JavaScript Frameworks</h1>
		<ul>
		  {renderFrameworks}
		</ul>
	  </div>
	);
  };

  //46 React: Use Array.filter() to Dynamically Filter an Array
  class MyComponent extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		users: [
		  {
			username: 'Jeff',
			online: true
		  },
		  {
			username: 'Alan',
			online: false
		  },
		  {
			username: 'Mary',
			online: true
		  },
		  {
			username: 'Jim',
			online: false
		  },
		  {
			username: 'Sara',
			online: true
		  },
		  {
			username: 'Laura',
			online: true
		  }
		]
	  };
	}
	render() {
	  const usersOnline = this.state.users.filter(user =>user.online); // Change this line
	  console.log(usersOnline)
	  const renderOnline = usersOnline.map((user, index) => (
		<li key={index}>{user.username}</li>
	  )); // Change this line
	  console.log(renderOnline)
	  return (
		<div>
		  <h1>Current Online Users:</h1>
		  <ul>{renderOnline}</ul>
		</div>
	  );
	}
  }


//   47
class App extends React.Component {
	constructor(props) {
	  super(props);
	}
	render() {
	  return <div/>
	}
  };
  
  // Change code below this line
  ReactDOMServer.renderToString(<App />);