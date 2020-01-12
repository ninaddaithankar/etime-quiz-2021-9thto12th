import React from 'react';
import Title from '../layout/Title';
import SingleAnswer from './SingleAnswer';
import { questions } from './RapidFireQuestions';

const RapidFireAnswer = props => {
	const choice = props.match.params.choice_no;
	return (
		<div className='all-center'>
			<Title text='Answers' showBack={true} backLink='/main/rapidfire' />
			<div style={{ width: '80vw', marginTop: '3vh' }}>
				{questions[choice].map(question => (
					<SingleAnswer questionSet={question} />
				))}
			</div>
		</div>
	);
};

export default RapidFireAnswer;
