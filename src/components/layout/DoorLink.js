import React from 'react';
import { Link } from 'react-router-dom';

const DoorLink = props => {
	return (
		<div className='all-center'>
			<Link
				to={`/main/mixedbag/question/${props.number}`}
				style={{ color: 'cyan', ...props.style }}
			>
				<span style={numberStyle}>
					{props.number}
					<br />
				</span>
				<i className='fas fa-door-closed' style={doorStyle}></i>
			</Link>
		</div>
	);
};

const numberStyle = {
	fontWeight: 'bold',
	color: 'cyan',
	fontSize: '3rem'
};

const doorStyle = { color: 'lightgreen', fontSize: '7vw' };

export default DoorLink;
