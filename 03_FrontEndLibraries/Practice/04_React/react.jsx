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

//   26
