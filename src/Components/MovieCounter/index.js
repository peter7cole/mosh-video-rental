import React, { Component } from 'react';
import './MovieCounter.css';
import { getMovies } from '../../services/fakeMovieService';

export default class MovieCounter extends Component {
	render() {
		const movieCount = getMovies().length;
		return (
			<div>
				<p>Showing {movieCount} movies in the database.</p>
			</div>
		);
	}
}
