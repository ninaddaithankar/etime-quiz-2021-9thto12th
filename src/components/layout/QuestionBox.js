import React from 'react';

const QuestionBox = props => {
	return (
		<div
			id='question_box'
			className='all-center textbox'
			style={{ marginTop: '1vh', ...props.style }}
		>
			{props.question}
		</div>
	);
};

export default QuestionBox;
