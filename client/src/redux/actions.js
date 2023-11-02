// import { createAction } from "@reduxjs/toolkit";

// export const getQuotesPending = createAction("quotes/getQuotesPending");

// export const getQuotesSuccess = createAction("quotes/getQuotesSuccess");

// export const getQuotesError = createAction("quotes/getQuotesError");

import io from "socket.io-client"; 

const socket = io("http://localhost:4000"); 

// Action Types
export const GET_TICKER_DATA = "GET_TICKER_DATA";

// Action Creators
const setTickerData = (data) => ({
	type: GET_TICKER_DATA,
	data,
});

// Redux Thunk action to start listening for ticker updates
export const getTickerQuotes = () => {
	return (dispatch) => {
		socket.emit("start"); 

		socket.on("ticker", (data) => {
			dispatch(setTickerData(data));
		});
	};
};