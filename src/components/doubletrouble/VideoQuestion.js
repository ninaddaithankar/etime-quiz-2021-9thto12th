import React, { useState, useEffect } from 'react';
import Title from '../layout/Title';
import QuestionBox from '../layout/QuestionBox';
import CustomModal from '../layout/CustomModal';
import { VideoQuestions as Video } from './Questions';
import Timer from '../layout/Timer';
import ReactPlayer from 'react-player';
import video1 from '../../assets/video/1.mp4';
import video2 from '../../assets/video/2.mp4';
import video3 from '../../assets/video/3.mp4';
import video4 from '../../assets/video/4.mp4';
import video5 from '../../assets/video/5.mp4';
import video6 from '../../assets/video/6.mp4';

const VideoQuestion = props => {
	const [time, setTime] = useState(25);
	const [modalText, setModalText] = useState({ title: '', body: '' });
	const [modalShow, setModalShow] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const videos = [video1, video2, video3, video4, video5, video6];

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
					<Timer time={time} />
				</div>
				<div style={{ marginTop: '2vh' }}>
					<ReactPlayer
						url={videos[choice]}
						controls={true}
						onEnded={startTimer}
						height={480}
						width={854}
					/>
				</div>
				<div style={{ margin: 'auto' }}>
					<button
						className='btn'
						onClick={() => {
							showModal('Clue', Video[choice].clue);
						}}
						style={{ marginTop: '2vh', width: '10.5rem', marginLeft: '2vw' }}
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
						style={{ marginTop: '4vh', marginLeft: '2vw' }}
					>
						Answer
					</button>
				</div>
			</div>
			<QuestionBox
				question={Video[choice].question}
				style={{ marginTop: '10vh', height: '10vh', width: '60vw' }}
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
