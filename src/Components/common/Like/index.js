import React from 'react';
import './Like.css';

// Stateless functional components don't need a this anywhere as props is passed as an argument. They also require the export to be separate.

const Like = props => {
	let classes = 'fa fa-heart';
	if (!props.liked) classes += '-o';
	return (
		<i
			onClick={() => props.onLike(props.movie)}
			className={classes}
			aria-hidden="true"
		/>
	);
};

export default Like;
