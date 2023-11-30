import bg from "../../assets/earth.png";
import logo from "../../assets/gits.png";
import moon from "../../assets/moon.png";
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

function HomePage() {
	return (
		<div className="app__home">
			<div className="app__home-bg">
				<img src={bg} alt="gitEarth" />
			</div>
			<div className="app__home-overlay">
				<Header />
				<div className="app__home-overlay_body">
					<div className="body__content">
						<p className="p__small">Hi GitHubers,</p>
						<h1 className="p__large">Explore GitHub In Summarized Way!</h1>
						<p className="P__medium">
							Search and explore users, repos and organizations
						</p>
					</div>
					<div className="body__img">
						<img src={moon} alt="githubers" />
					</div>
				</div>
				<div className="app__home-overlay_footer">footer</div>
			</div>
		</div>
	);
}

export default HomePage;
