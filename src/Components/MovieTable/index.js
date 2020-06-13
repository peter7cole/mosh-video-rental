import React, { Component } from 'react';
import './MovieTable.css';
import MovieList from '../MovieList';

export default class Table extends Component {
	state = {};

	render() {
		return (
			<div>
				<table>
					<tr>
						<th>Title</th>
						<th>Genre</th>
						<th>Stock</th>
						<th>Rate</th>
						<th></th>
					</tr>
					<MovieList />
				</table>
			</div>
		);
	}
}
