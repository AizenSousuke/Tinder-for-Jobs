import React from "react";
import { Link } from "react-router-dom";
import Chat from "./Chat";

const Chats = ({ chatData = [] }) => {
	return (
		<div className="chats content">
			{chatData
				? chatData.map((chat, key) => {
						return (
							<Link
								to={`/chat/${chat.name}`}
								style={{ textDecoration: "none", color: "rgba(255,119,119,1)" }}
								key={key}
							>
								<Chat
									name={chat.name}
									message={chat.message}
									timestamp={chat.timestamp}
									profilepic={chat.profilepic}
									unread={chat.unread}
								/>
							</Link>
						);
				  })
				: ""}
		</div>
	);
};

export default Chats;
