import { IconButton } from "@material-ui/core";
import {
	CloseOutlined,
	FavoriteOutlined,
	FlashOnOutlined,
	ReplayOutlined,
	StarRateOutlined,
} from "@material-ui/icons";
import React from "react";
import "../App.css";

const SwipeButtons = ({
	company,
	onButtonsClicked,
	refresh,
	dislike,
	bookmark,
	like,
	contact,
}) => {
	return (
		<div className="swipe__buttons">
			<IconButton
				onClick={() => {
					console.log(company);
					onButtonsClicked(company, refresh);
				}}
			>
				<ReplayOutlined fontSize="large" color={"error"} />
			</IconButton>
			<IconButton
				onClick={() => {
					onButtonsClicked(company, dislike);
				}}
			>
				<CloseOutlined fontSize="large" color={"primary"} />
			</IconButton>
			<IconButton
				onClick={() => {
					onButtonsClicked(company, bookmark);
				}}
			>
				<StarRateOutlined fontSize="large" color={"error"} />
			</IconButton>
			<IconButton
				onClick={() => {
					onButtonsClicked(company, like);
				}}
			>
				<FavoriteOutlined fontSize="large" color={"secondary"} />
			</IconButton>
			<IconButton
				onClick={() => {
					onButtonsClicked(company, contact);
				}}
			>
				<FlashOnOutlined fontSize="large" color={"error"} />
			</IconButton>
		</div>
	);
};

export default SwipeButtons;
