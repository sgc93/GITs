import { useRef } from "react";
import search from "../assets/search.svg";
import "./Component.css";

function SearchBar() {
	const inputRef = useRef(null);

	const handleInputFocus = () => {
		window.scrollTo({
			top: 1080,
			behavior: "smooth",
		});
	};

	return (
		<div className="app__searchbar">
			<input
				type="text"
				placeholder="Search or jump to ..."
				onFocus={handleInputFocus}
				ref={inputRef}
			/>
			<button type="button">
				<img src={search} alt="search" />
			</button>
		</div>
	);
}

export default SearchBar;
