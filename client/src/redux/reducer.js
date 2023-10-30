import { SET_TICKER_DATA } from "./actions";

const initialState = {
	tickerData: [], // Initial state for ticker data
};

const tickerReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TICKER_DATA:
			return {
				...state,
				tickerData: action.data, // Update ticker data in the state
			};
		default:
			return state;
	}
};

export default tickerReducer;
