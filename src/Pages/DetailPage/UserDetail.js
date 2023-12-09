import { FaRegStar } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryLine } from "react-icons/ri";
import { SlUserFollowing } from "react-icons/sl";

import "./Detail.css";

function UserDetail({ selected, onSelect, selectedType }) {
	console.log(selected);
	return (
		<div className="app__detail">
			<div className="app__detail-back">
				<button onClick={() => onSelect("", "")}>Back</button>
			</div>
			<div className="app__detail-data">
				<div className="app__detail-data_user">
					<div className="avatar">
						<img src={selected.avatar_url} alt={selected.login} />
					</div>
					<p className="name">{selected.name}</p>
					<p className="login">{selected.login}</p>
					<p className="bio">{selected.bio}</p>
					<a href={selected.html_url}>visit</a>
					<div className="follow">
						<GoPeople />
						<p>
							{selected.followers} followers. {selected.following} following
						</p>
					</div>
					<div className="location">
						<IoLocationOutline className="icon" />
						<p className="location">{selected.location}</p>
					</div>
				</div>
				<div className="app__detail-data_attributes">
					<div className="attributes__link">
						<div className="repos link">
							<RiGitRepositoryLine className="icon" />
							<p>repositories</p>
							<p>{selected.repositories}</p>
						</div>
						<div className="followers link">
							<GoPeople />
							<p>followers</p>
							<p>{selected.repositories}</p>
						</div>
						<div className="following link">
							<SlUserFollowing className="icon" />
							<p>following</p>
							<p>{selected.repositories}</p>
						</div>
						<div className="starred link">
							<FaRegStar className="icon" />
							<p>starred</p>
							<p>{selected.repositories}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserDetail;
