//  1 Redux: Create a Redux Store
const reducer = (state = 5) => {
	return state;
};

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

let store = Redux.createStore(reducer);
console.log(store);

//   2 Get State
const store = Redux.createStore((state = 5) => state);

// Change code below this line

let currentState = store.getState();
console.log(currentState);

//   3 Redux: Define a Redux Action
// Define an action here:
const action = {
	type: 'LOGIN'
};

// 4. Define an Action Creator
const action = {
	type: 'LOGIN'
};
// Define an action creator here:
function actionCreator() {
	return action;
}

console.log(actionCreator());

//   5 Redux: Dispatch an Action Event
const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
	return {
		type: 'LOGIN'
	};
};

// Dispatch the action here:

console.log(store.dispatch(loginAction()));

//   6 Redux: Handle an Action in the Store

const defaultState = {
	login: false
};

const reducer = (state = defaultState, action) => {
	// Change code below this line
	if (action.type === 'LOGIN') {
		return {
			login: true
		};
	} else {
		return state;
	}
	// Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
	return {
		type: 'LOGIN'
	};
};

//    7 Redux: Use a Switch Statement to Handle Multiple Actions
const defaultState = {
	authenticated: false
};

const authReducer = (state = defaultState, action) => {
	// Change code below this line
	switch (action.type) {
		case 'LOGIN':
			return {
				authenticated: true
			};
			break;

		case 'LOGOUT':
			return {
				authenticated: false
			};
			break;

		default:
			return state;
	}
	// Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
	return {
		type: 'LOGIN'
	};
};

const logoutUser = () => {
	return {
		type: 'LOGOUT'
	};
};

//   Constant
// Change code below this line
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
// Change code above this line

const defaultState = {
	authenticated: false
};

const authReducer = (state = defaultState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				authenticated: true
			};

		case LOGOUT:
			return {
				authenticated: false
			};

		default:
			return state;
	}
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
	return {
		type: LOGIN
	};
};

const logoutUser = () => {
	return {
		type: LOGOUT
	};
};

// 9 Redux: Register a Store Listener

// 10 Redux: Combine Multiple Reducers
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		default:
			return state;
	}
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = { authenticated: false }, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				authenticated: true
			};
		case LOGOUT:
			return {
				authenticated: false
			};
		default:
			return state;
	}
};

const rootReducer = Redux.combineReducers({
	auth: authReducer,
	count: counterReducer
});

const store = Redux.createStore(rootReducer);

function logStateChange() {
	console.log(store.getState());
}

console.log('Initial state: ', store.getState());

store.subscribe(logStateChange);

store.dispatch({ type: LOGIN });

console.log('after dispatch login state: ', store.getState());
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });

console.log('after dispatch increment state: ', store.getState());

// 11
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
	switch (action.type) {
		// Change code below this line
		case ADD_NOTE: {
			return action.text;
		}

		// Change code above this line
		default:
			return state;
	}
};

const addNoteText = (note) => {
	// Change code below this line
	console.log(note);
	return {
		type: ADD_NOTE,
		text: note
	};

	// Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

//
const INCREMENT = 'INCREMENT'; // define a constant for increment action types
const DECREMENT = 'DECREMENT'; // define a constant for decrement action types

// define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1;

		case DECREMENT:
			return state - 1;

		default:
			return state;
	}
};

// define an action creator for incrementing
const incAction = () => {
	return {
		type: INCREMENT
	};
};

// define an action creator for decrementing
const decAction = () => {
	return {
		type: DECREMENT
	};
};

// define the Redux store here, passing in your reducers
const store = Redux.createStore(counterReducer);

// 14 Never Mutate State
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [ 'Go to the store', 'Clean the house', 'Cook dinner', 'Learn to code' ];

const immutableReducer = (state = todos, action) => {
	switch (action.type) {
		case ADD_TO_DO:
			// Don't mutate state here or the tests will fail
			return [ ...state, action.todo ];
		default:
			return state;
	}
};

const addToDo = (todo) => {
	return {
		type: ADD_TO_DO,
		todo
	};
};

const store = Redux.createStore(immutableReducer);

// 15

const immutableReducer = (state = [ 'Do not mutate state!' ], action) => {
	switch (action.type) {
		case 'ADD_TO_DO':
			// Don't mutate state here or the tests will fail
			return [ ...state, action.todo ];
		default:
			return state;
	}
};

const addToDo = (todo) => {
	return {
		type: 'ADD_TO_DO',
		todo
	};
};

const store = Redux.createStore(immutableReducer);

//   16 Remove an Item from an Array
const immutableReducer = (state = [ 0, 1, 2, 3, 4, 5 ], action) => {
	switch (action.type) {
		case 'REMOVE_ITEM':
			// Don't mutate state here or the tests will fail
			return [ ...state.slice(0, action.index).concat(...state.slice(action.index + 1)) ];
		default:
			return state;
	}
};

const removeItem = (index) => {
	return {
		type: 'REMOVE_ITEM',
		index
	};
};

const store = Redux.createStore(immutableReducer);
