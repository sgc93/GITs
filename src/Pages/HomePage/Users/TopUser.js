import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import indicator from "../../../assets/user_indicator.png";
import "./TopUser.css";

function User({ user, rank }) {
	const [userData, setUserData] = useState("");
	useEffect(
		function () {
			async function fetchUserData() {
				const response = await fetch(user.url, {
					headers: {
						Authorization: `Bearer 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`,
					},
				});
				const data = await response.json();
				setUserData((userData) => data);
			}

			fetchUserData();
		},
		[user]
	);

	return (
		<div className="top">
			<p className="list-rank">
				{rank === 0
					? `${rank + 1}st`
					: rank === 1
					? `${rank + 1}nd`
					: rank === 2
					? `${rank + 1}rd`
					: `${rank + 1}th`}
			</p>
			<div className="list-data">
				<img src={user.avatar_url} alt="user" />
				<div>
					<p className="name">{user.login}</p>
					<p className="bio">{userData.bio}</p>
				</div>
				<div className="repos">
					<a href={user.html_url}>
						<FaExternalLinkAlt />
					</a>
					<p>{userData.public_repos} repositories</p>
				</div>
			</div>
		</div>
	);
}

function TopUser() {
	const [topUsers, setTopUsers] = useState([]);

	useEffect(function () {
		async function fetchTopUsers() {
			const response = await fetch(
				"https://api.github.com/search/users?q=repos:%3E0&sort=repositories&order=desc&per_page=100"
			);
			const parsedData = await response.json();
			setTopUsers((topUsers) => parsedData.items);
		}

		fetchTopUsers();
	}, []);

	return (
		<div className="app__top">
			<div className="app__top-head">
				<div className="app__top-head_spacer"></div>
				<p className="">
					top <span>100</span> users
				</p>
				<select>
					<option>by number fo repositories</option>
					<option>by number of followers</option>
					<option>by number of followings</option>
					<option>by number of stars</option>
				</select>
			</div>
			<div className="app__top-main">
				<div className="app__top-main_icon">
					<img src={indicator} alt="repos" />
				</div>
				<div className="app__top-main_list">
					{topUsers.map((user, index) => (
						<User user={user} rank={index} />
					))}
				</div>
			</div>
			<div className="app__top-btn">
				<button>See All</button>
			</div>
		</div>
	);
}

export default TopUser;
