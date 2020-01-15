import React from 'react';
import { Link } from 'react-router-dom';
import './MainScreen.css';
import Title from './layout/Title';

const Main = () => {
	return (
		<div className='all-center'>
			<Title text='Rounds' />
			<div className='grid-2' style={{ marginTop: '5vh' }}>
				<Link to='main/teams' className='rectangle-card'>
					Take Your Pick
				</Link>
				<Link to='/main/test' className='rectangle-card'>
					Mixed Bag
				</Link>
				<Link className='rectangle-card'>Double Trouble</Link>
				<Link to='/main/rapidfire' className='rectangle-card'>
					Rapid Fire
				</Link>
			</div>
		</div>
	);
};

export default Main;
