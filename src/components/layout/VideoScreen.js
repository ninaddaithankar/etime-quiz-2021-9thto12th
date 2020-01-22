import React from 'react';
import { Player } from 'video-react';

export default props => {
	return (
		<Player
			fluid={false}
			width={800}
			playsInline
			poster='/assets/poster.png'
			src={props.source}
		/>
	);
};
