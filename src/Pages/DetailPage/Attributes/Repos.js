import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaRegStar } from "react-icons/fa";

function Repo({ repo }) {
	return (
		<div className="repo">
			<div className="half">
				<p className="name">{repo.name}</p>
				<p className="description">{repo.description}</p>
			</div>
			<div className="half">
				<a href={repo}>
					<FaExternalLinkAlt />
				</a>
				<div className="stars">
					<FaRegStar />
					<p>{repo.stargazers_count}</p>
				</div>
			</div>
		</div>
	);
}

function Repos({ user }) {
	const [repos, setRepos] = useState([]);
	useEffect(
		function () {
			async function fetchUserRepos() {
				const response = await fetch(
					`https://api.github.com/users/${user.login}/repos`
				);
				const data = await response.json();
				setRepos((repos) => data);
				console.log(data);
			}

			fetchUserRepos();
		},
		[user]
	);
	return (
		repos && (
			<div className="user__repos">
				{repos.map((repo) => (
					<Repo repo={repo} />
				))}
			</div>
		)
	);
}

export default Repos;
