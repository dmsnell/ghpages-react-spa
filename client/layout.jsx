import React from 'react/addons';
import { Link } from 'react-router';

import Post from 'components/post';

const Layout = React.createClass( {
	displayName: 'Layout',

	getInitialState() {
		return {
			hasPosts: false,
			isFetching: false,
			posts: []
		}
	},

	componentDidMount() {
		this.fetchPostMeta();
	},

	fetchPostMeta() {
		if ( this.state.hasPosts || this.state.isFetching ) {
			return;
		}

		this.setState( { isFetching: true }, () => {
			fetch( '/posts.json' )
				.then( response => response.json() )
				.then( this.parsePostMeta )
				.then( () => this.setState( { hasPosts: true, isFetching: false } ) )
				.catch( () => this.setState( { isFetching: false } ) );
		} );
	},

	parsePostMeta( json ) {
		const posts = json
			.map( post => ( {
				title: post.title,
				url: post.href
			} ) );

		this.setState( { posts } );
	},

	render() {
		return (
			<div>
				<h1>Success</h1>
				<Link to={`/broken-link`}>A broken link</Link>
				<h2>Posts</h2>
				<ul>
				{ this.state.posts.map( ( post, index ) => (
					<li key={ `post-item-${ index }` }><Link to={ post.url }>{ post.title }</Link></li>
				) ) }
				</ul>
			</div>
		);
	}
} );

export default Layout;
