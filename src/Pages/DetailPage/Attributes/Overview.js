import React, { useEffect, useState } from "react";
import "./Attributes.css";
const ReadMe = ({ username }) => {
	const [readmeContent, setReadmeContent] = useState("");
	useEffect(
		function () {
			async function fetchUserProfileReadme() {
				const response = await fetch(
					`https://api.github.com/repos/${username}/${username}/contents/README.md`,
					{
						headers: {
							Authorization: `Bearer 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`,
						},
					}
				);

				if (response.ok) {
					const data = await response.json();
					setReadmeContent((readmeContent) => atob(data.content)); // Decode base64-encoded content
				} else {
					throw new Error(
						`Failed to fetch profile README content: ${response.statusText}`
					);
				}
			}

			fetchUserProfileReadme();
		},
		[username]
	);

	return (
		<div className="readme-container">
			<div dangerouslySetInnerHTML={{ __html: readmeContent }} />
		</div>
	);
};

function Overview({ user }) {
	return (
		<div className="user__overview">
			<ReadMe username={user.login} />
		</div>
	);
}

export default Overview;
