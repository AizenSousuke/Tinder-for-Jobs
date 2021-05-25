import "./App.css";
import Header from "./Components/Header.jsx";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TinderCards from "./Components/TinderCards";
import SwipeButtons from "./Components/SwipeButtons";
import Chats from "./Components/Chats";
import Chatscreen from "./Components/Chatscreen";
import database from "./firebase";

function App() {
	const [company, setCompany] = useState([]);
	const [currentCompany, setCurrentCompany] = useState([]);
	const [swipedRight, setSwipedRight] = useState([]);
	const [swipedLeft, setSwipedLeft] = useState([]);

	useEffect(() => {
		// This will run once
		database
			.collection("companies")
			.get()
			.then((querySnapshot) => {
				let data = [];
				querySnapshot.docs.forEach((doc) => {
					data.push(doc.data());
				});
				setCompany(data);
				setCurrentCompany(data);
			});

		database
			.collection("likedCompanies")
			.get()
			.then((querySnapshot) => {
				let data = [];
				querySnapshot.docs.forEach((doc) => {
					data.push(doc.data());
				});
				setSwipedRight(data);
			});

		database
			.collection("skippedCompanies")
			.get()
			.then((querySnapshot) => {
				let data = [];
				querySnapshot.docs.forEach((doc) => {
					data.push(doc.data());
				});
				setSwipedLeft(data);
			});
	}, []);

	const removeCurrentCompanyFromArray = (rightOrLeft, card) => {
		if (rightOrLeft) {
			setSwipedRight((prevState) =>
				[...prevState].filter((prev) => prev.name === card.name)
					.length > 0
					? [...prevState]
					: [...prevState, card]
			);
		} else {
			setSwipedLeft((prevState) =>
				[...prevState].filter((prev) => prev.name === card.name)
					.length > 0
					? [...prevState]
					: [...prevState, card]
			);
		}
		setCurrentCompany((prevState) =>
			[...prevState].filter((_, i) => i !== prevState.length - 1)
		);
	};

	const onSwipeLeft = (card) => {
		removeCurrentCompanyFromArray(false, card);
	};

	const onSwipeRight = (card) => {
		removeCurrentCompanyFromArray(true, card);
	};

	const buttonActions = (company, action) => {
		console.log(company, action);
	};

	return (
		<>
			<Router>
				{/* Put items that will appear on every page here */}
				<Switch>
					<Route path="/chat/:company">
						<Header backButton="/chat" />
						<Chatscreen />
					</Route>
					<Route path="/chat">
						<Header backButton="/" />
						{/* Chat screen */}
						<Chats
							chatData={[
								{
									name: "Nintendo",
									message:
										"Whats up? Are you looking for a job change?",
									timestamp: "10 seconds ago",
									profilepic:
										"https://content.fortune.com/wp-content/uploads/2015/07/gettyimages-480544636.jpg",
									unread: true,
								},
								{
									name: "Tesla",
									message:
										"Whats up? Are you looking for a job change?",
									timestamp: "10 seconds ago",
									profilepic:
										"https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg",
									unread: false,
								},
							]}
						/>
					</Route>
					{/* Home */}
					<Route path="/">
						<Header />
						{/* Tinder Cards */}
						<TinderCards
							company={company}
							onSwipeLeft={(e) => onSwipeLeft(e)}
							onSwipeRight={(e) => onSwipeRight(e)}
						/>
						<SwipeButtons
							onButtonsClicked={buttonActions}
							company={currentCompany}
							like={"is liked"}
						/>
					</Route>
				</Switch>
			</Router>
			{/* Buttons */}
		</>
	);
}

export default App;
