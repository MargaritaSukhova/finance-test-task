import {
	GET_TICKER_DATA,
	ADD_FAVORITE_TICKER_ID,
	DELETE_FAVORITE_TICKER,
} from "./actions";

const initialState = {
	tickerData: [],
	favoriteTickers: [],
};

const tickerReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TICKER_DATA:
			return {
				...state,
				tickerData: action.data,
			};
		case ADD_FAVORITE_TICKER_ID:
			return {
				...state,
				favoriteTickers: [...state.favoriteTickers, action.tickerId],
			};
		case DELETE_FAVORITE_TICKER:
			return {
				...state,
				favoriteTickers: state.favoriteTickers.filter(
					(id) => id !== action.tickerId
				),
			};
		default:
			return state;
	}
};

export default tickerReducer;
