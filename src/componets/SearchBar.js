import { useEffect } from "react";
import search from "../assets/search.svg";
const id = "109880887";

function SearchBar() {
	useEffect(function () {
		async function handleSearch() {
			try {
				const response = await fetch(`https://api.github.com/user/${id}`);
				const data = await response.json();
				console.log(data);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		}
		handleSearch();
	}, []);
	return (
		<div className="app__searchbar">
			<input type="text" placeholder="Search or jump to ..." />
			<button type="button">
				<img src={search} alt="search" />
			</button>
		</div>
	);
}

export default SearchBar;
