import { useState } from "react";
import "./App.css";
import UserDetail from "./Pages/DetailPage/UserDetail";
import HomePage from "./Pages/HomePage/HomePage";
import Search from "./Pages/SearchPage/Search";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import SearchBar from "./componets/SearchBar";

function App() {
	const [query, setQuery] = useState("");
	const [selected, setSelected] = useState("");
	const [selectedType, SetSelectedType] = useState("");

	function onSelect(obj, type) {
		SetSelectedType(type);
		setSelected(obj);
	}

	return (
		<>
			<Header />
			<HomePage />
			<SearchBar query={query} setQuery={setQuery} />
			{query && !selected && <Search query={query} onSelect={onSelect} />}

			{selected && (
				<UserDetail selected={selected} selectedType={selectedType} />
			)}
			<Footer />
		</>
	);
}

export default App;
