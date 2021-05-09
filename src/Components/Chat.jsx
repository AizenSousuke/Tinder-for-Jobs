import { Avatar } from "@material-ui/core";
import React from "react";
import "./Chat.css"

const Chat = ({ name, message, timestamp, profilepic }) => {
	return (
		<div className="chat">
			<Avatar className="chat__image" alt={name} src={profilepic} />
			<div className="chat__details">
				<h2>{name}</h2>
				<p>{message}</p>
			</div>
			<p className="chat__timestamp">{timestamp}</p>
		</div>
	);
};

export default Chat;
