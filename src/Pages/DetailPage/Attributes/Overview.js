import React, { useEffect, useState } from "react";
import { FaBriefcase, FaRegCalendarAlt } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

import "./Attributes.css";

const ReadMe = ({ user }) => {
	const [readmeContent, setReadmeContent] = useState("");
	useEffect(
		function () {
			async function fetchUserProfileReadme() {
				const response = await fetch(
					`https://api.github.com/repos/${user.login}/${user.login}/contents/README.md`,
					{
						headers: {
							Authorization: `Bearer ${process.env.REACT_APP_MY_TOKEN}`,
						},
					}
				);

				const data = await response.json();
				if (response.ok) {
					setReadmeContent((readmeContent) => atob(data.content)); // Decode base64-encoded content
				} else if (data.message === "Not Found") {
					setReadmeContent("");
				}
			}

			fetchUserProfileReadme();
		},
		[user]
	);

	return readmeContent ? (
		<div className="readme-container">
			<div dangerouslySetInnerHTML={{ __html: readmeContent }} />
		</div>
	) : (
		<div className="overview-sample">
			<img src={user.avatar_url} alt={user.login} />
			<div className="overview-overlay">
				<div className="overview-data data1">
					<div className="data11">
						<FaRegCalendarAlt />
						<p>created_at : {user.created_at}</p>
					</div>
					<div className="data11">
						<RxUpdate />
						<p>Last_update : {user.updated_at} </p>
					</div>
					<div className="data11">
						<FaBriefcase />
						<p>{user.hireable ? "Hireable" : "Not Hireable"}</p>
					</div>
					<div className="data11">
						<MdContactMail />
						<div className="data22">
							{user.email && <p>{user.email}</p>}
							{user.twitter_username && <p>{user.twitter_username}</p>}
							<p>{user.blog}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

function Overview({ user }) {
	return (
		<div className="user__overview">
			<ReadMe user={user} />
		</div>
	);
}

export default Overview;
