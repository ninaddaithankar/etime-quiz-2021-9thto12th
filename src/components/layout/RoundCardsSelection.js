import React from 'react';
import { Link } from 'react-router-dom';

const RoundCardsSelection = props => {
	return (
		<div className='grid-3' style={{ marginTop: '5vh' }}>
			<Link to={`${props.link}/question/1`} className='round-card'>
				1
			</Link>
			<Link to={`${props.link}/question/2`} className='round-card'>
				2
			</Link>
			<Link to={`${props.link}/question/3`} className='round-card'>
				3
			</Link>
			<Link to={`${props.link}/question/4`} className='round-card'>
				4
			</Link>
			<Link to={`${props.link}/question/5`} className='round-card'>
				5
			</Link>
			<Link to={`${props.link}/question/6`} className='round-card'>
				6
			</Link>
		</div>
	);
};

export default RoundCardsSelection;
