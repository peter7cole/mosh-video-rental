import React, { Component } from 'react';
import './App.css';
import Counter from '../MovieCounter';
import MovieTable from '../MovieTable';
import { getMovies } from '../../services/fakeMovieService';
import { getGenres } from '../../services/fakeGenreService';
import Pagination from '../common/Pagination';
import paginate from '../../utils/paginate';
import ListGroup from '../common/ListGroup';
import _ from 'lodash';

export default class App extends Component {
	state = {
		movies: [],
		genres: [],
		itemsPerPage: 4,
		currentPage: 1,
		selectedGenre: { _id: '', name: 'All Genres' }, // current solution to a default genre
		sortColumn: { path: 'title', order: 'asc' }
	};

	// this lifecycle method is called when an instance of this component is rendered in the DOM
	componentDidMount() {
		const genres = [this.state.selectedGenre, ...getGenres()];
		this.setState({ movies: getMovies(), genres });
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
		this.setState({ selectedGenre: genre, currentPage: 1 });
	};

	handleSort = sortColumn => {
		this.setState({ sortColumn });
	};

	render() {
		const {
			movies,
			genres,
			itemsPerPage,
			currentPage,
			selectedGenre,
			sortColumn
		} = this.state;

		const { length: movieCount } = movies;

		if (movieCount === 0) return <p>There are no movies in the database</p>;

		const moviesFiltered =
			selectedGenre.name !== 'All Genres'
				? movies.filter(movie => movie.genre._id === selectedGenre._id)
				: movies;

		const sortedMovies = _.orderBy(
			moviesFiltered,
			[sortColumn.path],
			[sortColumn.order]
		);

		const moviesPaginated = paginate(sortedMovies, currentPage, itemsPerPage);

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
					<Counter movieCount={moviesFiltered.length} />
					<MovieTable
						moviesPaginated={moviesPaginated}
						onLike={this.handleLike}
						onDelete={this.handleDelete}
						onSort={this.handleSort}
						sortColumn={sortColumn}
					/>
					<Pagination
						itemsCount={moviesFiltered.length}
						itemsPerPage={itemsPerPage}
						onPageChange={this.handlePageChange}
						currentPage={currentPage}
					/>
				</div>
			</div>
		);
	}
}
