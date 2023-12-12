import { useEffect, useState } from "react";
import indicator from "../../../assets/user_indicator.png";
import "./TopUser.css";

function User({ user }) {
	return (
		<div className="top">
			<div className="list-rank">1</div>
			<div className="list-data">
				<img src={indicator} alt="user" />
				<div>
					<p className="name">Indicator</p>
					<p className="bio">asdf ;lkh asdf ;l;kja sdfsd; ;lkj</p>
				</div>
				<div className="repos">
					<a href="jdl">*</a>
					<p>1234 repositories</p>
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
			console.log(parsedData.items);
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
					{topUsers.map((user) => (
						<User user={user} />
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
