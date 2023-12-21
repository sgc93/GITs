import { useEffect } from "react";
export function useFetchUserData(xuser, onSelect) {
	useEffect(() => {
		async function fetchXuserData() {
			const res = await fetch(xuser.url, {
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_MY_TOKEN}`,
				},
			});
			const data = await res.json();
			onSelect(data, "user");
		}
		if (xuser) {
			fetchXuserData();
		}
	}, [xuser, onSelect]);
}
