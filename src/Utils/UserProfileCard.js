import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import { RiGitRepositoryLine } from "react-icons/ri";

import avatar from "../assets/flying.png";
import "./Utils.css";

const UserProfileCard = () => {
	return (
		<div className="app__card-user">
			<div className="profile__avatar">
				<img src={avatar} alt="avatar" />
			</div>
			<div className="profile__name">
				<p className="name">CodeHub</p>
				<p className="bio">Coding While Living</p>
			</div>
			<div className="profile__data">
				<div className="data">
					<MdOutlineStarBorder className="icon" />
					<p>453 stars</p>
				</div>
				<div className="data">
					<a href="#github">
						<FaExternalLinkAlt className="icon" />
					</a>
				</div>
				<div className="data">
					<RiGitRepositoryLine className="icon" />
					<p>43 repositories</p>
				</div>
			</div>
			<button>See Details</button>
		</div>
	);
};

export default UserProfileCard;
