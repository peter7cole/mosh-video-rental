import React, { Component } from 'react';
import Movie from '../Movie';
import { getMovies } from '../../services/fakeMovieService';

export default class MovieList extends Component {
	render() {
		const movies = getMovies();
		return (
			<React.Fragment>
				{movies.map(movie => (
					<Movie
						key={movie._id}
						title={movie.title}
						genre={movie.genre.name}
						stock={movie.numberInStock}
						rate={movie.dailyRentalRate}
					/>
				))}
			</React.Fragment>
		);
	}
}
