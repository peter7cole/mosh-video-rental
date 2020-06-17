import React, { Component } from 'react';
import './MovieTable.css';
import MovieList from '../MovieList';

export default class Table extends Component {
	render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th>Genre</th>
							<th>Stock</th>
							<th>Rate</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<MovieList />
					</tbody>
				</table>
			</div>
		);
	}
}
