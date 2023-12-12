import bg from "../../assets/earth.png";
import moon from "../../assets/moon.png";
import "./HomePage.css";

function Body() {
	return (
		<div className="app__home-overlay_body">
			<div className="body__content">
				<p className="p__small">Hi GitHubers,</p>
				<h1 className="p__large">Explore GitHub In Summarized Way!</h1>
				<p className="P__medium">
					{"// Search and explore users, repositories and organizations"}
				</p>
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
				<Body />
			</div>
		</div>
	);
}

export default HomePage;
