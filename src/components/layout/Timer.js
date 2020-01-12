import React from 'react';

const Timer = props => {
	return (
		<h1
			className='round-timer'
			style={{
				gridColumnStart: '5',
				gridColumnEnd: '6',
				marginTop: '3vh',
				...props.style
			}}
			onChange={props.updateTimer}
		>
			{props.time}
		</h1>
	);
};

export default Timer;
