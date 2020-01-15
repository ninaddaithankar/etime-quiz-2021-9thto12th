import React, { Component } from 'react';
import Title from '../layout/Title';
import QuestionBox from '../layout/QuestionBox';

export class MixedBagQuestion extends Component {
	render() {
		return (
			<div className='all-center'>
				<Title
					style={{ marginTop: '4vh', fontSize: '1.7rem' }}
					showBack={false}
					text='Science and Technology'
				/>
				<QuestionBox />
			</div>
		);
	}
}

export default MixedBagQuestion;
