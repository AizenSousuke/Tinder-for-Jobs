import React from "react";
import { Link } from "react-router-dom";
import Chat from "./Chat";

const Chats = ({ chatData = [] }) => {
	return (
		<div className="chats">
			{chatData
				? chatData.map((chat, key) => {
						return (
							<Link
								to={`/chat/${chat.name}`}
								style={{ textDecoration: "none" }}
								key={key}
							>
								<Chat
									name={chat.name}
									message={chat.message}
									timestamp={chat.timestamp}
									profilepic={chat.profilepic}
								/>
							</Link>
						);
				  })
				: ""}
		</div>
	);
};

export default Chats;
