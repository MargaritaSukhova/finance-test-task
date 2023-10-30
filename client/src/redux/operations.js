// import {
// 	getQuotesPending,
// 	getQuotesSuccess,
// 	getQuotesError,
// } from "./actions.js";

// export const getQuotes = () => async dispatch => {
// 	dispatch(getQuotesPending());
// };
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import io from "socket.io-client";

// // Create a socket.io connection
// const socket = io("http://localhost:4000"); // Replace with your server endpoint

// // Define an async thunk action to fetch ticker data using Socket.IO
// export const fetchTickerData = createAsyncThunk(
// 	"ticker/fetchData",
// 	async (_, { dispatch }) => {
// 		// Listen for 'ticker' events and dispatch the data
// 		socket.on("ticker", (data) => {
// 			console.log(data);
// 			return data;
// 		});

// 		// Emit 'start' event to request ticker updates from the server
// 		socket.emit("start");
// 	}
// );
