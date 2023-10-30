// import { createAction } from "@reduxjs/toolkit";

// export const getQuotesPending = createAction("quotes/getQuotesPending");

// export const getQuotesSuccess = createAction("quotes/getQuotesSuccess");

// export const getQuotesError = createAction("quotes/getQuotesError");

import io from "socket.io-client"; // Import the socket.io-client library

const socket = io("http://localhost:4000"); // Connect to your server

// Action Types
export const SET_TICKER_DATA = "SET_TICKER_DATA";

// Action Creators
const setTickerData = (data) => ({
	type: SET_TICKER_DATA,
	data,
});

// Redux Thunk action to start listening for ticker updates
export const getTickerQuotes = () => {
	return (dispatch) => {
		socket.emit("start"); // Tell the server to start sending updates

		// Listen for 'ticker' events from the server and dispatch data to the Redux store
		socket.on("ticker", (data) => {
			dispatch(setTickerData(data));
		});
	};
};