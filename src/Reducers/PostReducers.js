import { FETCH_ALL, FETCH_POST, CREATE, UPDATE, DELETE } from "../Types/Types";

export default (posts = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case FETCH_POST:
			return action.payload;
		case CREATE:
			return [...posts, action.payload];
		case UPDATE:
			return posts.map((post) =>
				post._id === action.payload._id ? action.payload : post
			);
		case DELETE:
			return posts.filter((post) => post._id !== action.payload);
		default:
			return posts;
	}
};
