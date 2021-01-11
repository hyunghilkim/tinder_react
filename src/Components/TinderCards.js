import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
	const [People, setPeople] = useState([
		{
			name: 'steve jobs',
			url: 'https://source.unsplash.com/collection/1',
		},
		{
			name: 'mark zuckerberg',
			url: 'https://source.unsplash.com/collection/2',
		},
	]);

	return (
		<div>
			<h1>Tinder Cards</h1>
			<div className="tinderCards__cardContainer">
				{People.map((person, index) => {
					return (
						<TinderCard
							key={index}
							className="swipe"
							preventSwipe={['up', 'down']}
						>
							<div
								style={{ backgroundImage: `url(${person.url})` }}
								className="card"
							>
								<h3>{person.name}</h3>
							</div>
						</TinderCard>
					);
				})}
			</div>
		</div>
	);
}

export default TinderCards;
