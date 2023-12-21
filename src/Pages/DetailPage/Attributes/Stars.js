import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaRegStar } from "react-icons/fa";

function Repo({ repo }) {
	return (
		<div className="repo">
			<div className="half">
				<p className="name">{repo.name}</p>
				<div className="owner">
					<p className="owner-name">{repo.owner.login}</p>
					<img src={repo.owner.avatar_url} alt="owner" />
				</div>
			</div>
			<div className="half">
				<a href={repo.html_url}>
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

function Stars({ user }) {
	const [repos, setRepos] = useState([]);
	const [setPage] = useState(1);

	useEffect(
		function () {
			async function fetchStarredRepos() {
				const response = await fetch(
					`https://api.github.com/users/${user.login}/starred`,
					{
						headers: {
							Authorization: `Bearer ${process.env.REACT_APP_MY_TOKEN}`,
						},
					}
				);
				const data = await response.json();
				setRepos((repos) => data);
			}

			fetchStarredRepos();
		},
		[user.login]
	);

	function handleSeeMore() {
		setPage((page) => page + 1);
	}

	return (
		repos && (
			<>
				<div className="user__repos">
					{repos.map((repo) => (
						<Repo key={repo.id} repo={repo} />
					))}
				</div>
				<button onClick={() => handleSeeMore}>See More</button>
			</>
		)
	);
}

export default Stars;
