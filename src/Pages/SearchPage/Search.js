import { useEffect, useState } from "react";
import UserProfileCard from "../../Utils/UserProfileCard";
import stars from "../../assets/stars.png";
import "./Search.css";

function Search({ query }) {
	const [users, setUsers] = useState([]);
	useEffect(
		function () {
			const controller = new AbortController();
			async function fetchUsers() {
				const response = await fetch(
					`https://api.github.com/search/users?q=${query}`,
					{ signal: controller.signal }
				);
				const data = await response.json();
				setUsers(data.items);
				console.log(data);
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
					{users.map((user) => (
						<UserProfileCard user={user} />
					))}
					<UserProfileCard />
				</div>
			</div>
		</div>
	);
}

export default Search;
