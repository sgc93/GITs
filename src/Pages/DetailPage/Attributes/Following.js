import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Attributes.css";

function Followed({ followed }) {
	return (
		<div className="follower-card">
			<img src={followed.avatar_url} alt={followed.login} />
			<div className="follower-data">
				<p className="name">{followed.login}</p>
				<a href={followed.html_url}>
					<FaExternalLinkAlt />
				</a>
			</div>
		</div>
	);
}

function Following({ user }) {
	const [following, setFollowing] = useState([]);

	useEffect(
		function () {
			async function fetchFollowing() {
				const response = await fetch(
					`https://api.github.com/users/${user.login}/following`
				);
				const data = await response.json();
				setFollowing((followed) => data);
				console.log(data);
			}

			fetchFollowing();
		},
		[user]
	);
	return (
		following && (
			<div className="user__followers">
				{following.map((followed) => (
					<Followed followed={followed} />
				))}
			</div>
		)
	);
}

export default Following;
