import { FaDribbble, FaFigma, FaGithub } from "react-icons/fa";
import bg from "../../assets/earth.png";
import logo from "../../assets/gits.png";
import moon from "../../assets/moon.png";
import search from "../../assets/search.svg";
import "./HomePage.css";

function Logo() {
	return (
		<div className="logo">
			<img src={logo} alt="gits" />
		</div>
	);
}

function Nav() {
	return (
		<div className="nav">
			<a href="topUsers">Top Users</a>
			<a href="topRepos">Top Repositories</a>
			<a href="topOrgs">Top Organizations</a>
			<a href="Contact">Contact</a>
		</div>
	);
}

function Header() {
	return (
		<div className="app__home-overlay_header">
			<Logo />
			<Nav />
			<a className="like" href="https://github.com/sgc93/GITs">
				Like
			</a>
		</div>
	);
}

function SearchBar() {
	return (
		<div className="app__searchbar">
			<input type="text" placeholder="Search or jump to ..." />
			<button type="button">
				<img src={search} alt="search" />
			</button>
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
					Search and explore users, repos and organizations
				</p>
				<SearchBar />
			</div>
			<div className="body__img">
				<img src={moon} alt="githubers" />
			</div>
		</div>
	);
}

function Footer() {
	return (
		<div className="app__home-overlay_footer">
			<div className="footer-address">
				<p className="p__small">_find developer</p>
				<div className="links">
					<a href="#dribble">
						<FaDribbble />
					</a>
					<a href="#dribble">
						<FaFigma />
					</a>
				</div>
			</div>
			<div className="footer-git">
				<p className="p__small">@sgc93</p>
				<a href="#github">
					<FaGithub />
				</a>
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
