import React, { Component } from 'react';
import './App.css';
import Counter from '../MovieCounter';
import Table from '../MovieTable';
import { getMovies } from '../../services/fakeMovieService';

export default class App extends Component {
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
		const { movies, movieCount } = this.state;
		if (movieCount === 0) return <p>There are no movies in the database</p>;
		return (
			<main className="container">
				<Counter movieCount={movieCount} />
				<Table movies={movies} onDelete={this.handleDelete} />
			</main>
		);
	}
}
