import stars from "../../assets/stars.png";
import "./Search.css";

function Search({ query }) {
	return (
		<div className="app__search">
			<div className="app__search-bg">
				<img src={stars} alt="search bg" />
			</div>
			<div className="app__search-overlay">
				<div className="app__search-results">Search Results For {query}</div>
			</div>
		</div>
	);
}

export default Search;
