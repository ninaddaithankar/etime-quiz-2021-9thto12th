import React from 'react';
import { Link } from 'react-router-dom';

const VideoLink = props => {
	return (
		<div className='all-center'>
			<Link
				to={`/main/double/videoquestion/${props.number}`}
				style={{ color: 'cyan', ...props.style }}
			>
				<span style={numberStyle}>
					{props.number}
					<br />
				</span>
				<i className='fas fa-film' style={iconStyle}></i>
			</Link>
		</div>
	);
};

const numberStyle = {
	fontWeight: 'bold',
	color: 'cyan',
	fontSize: '3rem'
};

const iconStyle = { color: 'lightgreen', fontSize: '9vw' };

export default VideoLink;
