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
						{this.props.movies.map(m => (
							<tr key={m._id}>
								<td>{m.genre.name}</td>
								<td>{m.title}</td>
								<td>{m.numberInStock}</td>
								<td>{m.dailyRentalRate}</td>
								<td>
									<LikeHeart liked={m.liked} />
								</td>
								<td>
									<button
										onClick={() => this.props.onDelete(m)}
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
