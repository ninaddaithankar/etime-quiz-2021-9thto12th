import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeScreen.css';

const Welcome = () => {
	return (
		<div className='all-center'>
			<div style={{ marginTop: '15vh', color: 'white', fontWeight: '600' }}>
				<span className='all-center title-heading' style={{ fontSize: '4rem' }}>
					Welcome to
					<br />
				</span>
				<span
					className='all-center title-heading'
					style={{ color: '#f0ffce', fontSize: '8rem' }}
				>
					E-TIME QUIZ
					<br />
				</span>
				<span className='all-center title-heading' style={{ fontSize: '4rem' }}>
					Inter-School
					<br />
				</span>
			</div>
			<Link to='/main' className='btn' style={{ marginTop: '20vh' }}>
				Start
			</Link>
		</div>
	);
};

export default Welcome;
