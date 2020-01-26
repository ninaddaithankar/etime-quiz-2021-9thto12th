import React from 'react';
import { Link } from 'react-router-dom';
import { isClicked } from './IsClicked';

class RoundCardsSelection extends React.Component {
	render() {
		const { props } = this;
		return (
			<div className='grid-3' style={{ marginTop: '5vh' }}>
				<Link
					to={`${props.link}/question/1`}
					className='round-card'
					style={isClicked[0] ? inActive : {}}
					onClick={() => {
						isClicked[0] = true;
					}}
				>
					1
				</Link>
				<Link
					to={`${props.link}/question/2`}
					className='round-card'
					style={isClicked[1] ? inActive : {}}
					onClick={() => {
						isClicked[1] = true;
					}}
				>
					2
				</Link>
				<Link
					to={`${props.link}/question/3`}
					className='round-card'
					style={isClicked[2] ? inActive : {}}
					onClick={() => {
						isClicked[2] = true;
					}}
				>
					3
				</Link>
				<Link
					to={`${props.link}/question/4`}
					className='round-card'
					style={isClicked[3] ? inActive : {}}
					onClick={() => {
						isClicked[3] = true;
					}}
				>
					4
				</Link>
				<Link
					to={`${props.link}/question/5`}
					className='round-card'
					style={isClicked[4] ? inActive : {}}
					onClick={() => {
						isClicked[4] = true;
					}}
				>
					5
				</Link>
				<Link
					to={`${props.link}/question/6`}
					className='round-card'
					style={isClicked[5] ? inActive : {}}
					onClick={() => {
						isClicked[5] = true;
					}}
				>
					6
				</Link>
			</div>
		);
	}
}

const inActive = {
	background: 'none',
	color: 'white',
	border: '1px solid white'
};

export default RoundCardsSelection;
