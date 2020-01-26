import React from 'react';
import Title from '../layout/Title';
import Repeat from 'react-repeat-component';
import AudioLink from '../layout/AudioLink';
import VideoLink from '../layout/VideoLink';

const DoubleTroubleTeamSelection = () => {
	return (
		<div className='all-center'>
			<Title text='Double Trouble' showBack={true} backLink='/main' />
			<Repeat times={6} className='grid-6' style={{ marginTop: '7vh' }}>
				{i => <VideoLink key={i + 1} number={i + 1} />}
			</Repeat>

			<Repeat times={6} className='grid-6' style={{ marginTop: '5vh' }}>
				{i => <AudioLink key={i + 1} number={i + 1} />}
			</Repeat>
		</div>
	);
};

export default DoubleTroubleTeamSelection;
