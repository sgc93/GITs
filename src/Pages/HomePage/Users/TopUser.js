import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { RiGitRepositoryLine } from "react-icons/ri";

import indicator from "../../../assets/user_indicator.png";
import "../Top.css";

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
				<div className="names">
					<p className="name">{user.login}</p>
					<p className="bio">
						<GoPeople />
						{userData.followers} followers
					</p>
				</div>

				<div className="forks">
					<a href={user.html_url}>
						<FaExternalLinkAlt />
					</a>
					<p>
						<RiGitRepositoryLine />
						{userData.public_repos} repos
					</p>
				</div>
			</div>
		</div>
	);
}

function TopUser() {
	const [topUsers, setTopUsers] = useState([]);
	const [filter, setFilter] = useState("by number of repositories");
	const [url, setUrl] = useState("repos:%3E0&sort=repositories");
	useEffect(() => {
		if (filter === "by number of repositories") {
			setUrl((url) => "repos:%3E0&sort=repositories");
		} else if (filter === "by number of followers") {
			setUrl((url) => "followers:%3E0&sort=followers");
		}
	}, [filter]);

	useEffect(
		function () {
			async function fetchTopUsers() {
				const response = await fetch(
					`https://api.github.com/search/users?q=${url}&order=desc&per_page=100`
				);
				const parsedData = await response.json();
				setTopUsers((topUsers) => parsedData.items);
				console.log(response);
			}

			fetchTopUsers();
		},
		[url]
	);

	return (
		<div className="app__top" id="topUsers">
			<div className="app__top-head">
				<p className="">
					top <span>100</span> users
				</p>
				<select value={filter} onChange={(e) => setFilter(e.target.value)}>
					<option>by number of repositories</option>
					<option>by number of followers</option>
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
		</div>
	);
}

export default TopUser;
