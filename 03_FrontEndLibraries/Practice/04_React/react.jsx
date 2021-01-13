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
