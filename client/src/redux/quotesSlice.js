import { createSlice } from "@reduxjs/toolkit";
import { fetchTickerData } from "./operations.js";

const initialState = {
	tickerData: [],
	isLoading: false,
	error: "",
};

const handlePending = (state) => {
	state.isLoading = true;
	state.error = "";
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

// Create a slice with the reducer and actions
const tickerSlice = createSlice({
	name: "ticker",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTickerData.fulfilled, (state, action) => {
				console.log(action);
				state.tickerData = action.payload;
			})
			// .addCase(fetchTickerData.pending, (state) => {
			// 	// Handle pending state if needed
			// })
			// .addCase(fetchTickerData.rejected, (state, action) => {
			// 	// Handle rejected state if needed
			// })
			.addMatcher((action) => action.type.endsWith("/pending"), handlePending)
			.addMatcher(
				(action) => action.type.endsWith("/rejected"),
				handleRejected
			);
	},
});

// // Export the actions
// export const {
// 	/* any additional actions you might add */
// } = tickerSlice.actions;

// Export the reducer
export default tickerSlice.reducer;
