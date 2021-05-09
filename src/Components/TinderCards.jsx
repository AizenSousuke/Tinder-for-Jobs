import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "../App.css";
import database from "../firebase";

const TinderCards = ({ onSwipeLeft, onSwipeRight }) => {
	const [company, setCompany] = useState([]);

	useEffect(() => {
		// This will run once
		database
			.collection("companies")
			.get()
			.then((querySnapshot) => {
				let data = [];
				querySnapshot.docs.forEach((doc) => {
					// console.log(doc.data());
					data.push(doc.data());
				});
				setCompany(data);
			});
	}, []);

	return (
		<div className="card__container">
			{company.map((card, key) => (
				<TinderCard
					key={key}
					className="swipe"
					preventSwipe={["up", "down"]}
					onCardLeftScreen={(dir) => {
						console.log(card.name + ":" + dir);
						if (dir === "left") {
							// onSwipeLeft(card.name);
						}
						else {
							// onSwipeRight(card.name);
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
			))}
			<h3 className="tinder__cards__end">
				This is the end. Please come back again tomorrow.
			</h3>
		</div>
	);
};

export default TinderCards;
