import io from "socket.io-client";

const socket = io("http://localhost:4000");

// Action Types
export const GET_TICKER_DATA = "GET_TICKER_DATA";
export const ADD_FAVORITE_TICKER_ID = "ADD_FAVORITE_TICKER_ID";
export const DELETE_FAVORITE_TICKER = "DELETE_FAVORITE_TICKER";

// Action Creators
const getTickerData = (data) => ({
	type: GET_TICKER_DATA,
	data,
});

const addFavoriteTickerId = (tickerId) => ({
	type: ADD_FAVORITE_TICKER_ID,
	tickerId,
});

const deleteFavoriteTicker = (tickerId) => ({
	type: DELETE_FAVORITE_TICKER,
	tickerId,
});

// Redux Thunk
export const getTickerQuotes = () => {
	return (dispatch) => {
		socket.emit("start");

		socket.on("ticker", (data) => {
			dispatch(getTickerData(data));
		});
	};
};

export const addFavoriteTickerToState = (tickerId) => {
	return (dispatch, getState) => {
		const currentState = getState();

		if (currentState.favoriteTickers.includes(tickerId)) {
			return;
		} else {
			dispatch(addFavoriteTickerId(tickerId));
		}
	};
};

export const deleteFavoriteTickerFromState = (tickerId) => {
	return (dispatch, getState) => {
		const currentState = getState();

		if (currentState.favoriteTickers.includes(tickerId)) {
			dispatch(deleteFavoriteTicker(tickerId));
		}
	};
};
