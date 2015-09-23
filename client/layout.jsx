import React from 'react/addons';
import { Link } from 'react-router';

const Layout = React.createClass( {
	displayName: 'Layout',

	render() {
		return (
			<div>
				<h1>Success</h1>
				<Link to={`/broken-link`}>A broken link</Link>
			</div>
		);
	}
} );

export default Layout;
