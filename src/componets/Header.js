import logo from "../assets/gits.png";

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
			<a href="topUsers">_topUsers</a>
			<a href="topRepos">_topRepositories</a>
			<a href="topOrgs">_topOrganizations</a>
			<a href="Contact"> Contact()</a>
		</div>
	);
}

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

export default Header;
