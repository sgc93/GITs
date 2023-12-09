import "./Detail.css";
function UserDetail({ selected, onSelect, selectedType }) {
	return (
		<div className="app__detail">
			<div className="app__detail-back">
				<button onClick={() => onSelect("", "")}>Back</button>
			</div>
			<div className="app__detail-data">
				<div className="app__detail-data_user">
					<div>Name: {selected.login}</div>
				</div>
				<div className="app__detail-data_attributes">
					repos followers followings starred
				</div>
			</div>
		</div>
	);
}

export default UserDetail;
