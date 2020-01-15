import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Main from './components/Main';
import TeamSelection from './components/mcq/TeamSelection';
import Question from './components/mcq/Question';
import NoMatch from './components/NoMatch';
import RapidFireQuestion from './components/rapidfire/RapidFireQuestion';
import RapidFireAnswer from './components/rapidfire/RapidFireAnswer';
import MixedBagQuestion from './components/mixedbag/MixedBagQuestion';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					{/* Initial Routes */}
					<Route exact path='/' component={Welcome} />
					<Route exact path='/main' component={Main} />

					{/* Take-Your-Pick Routes */}
					<Route
						exact
						path='/main/teams'
						render={props => (
							<TeamSelection
								{...props}
								round='Take Your Pick'
								link='/main/teams'
							/>
						)}
					/>
					<Route
						exact
						path='/main/teams/question/:choice_no'
						component={Question}
					/>

					{/* Mixed-Bag Routes */}
					<Route exact path='/main/test' component={MixedBagQuestion} />

					{/* Rapid-Fire Routes */}
					<Route
						exact
						path='/main/rapidfire'
						render={props => (
							<TeamSelection
								{...props}
								round='Rapid Fire'
								link='/main/rapidfire'
							/>
						)}
					/>
					<Route
						exact
						path='/main/rapidfire/answers/:choice_no'
						component={RapidFireAnswer}
					/>
					<Route
						exact
						path='/main/rapidfire/question/:choice_no'
						component={RapidFireQuestion}
					/>

					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
