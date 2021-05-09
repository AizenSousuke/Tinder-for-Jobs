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
			message: "Whats up",
		},
		{
			type: "sender",
			name: "You",
			image: "...",
			message: "Fine",
		},
		{
			type: "receiver",
			name: companyName,
			image: "...",
			message:
				"Whats in? Incididunt nostrud est est tempor tempor minim minim esse incididunt ad nisi duis adipisicing magna. Reprehenderit laborum id in dolor id in dolor dolore. In eiusmod fugiat sint nulla laboris dolore exercitation qui. Esse ad in officia reprehenderit fugiat deserunt cillum ullamco duis. Aliqua esse ullamco pariatur amet irure proident veniam ea elit. Irure eiusmod eiusmod dolore dolore sunt do Lorem consequat.",
		},
		{
			type: "sender",
			name: "You",
			image: "...",
			message:
				"Nothing. In amet tempor ad officia. Deserunt sunt eu sint mollit proident ad. In eu amet quis non in adipisicing. Dolore proident eu proident culpa cillum cillum Lorem tempor. Nisi minim aliquip nisi commodo ex cillum fugiat minim. Deserunt aute incididunt tempor in magna irure dolore velit.",
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
		lastMessage.current?.scrollIntoView({ behavior: "smooth" });
		setTimeout(() => {
			setMessages((messages) => [
				...messages,
				{
					type: "receiver",
					name: companyName,
					image: "...",
					message: "Veniam sit culpa eu anim.",
				},
			]);
			lastMessage.current?.scrollIntoView({ behavior: "smooth" });
		}, Math.random() * 3000);
	};

	const lastMessage = useRef();

	return (
		<div className="chatscreen">
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
			<div ref={lastMessage} style={{ height: "15vh" }}></div>
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
