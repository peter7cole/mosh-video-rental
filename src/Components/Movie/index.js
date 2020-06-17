import React, { Component } from 'react';
import './Movie.css';

export default class Movie extends Component {
	render() {
		const { title, genre, stock, rate } = this.props;
		return (
			<tr>
				<td>{title}</td>
				<td>{genre}</td>
				<td>{stock}</td>
				<td>{rate}</td>
				<td>
					<button>Delete</button>
				</td>
			</tr>
		);
	}
}
