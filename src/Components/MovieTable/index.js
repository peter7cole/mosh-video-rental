import React, { Component } from 'react';
import './MovieTable.css';
import Like from '../common/Like';
import { map } from 'lodash';

class MovieTable extends Component {
	raiseSort = path => {
		let sortColumn = { ...this.props.sortColumn };
		if (sortColumn.path === path) {
			sortColumn = sortColumn.order === 'asc' ? 'desc' : 'asc';
		} else {
			sortColumn.path = path;
			sortColumn.order = 'asc';
		}
		this.props.onSort(sortColumn);
	};

	render() {
		const { moviesPaginated, onLike, onDelete } = this.props;
		return (
			<React.Fragment>
				<table className="table">
					<thead>
						<tr>
							<th onClick={() => this.raiseSort('title')}>Title</th>
							<th onClick={() => this.raiseSort('genre.name')}>Genre</th>
							<th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
							<th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
							<th />
							<th />
						</tr>
					</thead>
					<tbody>
						{moviesPaginated.map(m => (
							<tr key={m._id}>
								<td>{m.title}</td>
								<td>{m.genre.name}</td>
								<td>{m.numberInStock}</td>
								<td>{m.dailyRentalRate}</td>
								<td>
									<Like liked={m.liked} onLike={() => onLike(m)} />
								</td>
								<td>
									<button
										onClick={() => onDelete(m)}
										className="btn btn-danger btn-sm"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}

export default MovieTable;
