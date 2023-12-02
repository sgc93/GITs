import { FaDribbble, FaFigma, FaGithub } from "react-icons/fa";

function Footer() {
	return (
		<div className="app__home-overlay_footer">
			<div className="footer-address">
				<p className="p__small">Find (developer, designer)</p>
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

export default Footer;
