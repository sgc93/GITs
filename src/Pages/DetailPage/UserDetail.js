import { FaRegStar } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { IoBookOutline, IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryLine } from "react-icons/ri";
import { SlUserFollowing } from "react-icons/sl";

import Followers from "./Attributes/Followers";
import Following from "./Attributes/Following";
import Overview from "./Attributes/Overview";
import Repos from "./Attributes/Repos";
import Stars from "./Attributes/Stars";

import { useState } from "react";
import "./Detail.css";

function UserDetail({ selected, onSelect, selectedType }) {
	const [attIndex, setAttIndex] = useState(0);
	console.log(selected);

	function onAttSelection(attI) {
		setAttIndex(attI);
	}

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
					<a className="url" href={selected.html_url}>
						visit
					</a>
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
					<div className="blog">
						<a href={selected.blog}>{selected.blog}</a>
					</div>
					<div className="endline"></div>
				</div>
				<div className="app__detail-data_attributes">
					<div className="attributes__link">
						<div
							className={
								attIndex === 0 ? "overview link selected" : "overview link"
							}
							onClick={() => onAttSelection(0)}
						>
							<IoBookOutline className="icon" />
							<p>overview</p>
						</div>
						<div
							className={attIndex === 1 ? "repos link selected" : "repos link"}
							onClick={() => onAttSelection(1)}
						>
							<RiGitRepositoryLine className="icon" />
							<p>repositories</p>
							<p>{selected.public_repos}</p>
						</div>
						<div
							className={
								attIndex === 2 ? "followers link selected" : "followers link"
							}
							onClick={() => onAttSelection(2)}
						>
							<GoPeople />
							<p>followers</p>
							<p>{selected.followers}</p>
						</div>
						<div
							className={
								attIndex === 3 ? "following link selected" : "following link"
							}
							onClick={() => onAttSelection(3)}
						>
							<SlUserFollowing className="icon" />
							<p>following</p>
							<p>{selected.following}</p>
						</div>
						<div
							className={attIndex === 4 ? "stars link selected" : "stars link"}
							onClick={() => onAttSelection(4)}
						>
							<FaRegStar className="icon" />
							<p>starred</p>
							<p>{selected.repositories}</p>
						</div>
					</div>
					<div className="attribute__data overflow overflow-large">
						{attIndex === 0 ? (
							<Overview user={selected} />
						) : attIndex === 1 ? (
							<Repos user={selected} />
						) : attIndex === 2 ? (
							<Followers user={selected} />
						) : attIndex === 3 ? (
							<Following user={selected} />
						) : attIndex === 4 ? (
							<Stars user={selected} />
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserDetail;
