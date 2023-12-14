import { useEffect, useRef } from "react";
import search from "../assets/search.svg";
import "./Component.css";

function SearchBar({ query, setQuery, selected }) {
	const inputRef = useRef(null);

	useEffect(function () {
		function onKeydown(e) {
			if (document.activeElement === inputRef.input) return;
			if (e.code === "Enter") {
				inputRef.current && inputRef.current.focus();
				setQuery("");
			}
		}

		document.addEventListener("keydown", onKeydown);

		return document.addEventListener("keydown", onKeydown);
	}, []);

	// if (query) {
	// 	window.scrollTo({
	// 		top: 1080,
	// 		behavior: "smooth",
	// 	});
	// }

	return (
		!selected && (
			<div
				className={
					query && !selected
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
		)
	);
}

export default SearchBar;
