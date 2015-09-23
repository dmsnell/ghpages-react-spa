import React from 'react';
import { IndexRoute, Router, Route, Link } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

const history = createHistory( { queryKey: false } );

import App from 'app';
import ErrorPage from 'error-page';
import Layout from 'layout';

React.render( (
	<Router history={ history }>
		<Route path="/" component={App}>
			<IndexRoute component={Layout} />
			<Route path="*" component={ErrorPage}/>
		</Route>
	</Router>
), document.body );
