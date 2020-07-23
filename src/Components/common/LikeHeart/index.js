import React, { Component } from 'react';

// Input is liked: boolean
// Output is onClick: change that boolean, in this case an empty or full heart

export default class LikeHeart extends Component {
	render() {
		return (
			<div>
				<i className="fas fa-heart-o" aria-hidden="true"></i>
			</div>
		);
	}
}
