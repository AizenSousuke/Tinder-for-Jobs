import "./App.css";
import Header from "./Components/Header.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TinderCards from "./Components/TinderCards";
import SwipeButtons from "./Components/SwipeButtons";
import Chats from "./Components/Chats";
import Chatscreen from "./Components/Chatscreen";

function App() {
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
						<TinderCards />
						<SwipeButtons />
					</Route>
				</Switch>
			</Router>
			{/* Buttons */}
		</>
	);
}

export default App;
