import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { RiGitRepositoryLine } from "react-icons/ri";
import indicator from "../../../assets/org_indicator.png";
import "../Top.css";

function Org({ org, rank }) {
	const [orgData, setOrgData] = useState("");
	useEffect(
		function () {
			const controller = new AbortController();
			async function fetchOrgData() {
				try {
					const response = await fetch(org.url, {
						headers: {
							Authorization: `Bearer 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`,
						},
						signal: controller.signal,
					});
					const data = await response.json();
					console.log(data);
					setOrgData((orgData) => data);
				} catch (error) {
					console.log(error.message);
				}
			}

			fetchOrgData();

			return () => {
				controller.abort();
			};
		},
		[org]
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
				<img src={org.avatar_url} alt="org" />
				<div className="names">
					<p className="name">{org.login}</p>
					<p className="bio">
						<GoPeople />
						{orgData.followers} followers
					</p>
				</div>

				<div className="forks">
					<a href={org.html_url}>
						<FaExternalLinkAlt />
					</a>
					<p>
						<RiGitRepositoryLine />
						{orgData.public_repos} repos
					</p>
				</div>
			</div>
		</div>
	);
}

function TopOrg() {
	const [topOrgs, setTopOrgs] = useState([]);
	const [filter, setFilter] = useState("by number of stars");
	const [url, setUrl] = useState(
		"https://api.github.com/search/users?q=type:org&sort=repositories&order=desc&per_page=100"
	);
	useEffect(() => {
		if (filter === "by number of stars") {
			setUrl(
				(url) =>
					"https://api.github.com/search/users?q=type:org&sort=repositories&order=desc&per_page=100"
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
			async function fetchTopOrgs() {
				const response = await fetch(url);
				const parsedData = await response.json();
				setTopOrgs((topOrgs) => parsedData.items);
				console.log(parsedData);
			}

			fetchTopOrgs();
		},
		[url]
	);

	return (
		<div className="app__top" id="topOrgs">
			<div className="app__top-head">
				<p className="">
					top <span>100</span> Organizations
				</p>
				<select value={filter} onChange={(e) => setFilter(e.target.value)}>
					<option>by number of repositories</option>
					<option>by number of forks</option>
				</select>
			</div>
			<div className="app__top-main">
				<div className="app__top-main_icon">
					<img src={indicator} alt="orgs" />
				</div>
				<div className="app__top-main_list">
					{topOrgs.map((org, index) => (
						<Org key={org.id} org={org} rank={index} />
					))}
				</div>
			</div>
		</div>
	);
}

export default TopOrg;
