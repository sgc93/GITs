import bg from "../../assets/earth.png";
import moon from "../../assets/moon.png";
import Footer from "../../componets/Footer";
import Logo from "../../componets/Logo";
import Nav from "../../componets/Nav";
import SearchBar from "../../componets/SearchBar";
import "./HomePage.css";

function Header() {
	return (
		<div className="app__home-overlay_header">
			<Logo />
			<Nav />
			<a className="like" href="https://github.com/sgc93/GITs">
				Like()
			</a>
		</div>
	);
}

function Body() {
	return (
		<div className="app__home-overlay_body">
			<div className="body__content">
				<p className="p__small">Hi GitHubers,</p>
				<h1 className="p__large">Explore GitHub In Summarized Way!</h1>
				<p className="P__medium">
					{"// Search and explore users, repositories and organizations"}
				</p>
				<SearchBar />
			</div>
			<div className="body__img">
				<img src={moon} alt="githubers" />
			</div>
		</div>
	);
}

function HomePage() {
	return (
		<div className="app__home">
			<div className="app__home-bg">
				<img src={bg} alt="gitEarth" />
			</div>
			<div className="app__home-overlay">
				<Header />
				<Body />
				<Footer />
			</div>
		</div>
	);
}

export default HomePage;
