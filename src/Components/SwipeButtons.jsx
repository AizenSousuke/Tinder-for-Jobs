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

const SwipeButtons = () => {
	return (
		<div className="swipe__buttons">
			<IconButton>
				<ReplayOutlined fontSize="large" color={"error"} />
			</IconButton>
			<IconButton>
				<CloseOutlined fontSize="large"color={"primary"} />
			</IconButton>
			<IconButton>
				<StarRateOutlined fontSize="large" color={"error"} />
			</IconButton>
			<IconButton>
				<FavoriteOutlined fontSize="large" color={"secondary"} />
			</IconButton>
			<IconButton>
				<FlashOnOutlined fontSize="large" color={"error"} />
			</IconButton>
		</div>
	);
};

export default SwipeButtons;
