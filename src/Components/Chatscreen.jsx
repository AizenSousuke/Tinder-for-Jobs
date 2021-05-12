import { Avatar, Button, Input } from "@material-ui/core";
import React, { useRef, useState } from "react";
import "./Chatscreen.css";

const Chatscreen = ({ name }) => {
	const companyName = window.location.pathname
		.substring(window.location.pathname.lastIndexOf("/") + 1)
		.toUpperCase();

	const [input, setInput] = useState("");

	const [messages, setMessages] = useState([
		{
			type: "receiver",
			name: companyName,
			image: "...",
			message: "Whats up? Are you looking for a job change?",
		},
		{
			type: "sender",
			name: "You",
			image: "...",
			message: "Yes. I'm interested.",
		},
		{
			type: "receiver",
			name: companyName,
			image: "...",
			message:
				"Please provide your resume if you're interested in the position.",
		},
		{
			type: "sender",
			name: "You",
			image: "...",
			message:
				"My resume is at http://resume.com/resume.docx",
		},
	]);

	const handleSend = (e) => {
		e.preventDefault();
		setMessages((messages) => [
			...messages,
			{
				type: "sender",
				name: "You",
				image: "...",
				message: input,
			},
		]);
		setInput("");
		lastMessage.current?.scrollIntoView();
		setTimeout(() => {
			setMessages((messages) => [
				...messages,
				{
					type: "receiver",
					name: companyName,
					image: "...",
					message: "Occaecat aliquip ipsum occaecat ut Lorem veniam exercitation tempor..",
				},
			]);
			lastMessage.current?.scrollIntoView({ behavior: "smooth" });
		}, Math.random() * 3000);
	};

	const lastMessage = useRef();

	return (
		<div className="chatscreen content">
			<div>
				<h3 className="chatscreen__timestamp">{companyName}</h3>
				<p className="chatscreen__timestamp">
					You matched with {companyName ?? "Company Name"} on{" "}
					{"01/01/2020"}
				</p>
			</div>
			{messages.map((message, key) => {
				return (
					<div
						className={`chatscreen__message
							${message.type === "receiver" ? `` : `chatscreen__message__right`}
						`}
						key={key}
					>
						<Avatar alt={message.name} src={message.image} />
						<div
							className={`chatscreen__bubble ${
								message.type === "receiver"
									? ``
									: `chatscreen__bubble__reply`
							}`}
						>
							{message.message}
						</div>
					</div>
				);
			})}
			<div ref={lastMessage} style={{ height: "20vh" }}></div>
			<div className="chatscreen__input">
				<Input
					placeholder={"Type a message"}
					fullWidth
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type="text"
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleSend(e);
						}
					}}
				/>
				<Button
					variant={"text"}
					color={"secondary"}
					onClick={handleSend}
				>
					Send
				</Button>
			</div>
		</div>
	);
};

export default Chatscreen;
