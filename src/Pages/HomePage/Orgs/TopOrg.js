import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useFetchUserData } from "../../../Hooks/useFetchUserData";
import indicator from "../../../assets/org_indicator.png";
import "../Top.css";

function Org({ org, rank, onSelect }) {
	const [orgData, setOrgData] = useState("");
	const [xorg, setXorg] = useState("");

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

	useFetchUserData(xorg, onSelect);

	return (
		<div className="top" onClick={() => setXorg((xorg) => org)}>
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

function TopOrg({ onSelect }) {
	const [topOrgs, setTopOrgs] = useState([]);
	useEffect(function () {
		async function fetchTopOrgs() {
			const response = await fetch(
				"https://api.github.com/search/users?q=type:org&sort=repositories&order=desc&per_page=100"
			);
			const parsedData = await response.json();
			setTopOrgs((topOrgs) => parsedData.items);
		}

		fetchTopOrgs();
	}, []);

	return (
		<div className="app__top" id="topOrgs">
			<div className="app__top-head">
				<p className="">
					top <span>100</span> Organizations
				</p>
				<select>
					<option>by number of repositories</option>
					<option>😔 only by repo</option>
				</select>
			</div>
			<div className="app__top-main">
				<div className="app__top-main_icon">
					<img src={indicator} alt="orgs" />
				</div>
				{topOrgs && (
					<div className="app__top-main_list overflow overflow-large">
						{topOrgs.map((org, index) => (
							<Org key={org.id} org={org} rank={index} onSelect={onSelect} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default TopOrg;
