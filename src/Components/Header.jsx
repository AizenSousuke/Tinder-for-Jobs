import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { ArrowBackIosOutlined } from "@material-ui/icons";

const Header = ({ backButton }) => {
	const history = useHistory();
	return (
		<div className="header">
			{backButton ? (
				<IconButton onClick={() => {history.replace(backButton)}}>
					<ArrowBackIosOutlined />
				</IconButton>
			) : (
				<IconButton>
					<PersonIcon />
				</IconButton>
			)}
			<Link to="/">
				<WhatshotIcon
					className="header__logo"
					fontSize="large"
					color="secondary"
				/>
			</Link>
			<Link to="/chat">
				<IconButton>
					<ChatBubbleIcon />
				</IconButton>
			</Link>
		</div>
	);
};

export default Header;
