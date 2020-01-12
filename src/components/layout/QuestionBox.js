import React from 'react';

const QuestionBox = props => {
	return (
		<div
			className='all-center textbox'
			style={{ marginTop: '3vh', ...props.style }}
		>
			{props.question}
		</div>
	);
};

export default QuestionBox;
