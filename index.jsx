import React from 'react';
import { IndexRoute, Router, Route, Link } from 'react-router';

import App from 'app';
import ErrorPage from 'error-page';
import Layout from 'layout';

React.render( (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Layout} />
			<Route path="*" component={ErrorPage}/>
		</Route>
	</Router>
), document.body );
