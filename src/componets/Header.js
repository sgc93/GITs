import logo from "../assets/gits.png";
import "./Component.css";

function Logo() {
	return (
		<div className="logo">
			<img src={logo} alt="gits" />
		</div>
	);
}

function Nav() {
	return (
		<nav className="nav">
			<a href="#home">_home</a>
			<a href="#topUsers">_topUsers</a>
			<a href="#topRepos">_topRepositories</a>
			<a href="#topOrgs">_topOrganizations</a>
			<a href="#Contact"> Contact()</a>
		</nav>
	);
}

function Header() {
	return (
		<div className="app__home-overlay_header">
			<Logo />
			<Nav />
			<a
				className="like"
				href="https://github.com/sgc93/GITs"
				target="_blank"
				rel="noopener noreferrer"
			>
				Like()
			</a>
		</div>
	);
}

export default Header;
