import { Avatar } from "@material-ui/core";
import { MessageOutlined } from "@material-ui/icons";
import React from "react";
import "./Chat.css";

const Chat = ({ name, message, timestamp, profilepic, unread }) => {
	return (
		<div className={`${unread ? `chat__unread` : `chat`}`}>
			<Avatar className="chat__image" alt={name} src={profilepic} />
			<div className="chat__details">
				<h2>{name}</h2>
				<p>{message}</p>
			</div>
			<p className="chat__timestamp">{timestamp}</p>
			{unread === true ? <MessageOutlined color="error" className="chat__badge" /> : ""}
		</div>
	);
};

export default Chat;
