import bg from "../../assets/earth.png";
import logo from "../../assets/logo.png";
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

function HomePage() {
	return (
		<div className="app__home">
			<div className="app__home-bg">
				<img src={bg} alt="gitEarth" />
			</div>
			<div className="app__home-overlay">
				<div className="app__home-overlay_header">
					<Logo />
					<Nav />
				</div>
				<div className="app__home-overlay_body">body</div>
				<div className="app__home-overlay_footer">footer</div>
			</div>
		</div>
	);
}

export default HomePage;
