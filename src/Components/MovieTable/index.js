import React from 'react';
import './MovieTable.css';
import Like from '../common/Like';

const MovieTable = props => {
	const { moviesPaginated, onLike, onDelete, onSort } = props;
	return (
		<React.Fragment>
			<table className="table">
				<thead>
					<tr>
						<th onClick={() => onSort('title')}>Title</th>
						<th onClick={() => onSort('genre.name')}>Genre</th>
						<th onClick={() => onSort('numberInStock')}>Stock</th>
						<th onClick={() => onSort('dailyRentalRate')}>Rate</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{moviesPaginated.map(movie => (
						<tr key={movie._id}>
							<td>{movie.genre.name}</td>
							<td>{movie.title}</td>
							<td>{movie.numberInStock}</td>
							<td>{movie.dailyRentalRate}</td>
							<td>
								<Like liked={movie.liked} onLike={() => onLike(movie)} />
							</td>
							<td>
								<button
									onClick={() => onDelete(movie)}
									className="btn btn-danger btn-sm"
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</React.Fragment>
	);
};

export default MovieTable;
