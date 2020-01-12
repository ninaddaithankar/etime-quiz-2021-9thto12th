import React, { Component } from 'react';
import Timer from '../layout/Timer';
import QuestionBox from '../layout/QuestionBox';
import { questions } from './RapidFireQuestions';

class RapidFireQuestion extends Component {
	state = {
		time: 30,
		choice: this.props.match.params.choice_no - 1,
		question_no: 0
	};

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	tick = () => {
		this.setState({
			time: this.state.time - 1
		});
		if (this.state.time === 0) {
			clearInterval(this.timerId);
		}
	};

	componentWillUnmount() {
		if (this.timerId) {
			clearInterval(this.timerId);
		}
	}

	nextQuestion = () => {
		if (this.state.question_no < questions[this.state.choice].length - 1) {
			console.log(this.state.question_no, questions[this.state.choice].length);
			this.setState({
				question_no: this.state.question_no + 1
			});
		} else {
			this.props.history.push(`/main/rapidfire/answers/${this.state.choice}`);
		}
	};

	render() {
		const { choice, question_no } = this.state;
		return (
			<div className='all-center'>
				<Timer style={{ marginTop: '5vh' }} time={this.state.time} />
				<QuestionBox
					style={{ marginTop: '7vh', height: '45vh' }}
					question={questions[choice][question_no].question}
				/>
				<i
					className='fa fa-chevron-circle-right'
					style={{
						fontSize: '6rem',
						gridColumnStart: '9',
						gridColumnEnd: '10',
						marginTop: '10vh',
						cursor: 'pointer'
					}}
					onClick={this.nextQuestion}
				/>
			</div>
		);
	}
}

export default RapidFireQuestion;
