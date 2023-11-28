import "./App.css";
import logo from "./assets/gits.png";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Working with <code>GitHub API</code> and ReactJS.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Figma Design
				</a>
			</header>
		</div>
	);
}

export default App;
