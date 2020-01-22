import React, { useState, useEffect } from 'react';
import Title from '../layout/Title';
import VideoScreen from '../layout/VideoScreen';
import video1 from '../../assets/video/test.mp4';
import QuestionBox from '../layout/QuestionBox';
import CustomModal from '../layout/CustomModal';
import { VideoQuestions as Video } from './Questions';
import Timer from '../layout/Timer';

const VideoQuestion = props => {
	const [time, setTime] = useState(25);
	const [modalText, setModalText] = useState({ title: '', body: '' });
	const [modalShow, setModalShow] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const choice = props.match.params.choice_no - 1;

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
		} else if (isActive) {
			interval = setInterval(() => {
				setTime(time => time - 1);
			}, 1000);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, time]);

	return (
		<div className='all-center'>
			<Title
				text='Question'
				showBack={true}
				backLink='/main/double'
				style={{ marginTop: '6vh', fontSize: '1.7rem ' }}
			/>

			<div className='grid-3' style={{ width: '80vw', marginTop: '2vh' }}>
				<div style={{ margin: 'auto' }}>
					<Timer time={time} startTimer={startTimer} />
				</div>
				<div style={{ marginTop: '2vh' }}>
					<VideoScreen source={video1} />
				</div>
				<div style={{ margin: 'auto' }}>
					<button
						className='btn'
						onClick={() => {
							showModal('Clue', Video[choice].clue);
						}}
						style={{ marginTop: '2vh', width: '10.5rem' }}
					>
						Clue
					</button>
					<br />
					<button
						className='btn'
						onClick={() => {
							showModal('Answer', Video[choice].answer);
							setIsActive(false);
						}}
						style={{ marginTop: '4vh' }}
					>
						Answer
					</button>
				</div>
			</div>
			<QuestionBox
				question={Video[choice].question}
				style={{ marginTop: '10vh', height: '10vh', width: '50vw' }}
			/>
			<CustomModal
				titletext={modalText.title}
				bodytext={modalText.body}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
};

export default VideoQuestion;
