import React from 'react/addons';
import { Link } from 'react-router';

const App = React.createClass( {
	displayName: 'App',

	render() {
		return this.props.children;
	}
} );

export default App;
