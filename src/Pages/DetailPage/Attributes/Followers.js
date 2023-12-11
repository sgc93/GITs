import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Attributes.css";

function Follower({ follower }) {
	return (
		<div className="follower-card">
			<img src={follower.avatar_url} alt={follower.login} />
			<div className="follower-data">
				<p className="name">{follower.login}</p>
				<a href={follower.html_url}>
					<FaExternalLinkAlt />
				</a>
			</div>
		</div>
	);
}

function Followers({ user }) {
	const [followers, setFollowers] = useState([]);

	useEffect(
		function () {
			async function fetchFollowers() {
				const response = await fetch(
					`https://api.github.com/users/${user.login}/followers`
				);
				const data = await response.json();
				setFollowers((followers) => data);
				console.log(data);
			}

			fetchFollowers();
		},
		[user]
	);
	return (
		followers && (
			<div className="user__followers">
				{followers.map((follower) => (
					<Follower follower={follower} />
				))}
			</div>
		)
	);
}

export default Followers;
