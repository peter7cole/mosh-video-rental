import React, { Component } from 'react';
import './Table.css';

export default class Table extends Component {
	render() {
		return (
			<div>
				<table>
					<tr>
						<th>Title</th>
						<th>Genre</th>
						<th>Stock</th>
						<th>Rate</th>
						<th></th>
					</tr>
				</table>
			</div>
		);
	}
}
