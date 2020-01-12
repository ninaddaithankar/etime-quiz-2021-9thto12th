import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Question.css';
import QuestionBox from '../layout/QuestionBox';
import Title from '../layout/Title';
import Timer from '../layout/Timer';

class Question extends Component {
	state = {
		group_no: 1,
		question:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sapiente consequatur odit libero nostrum.',
		options: [],
		options_visible: false,
		choice_no: this.props.match.params.choice_no,
		time: 25
	};

	startTimer = () => {
		this.timerId = setInterval(() => this.tick(), 1000);
	};

	tick = () => {
		this.setState({
			time: this.state.time - 1
		});
		if (this.state.time === 0) {
			clearInterval(this.timerId);
		}
	};

	updateTimer = e => {
		this.setState({
			time: e.target.value - 1
		});
	};

	showOptions = () => {
		this.setState({
			options_visible: !this.state.options_visible
		});
		this.startTimer();
	};

	render() {
		return (
			<div className='all-center'>
				<Title
					style={{ marginTop: '2.5vh', fontSize: '1.7rem' }}
					text={`Group ${this.state.group_no}`}
					backLink='/main/teams'
					showBack={false}
				/>
				<QuestionBox question={this.state.question} />
				<div className='inline-grid-9'>
					<Link to='/main/teams' style={{ color: 'white' }}>
						<i
							className='fa fa-chevron-circle-left '
							style={{
								fontSize: '4.5rem',
								gridColumnStart: '1',
								gridColumnEnd: '2',
								marginTop: '5vh',
								cursor: 'pointer'
							}}
							onClick={this.backToOptionSelect}
						></i>
					</Link>
					<Timer updateTimer={this.updateTimer} time={this.state.time} />
					<i
						className='fa fa-chevron-circle-right'
						style={{
							fontSize: '4.5rem',
							gridColumnStart: '9',
							gridColumnEnd: '10',
							marginTop: '5vh',
							cursor: 'pointer'
						}}
					></i>
				</div>
				{!this.state.options_visible && (
					<button
						style={{
							fontFamily: 'Montserrat',
							fontSize: '2rem',
							marginTop: '4vh',
							height: '35vh',
							cursor: 'pointer'
						}}
						className='all-center textbox bg-dark'
						onClick={this.showOptions}
					>
						Reveal
					</button>
				)}
				{this.state.options_visible && (
					<div className='grid-2 large' style={{ marginTop: '1vh' }}>
						<button className='option-button'>Option 1</button>
						<button className='option-button'>Option 2</button>
						<button className='option-button'>Option 3</button>
						<button className='option-button'>Option 4</button>
					</div>
				)}
			</div>
		);
	}
}

export default Question;
