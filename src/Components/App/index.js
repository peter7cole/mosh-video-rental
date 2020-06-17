import React, { Component } from 'react';
import './App.css';
import Table from '../MovieTable';

export default class App extends Component {
	render() {
		return (
			<main className="container">
				<Table />
			</main>
		);
	}
}
