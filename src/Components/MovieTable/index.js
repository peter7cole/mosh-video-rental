import React, { Component } from 'react';
import './MovieTable.css';
import LikeHeart from '../common/LikeHeart';

export default class Table extends Component {
	render() {
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
						{this.props.movies.map(movie => (
							<tr key={movie._id}>
								<td>{movie.genre.name}</td>
								<td>{movie.title}</td>
								<td>{movie.numberInStock}</td>
								<td>{movie.dailyRentalRate}</td>
								<td>
									<LikeHeart liked={movie.liked} />
								</td>
								<td>
									<button
										onClick={() => this.props.onDelete(movie)}
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
