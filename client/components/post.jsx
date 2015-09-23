import React from 'react/addons';
import { Link } from 'react-router';

const Post = React.createClass( {
	displayName: 'Post',

	getInitialState() {
		return {
			hasContent: false,
			isFetching: false,
			content: 'Loading post...'
		}
	},

	componentDidMount() {
		this.loadPost();
	},

	loadPost() {
		const post = this.props.params;

		if ( this.state.hasContent || this.state.isFetching ) {
			return;
		}

		this.setState( { isFetching: true }, () => {
			fetch( `/${ post.year }/${ post.month }/${ post.title }/index.html` )
				.then( response => response.text() )
				.then( html => this.setState( {
					hasContent: true,
					isFetching: false,
					content: html
				} ) )
				.catch( () => this.setState( { isFetching: false } ) );
		} );
	},

	render() {
		const post = this.props.params;

		return (
			<div>
				<h1>{ post.title }</h1>
				<Link to={`/`}>Home</Link>
				<div dangerouslySetInnerHTML={ { __html: this.state.content } } />
			</div>
		);
	}
} );

export default Post;
