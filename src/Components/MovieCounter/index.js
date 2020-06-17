import React, { Component } from 'react';

export default class Counter extends Component {
	render() {
		return <p>Showing {this.props.movieCount} movies in the database.</p>;
	}
}
