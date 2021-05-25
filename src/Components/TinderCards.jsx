import React from "react";
import TinderCard from "react-tinder-card";
import "../App.css";

const TinderCards = ({ company = [], onSwipeLeft, onSwipeRight }) => {

	return (
		<div className="card__container content">
			{company !== [] ? company.map((card, key) => (
				<TinderCard
					key={key}
					className="swipe"
					preventSwipe={["up", "down"]}
					onCardLeftScreen={(dir) => {
						console.log(card.name + ":" + dir);
						if (dir === "left") {
							onSwipeLeft(card);
						}
						else {
							onSwipeRight(card);
						}
					}}
				>
					<div
						style={{ backgroundImage: `url(${card.url})` }}
						className="tinder__cards"
					>
						<h3>{card.name}</h3>
					</div>
				</TinderCard>
			)) : ""}
			<h3 className="tinder__cards__end">
				This is the end. Please come back again tomorrow.
			</h3>
		</div>
	);
};

export default TinderCards;
