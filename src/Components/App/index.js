import React, { Component } from 'react';
import './App.css';
import MovieCounter from '../MovieCounter';
import Table from '../MovieTable';

export default class App extends Component {
	render() {
		return (
			<main className="container">
				<MovieCounter />
				<Table />
			</main>
		);
	}
}
