import { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Search from "./Pages/SearchPage/Search";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import SearchBar from "./componets/SearchBar";

function App() {
	const [query, setQuery] = useState("");
	return (
		<>
			<Header />
			<HomePage />
			<SearchBar query={query} setQuery={setQuery} />
			{query && <Search query={query} />}
			<Footer />
		</>
	);
}

export default App;
