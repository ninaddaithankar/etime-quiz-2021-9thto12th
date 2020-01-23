import React, { useState, useEffect } from 'react';
import Title from '../layout/Title';
import QuestionBox from '../layout/QuestionBox';
import CustomModal from '../layout/CustomModal';
import Timer from '../layout/Timer';
import { questions } from './Questions';

const MixedBagQuestion = props => {
	const choice = props.match.params.choice_no - 1;
	const [modalText, setModalText] = useState({ title: '', body: '' });
	const [modalShow, setModalShow] = useState(false);
	const [time, setTime] = useState(25);
	const [isActive, setIsActive] = useState(false);

	const showModal = (title, body) => {
		setModalText({ title, body });
		setModalShow(true);
	};

	const startTimer = () => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		let interval = null;
		if (isActive && time === 0) {
			clearInterval(interval);
			setTimeUp();
		} else if (isActive) {
			interval = setInterval(() => {
				setTime(time => time - 1);
			}, 1000);
		}
		return () => {
			clearInterval(interval);
		};
		//eslint-disable-next-line
	}, [isActive, time]);

	const setTimeUp = () => {
		if (time === 0) {
			document.getElementById('title_box').innerHTML = 'TIME UP';
		}
	};

	return (
		<div className='all-center'>
			<Title
				style={{ marginTop: '7vh' }}
				showBack={true}
				backLink='/main/mixedbag'
				text={questions[choice].topic}
			/>
			<div className='grid-6'>
				<Timer
					style={{
						gridColumn: '1 / span 1',
						margin: 'auto'
					}}
					time={time}
					startTimer={startTimer}
				/>
				<QuestionBox
					style={{
						gridColumn: '2 / span 4',
						marginTop: '3vh',
						height: '60vh',
						width: '60vw'
					}}
					question={questions[choice].question}
				/>
			</div>
			<div style={{ marginTop: '7vh' }}>
				<button
					className='btn capital'
					style={{ paddingLeft: '3.2rem', paddingRight: '3.2rem' }}
					onClick={() => showModal('Clue', questions[choice].clue)}
				>
					Clue
				</button>
				<button
					className='btn capital'
					style={{ marginLeft: '2vw' }}
					onClick={() => showModal('Answer', questions[choice].answer)}
				>
					Answer
				</button>
			</div>
			<CustomModal
				titletext={modalText.title}
				bodytext={modalText.body}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
};

export default MixedBagQuestion;
