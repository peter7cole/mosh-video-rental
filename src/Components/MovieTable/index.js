import React, { Component } from 'react';
import './MovieTable.css';
import Like from '../common/Like';

export default class Table extends Component {
	render() {
		const { moviesPaginated, onLike, onDelete } = this.props;
		return (
			<React.Fragment>
				<table className="table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Genre</th>
							<th>Stock</th>
							<th>Rate</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{moviesPaginated.map(movie => (
							<tr key={movie._id}>
								<td>{movie.genre.name}</td>
								<td>{movie.title}</td>
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
