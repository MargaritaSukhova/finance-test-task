import { GET_TICKER_DATA } from "./actions";

const initialState = {
	tickerData: [], 
};

const tickerReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TICKER_DATA:
			return {
				...state,
				tickerData: action.data, 
			};
		default:
			return state;
	}
};

export default tickerReducer;
