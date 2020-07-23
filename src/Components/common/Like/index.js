import React, { Component } from 'react';

// Input is liked: boolean
// Output is onClick: change that boolean, in this case an empty or full heart

export default class LikeHeart extends Component {
	render() {
		let classes = 'fa fa-heart';
		if (!this.props.liked) classes += '-o';
		return (
			<div>
				<i className={classes} aria-hidden="true" />
			</div>
		);
	}
}
