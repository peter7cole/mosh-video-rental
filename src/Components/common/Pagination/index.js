import React from 'react';

const Pagination = props => {
	const { itemsCount, itemsPerPage, onPageChange } = props;
	const pagesCount = Math.ceil(itemsCount / itemsPerPage);
	if (pagesCount <= 1) return null;
	const pages = [];
	for (let i = 0; i < pagesCount; i++) {
		pages[i] = i + 1;
	}

	return (
		<nav>
			<ul className="pagination">
				{pages.map(page => (
					<li key={page} className="page-item">
						<a
							href="/"
							className="page-link"
							onClick={() => onPageChange(page)}
						>
							{page}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
