import React from 'react';

const ListGroup = props => {
	const {
		items,
		valueProperty,
		textProperty,
		onItemSelect,
		selectedItem
	} = props;
	return (
		<ul className="list-group">
			{items.map(item => (
				<li
					key={item[valueProperty]}
					className={
						item._id === selectedItem._id
							? 'list-group-item active'
							: 'list-group-item'
					}
					onClick={() => onItemSelect(item)}
				>
					{item[textProperty]}
				</li>
			))}
		</ul>
	);
};

// Use bracket notation in the list element above to access properties dynamically instead of dot notation. Allows to be reused for any kind of lists in the future.

ListGroup.defaultProps = {
	textProperty: 'name',
	valueProperty: '_id'
};

// Default props above are used to clean up the component props in the parent component.

export default ListGroup;
