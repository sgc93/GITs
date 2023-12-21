import "./Component.css";
function Contact() {
	return (
		<div className="contact" id="Contact">
			<div className="addresses">
				<ul>
					<li>
						<a
							href="https://github.com/sgc93"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							href="https://figma.com/@sgc1"
							target="_blank"
							rel="noopener noreferrer"
						>
							Figma
						</a>
					</li>
					<li>
						<a
							href="https://dribbble.com/sgc_design"
							target="_blank"
							rel="noopener noreferrer"
						>
							Dribble
						</a>
					</li>
					<li>
						<a href="mailto:smachewgedefaw@gmail.com">
							smachewgedefaw@gmail.com
						</a>
					</li>
				</ul>
			</div>
			<p className="copyright">
				&copy; {new Date().getFullYear()}, <span>Smachew G.</span>
			</p>
		</div>
	);
}

export default Contact;
