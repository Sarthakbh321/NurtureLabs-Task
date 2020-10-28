import { Avatar, Button, Chip, Grid, IconButton } from "@material-ui/core";
import {
	Favorite,
	FavoriteBorder,
	LocationOnOutlined,
	Star,
	Timer,
	Title,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./MentorCard.css";

function MentorCard({ profile }) {
	const [liked, setLiked] = useState(false);

	return (
		<div className="section-div mentor-card">
			<div className="mentor-top">
				<Avatar alt="name" className="mentor-profile-pic" />
				<div className="mentor-info">
					<div>
						<h2>{profile.name}</h2>
						<h4>{profile.designation}</h4>
					</div>
					<div>
						<IconButton
							style={{ marginRight: "20px" }}
							onClick={() => setLiked(!liked)}
						>
							{!liked ? (
								<FavoriteBorder color="secondary" />
							) : (
								<Favorite color="secondary" />
							)}
						</IconButton>
						<Button
							variant="contained"
							color="secondary"
							style={{ color: "white", fontWeight: 700 }}
						>
							View Profile
						</Button>
					</div>
				</div>
			</div>
			<div className="mentor-description">
				<Grid container style={{ height: "100%" }}>
					<Grid item xs={12} sm={2} className="mentor-price-rev">
						<p>
							<span className="light-gray">Price: </span>
							<span
								className="lime-green"
								style={{ fontWeight: "600" }}
							>
								{profile.price}
							</span>
						</p>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Star color="secondary" fontSize="small" />
							<span
								className="orange"
								style={{ margin: "0 7px" }}
							>
								{profile.rating}
							</span>
							({profile.reviews})
						</div>
					</Grid>
					<Grid item xs={12} sm={10}>
						<div className="loc-lang-div light-gray">
							<div className="total-center">
								<Timer
									className="light-gray"
									fontSize="small"
								/>
								{profile.freeSessions} Free Sessions Available
							</div>
							<div className="total-center">
								<LocationOnOutlined
									className="light-gray"
									fontSize="small"
								/>
								{profile.location}
							</div>
							<div className="total-center">
								<Title
									className="light-gray"
									fontSize="small"
								/>
								{profile.languages}
							</div>
						</div>
						<div className="description-div">
							{profile.description}
						</div>
						<div className="keywords-div">
							{profile.keywords.map((word, i) => (
								<Chip
									key={i}
									label={word}
									className="keyword-chip"
								/>
							))}
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default MentorCard;
