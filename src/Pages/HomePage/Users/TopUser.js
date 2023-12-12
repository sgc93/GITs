import indicator from "../../../assets/user_indicator.png";
import "./TopUser.css";
function TopUser() {
	return (
		<div className="app__top">
			<div className="app__top-head">
				<div className="app__top-head_spacer"></div>
				<p className="">
					top <span>100</span> users
				</p>
				<select>
					<option>by number fo repositories</option>
					<option>by number of followers</option>
					<option>by number of followings</option>
					<option>by number of stars</option>
				</select>
			</div>
			<div className="app__top-main">
				<div className="app__top-main_icon">
					<img src={indicator} alt="repos" />
				</div>
				<div className="app__top-main_list">list</div>
			</div>
			<div className="app__top-btn">
				<button>See All</button>
			</div>
		</div>
	);
}

export default TopUser;
