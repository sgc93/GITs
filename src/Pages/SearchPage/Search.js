import { useEffect, useState } from "react";
import UserProfileCard from "../../Utils/UserProfileCard";
import stars from "../../assets/stars.png";
import "./Search.css";

function Search({ query, onSelect }) {
	const [users, setUsers] = useState([]);
	useEffect(
		function () {
			const controller = new AbortController();
			async function fetchUsers() {
				try {
					const response = await fetch(
						`https://api.github.com/search/users?q=${query}`,
						{
							headers: {
								Authorization: `Bearer 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`,
							},
							signal: controller.signal,
						}
					);
					const data = await response.json();
					console.log(data);
					setUsers(data.items);
				} catch (error) {
					console.log(error.message);
				}
			}

			fetchUsers();
			return () => {
				controller.abort();
			};
		},
		[query]
	);

	return (
		<div className="app__search">
			<div className="app__search-bg">
				<img src={stars} alt="search bg" />
			</div>
			<div className="app__search-overlay">
				<p>
					Search Results For <span>{query}</span>
				</p>
				<div className="app__search-results">
					{users &&
						users.map((user) => (
							<UserProfileCard user={user} onSelect={onSelect} type="user" />
						))}
				</div>
			</div>
		</div>
	);
}

export default Search;
