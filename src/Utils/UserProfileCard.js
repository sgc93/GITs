import { FaExternalLinkAlt } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { SlUserFollowing } from "react-icons/sl";

import { useEffect, useState } from "react";
import "./Utils.css";

const UserProfileCard = ({ user, onSelect, type }) => {
	console.log(onSelect + "  " + type);
	const [userData, setUserData] = useState("");
	useEffect(
		function () {
			async function fetchUserData() {
				const response = await fetch(user.url);
				const data = await response.json();
				console.log(data);
				setUserData(data);
			}
			if (user) {
				fetchUserData();
			}
		},
		[user]
	);
	return (
		user && (
			<div className="app__card-user">
				<div className="profile__avatar">
					<img src={user.avatar_url} alt="avatar" />
				</div>
				<div className="profile__name">
					<p className="name">{user.login}</p>
					<p className={userData.bio ? "bio" : "no__bio"}>
						{userData.bio ? userData.bio : '"user has no bio yet!",GITs'}
					</p>
				</div>
				<div className="profile__data">
					<div className="data">
						<SlUserFollowing className="icon" />
						<p>{userData.followers}</p>
					</div>
					<div className="data">
						<a href={userData.html_url}>
							<FaExternalLinkAlt className="icon" />
						</a>
					</div>
					<div className="data">
						<RiGitRepositoryLine className="icon" />
						<p>{userData.public_repos}</p>
					</div>
				</div>
				<button
					onClick={() => {
						onSelect(userData, type);
					}}
				>
					See Details
				</button>
			</div>
		)
	);
};

export default UserProfileCard;
