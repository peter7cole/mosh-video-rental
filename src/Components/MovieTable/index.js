import React, { Component } from 'react';
import './MovieTable.css';
import Like from '../common/Like';

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
						{moviesPaginated.map(movie => (
							<tr key={movie._id}>
								<td>{movie.title}</td>
								<td>{movie.genre.name}</td>
								<td>{movie.numberInStock}</td>
								<td>{movie.dailyRentalRate}</td>
								<td>
									<Like liked={movie.liked} onLike={() => onLike(movie)} />
								</td>
								<td>
									<button
										onClick={() => onDelete(movie)}
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
