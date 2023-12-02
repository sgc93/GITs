import { useRef, useState } from "react";
import search from "../assets/search.svg";
import "./Component.css";

function SearchBar() {
	const [focused, setFocused] = useState(false);
	const inputRef = useRef(null);

	const handleInputFocus = () => {
		setFocused(true);
		window.scrollTo({
			top: 1080,
			behavior: "smooth",
		});
	};

	return (
		<div
			className={
				focused
					? "app__searchbar-focused app__searchbar"
					: "app__searchbar app__searchbar-normal"
			}
		>
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
