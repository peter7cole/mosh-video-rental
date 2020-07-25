import React, { Component } from 'react';
import './App.css';
import Counter from '../MovieCounter';
import Table from '../MovieTable';
import { getMovies } from '../../services/fakeMovieService';
import Pagination from '../common/Pagination';
import paginate from '../../utils/paginate';

export default class App extends Component {
	state = {
		movies: getMovies(),
		movieCount: getMovies().length,
		itemsPerPage: 4,
		currentPage: 1
	};

	handleLike = movie => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	};

	handleDelete = movie => {
		const movies = this.state.movies.filter(m => m._id !== movie._id);
		const movieCount = movies.length;
		this.setState({ movies, movieCount });
	};

	handlePageChange = page => {
		this.setState({ currentPage: page });
	};

	render() {
		const { movies, movieCount, itemsPerPage, currentPage } = this.state;
		if (movieCount === 0) return <p>There are no movies in the database</p>;

		return (
			<main className="container">
				<Counter movieCount={movieCount} />
				<Table
					moviesPaginated={paginate(movies, currentPage, itemsPerPage)}
					onLike={this.handleLike}
					onDelete={this.handleDelete}
				/>
				<Pagination
					itemsCount={movieCount}
					itemsPerPage={itemsPerPage}
					onPageChange={this.handlePageChange}
					currentPage={currentPage}
				/>
			</main>
		);
	}
}
