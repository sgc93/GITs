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
	const [page, setPage] = useState(1);

	useEffect(
		function () {
			async function fetchUserRepos() {
				const response = await fetch(
					`https://api.github.com/users/${user.login}/repos?page=${page}&per_page=10`
				);
				const data = await response.json();
				setRepos((repos) => [...repos, ...data]);
			}

			fetchUserRepos();
		},
		[user.login, page]
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
				<button onClick={() => handleSeeMore()}>See More</button>
			</>
		)
	);
}

export default Repos;
