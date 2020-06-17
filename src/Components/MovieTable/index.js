import React, { Component } from 'react';
import './MovieTable.css';
import { getMovies } from '../../services/fakeMovieService';

export default class Table extends Component {
	state = {
		movies: getMovies(),
		movieCount: getMovies().length
	};

	handleDelete = movie => {
		const movies = this.state.movies.filter(m => m._id !== movie._id);
		const movieCount = movies.length;
		this.setState({ movies, movieCount });
	};

	render() {
		if (this.state.movieCount === 0)
			return <p>There are no movies in the database</p>;
		return (
			<React.Fragment>
				<p>Showing {this.state.movieCount} movies in the database.</p>
				<table className="table">
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
						{this.state.movies.map(movie => (
							<tr key={movie._id}>
								<td>{movie.genre.name}</td>
								<td>{movie.title}</td>
								<td>{movie.numberInStock}</td>
								<td>{movie.dailyRentalRate}</td>
								<td>
									<button
										onClick={() => this.handleDelete(movie)}
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
