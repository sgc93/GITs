import { useRef } from "react";
import search from "../assets/search.svg";
import "./Component.css";

function SearchBar({ query, setQuery }) {
	const inputRef = useRef(null);

	if (query) {
		window.scrollTo({
			top: 1080,
			behavior: "smooth",
		});
	}

	return (
		<div
			className={
				query
					? "app__searchbar-focused app__searchbar"
					: "app__searchbar app__searchbar-normal"
			}
		>
			<input
				type="text"
				placeholder="Search or jump to ..."
				ref={inputRef}
				value={query}
				onChange={(e) => setQuery((query) => e.target.value)}
			/>
			<button type="button">
				<img src={search} alt="search" />
			</button>
		</div>
	);
}

export default SearchBar;
