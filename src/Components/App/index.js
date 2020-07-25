import React, { Component } from 'react';
import './App.css';
import Counter from '../MovieCounter';
import Table from '../MovieTable';
import { getMovies } from '../../services/fakeMovieService';
import { getGenres } from '../../services/fakeGenreService';
import Pagination from '../common/Pagination';
import paginate from '../../utils/paginate';
import ListGroup from '../common/ListGroup';

export default class App extends Component {
	state = {
		movies: [],
		genres: [],
		itemsPerPage: 4,
		currentPage: 1
	};

	// this method is called when an instance of this component is rendered in the DOM
	componentDidMount() {
		this.setState({ movies: getMovies(), genres: getGenres() });
	}

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

	handleGenreSelect = genre => {
		this.setState({ selectedGenre: genre });
	};

	render() {
		const {
			movies,
			genres,
			itemsPerPage,
			currentPage,
			selectedGenre
		} = this.state;
		const movieCount = movies.length;
		if (movieCount === 0) return <p>There are no movies in the database</p>;

		return (
			<div className="row">
				<div className="col-2">
					<ListGroup
						items={genres}
						onItemSelect={this.handleGenreSelect}
						selectedItem={selectedGenre}
					/>
				</div>
				<div className="col">
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
				</div>
			</div>
		);
	}
}
