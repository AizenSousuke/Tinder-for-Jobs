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
									message: "Whats up",
									timestamp: "10 seconds ago",
									profilepic:
										"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
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
