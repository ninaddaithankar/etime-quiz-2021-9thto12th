import React from 'react';
import { Player } from 'video-react';

class VideoScreen extends React.Component {
	componentDidMount() {
		//this.player.subscribeToStateChange(this.handleStateChange.bind(this));
		this.player.addEventListener('ended', this.props.startTimer);
	}

	// handleStateChange(state, prevState) {
	// 	// copy player state to this component's state
	// 	if (state.duration === state.currentTime) this.props.startTimer();
	// }

	render() {
		return (
			<Player
				ref={player => {
					this.player = player;
				}}
				fluid={false}
				width={800}
				playsInline
				poster='/assets/poster.png'
				src={this.props.source}
			/>
		);
	}
}

export default VideoScreen;
