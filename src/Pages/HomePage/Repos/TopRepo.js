import { useEffect, useState } from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { GoStar } from "react-icons/go";
import { PiGitFork } from "react-icons/pi";
import indicator from "../../../assets/repo_indicator.png";
import "../Top.css";

function Repo({ repo, rank }) {
	const [repoData, setRepoData] = useState("");
	useEffect(
		function () {
			const controller = new AbortController();
			async function fetchRepoData() {
				try {
					const response = await fetch(repo.url, {
						headers: {
							Authorization: `Bearer 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`,
						},
						signal: controller.signal,
					});
					const data = await response.json();
					setRepoData((repoData) => data);
				} catch (error) {
					console.log(error.message);
				}
			}

			fetchRepoData();

			return () => {
				controller.abort();
			};
		},
		[repo]
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
				<div className="names">
					<p className="name">{repo.name}</p>
					<p className="stars">
						<GoStar />
						{repoData.stargazers_count} stars
					</p>
				</div>

				<div className="forks">
					<div>
						<p>
							{repo.language ? (
								<>
									<FaCode />
									<span>{repo.language}</span>
								</>
							) : (
								repo.visibility
							)}
						</p>
						<a href={repo.html_url}>
							<FaExternalLinkAlt />
						</a>
					</div>
					<p>
						<PiGitFork />
						{repoData.forks_count} forks
					</p>
				</div>
			</div>
		</div>
	);
}

function TopRepo() {
	const [topRepos, setTopRepos] = useState([]);
	const [filter, setFilter] = useState("by number of stars");
	const [url, setUrl] = useState(
		"https://api.github.com/search/repositories?q=stars:%3E0&sort=stars&order=desc&per_page=100"
	);
	useEffect(() => {
		if (filter === "by number of stars") {
			setUrl(
				(url) =>
					"https://api.github.com/search/repositories?q=stars:%3E0&sort=stars&order=desc&per_page=100"
			);
		} else if (filter === "by number of forks") {
			setUrl(
				(url) =>
					"https://api.github.com/search/repositories?q=forks:%3E0&sort=forks&order=desc&per_page=100"
			);
		}
	}, [filter]);

	useEffect(
		function () {
			async function fetchTopUsers() {
				const response = await fetch(url);
				const parsedData = await response.json();
				setTopRepos((topRepos) => parsedData.items);
			}

			fetchTopUsers();
		},
		[url]
	);

	return (
		<div className="app__top" id="topRepos">
			<div className="app__top-head">
				<p className="">
					top <span>100</span> repositories
				</p>
				<select value={filter} onChange={(e) => setFilter(e.target.value)}>
					<option>by number of stars</option>
					<option>by number of forks</option>
				</select>
			</div>
			<div className="app__top-main">
				<div className="app__top-main_icon">
					<img src={indicator} alt="repos" />
				</div>
				{topRepos && (
					<div className="app__top-main_list overflow overflow-large">
						{topRepos.map((repo, index) => (
							<Repo key={repo.id} repo={repo} rank={index} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default TopRepo;
