import React, { Component } from 'react';

export default class Movie extends Component {
	render() {
		const { title, genre, stock, rate } = this.props;
		return (
			<React.Fragment>
				<tr>
					<td>{title}</td>
					<td>{genre}</td>
					<td>{stock}</td>
					<td>{rate}</td>
					<td>
						<button>DELETE</button>
					</td>
				</tr>
			</React.Fragment>
		);
	}
}
