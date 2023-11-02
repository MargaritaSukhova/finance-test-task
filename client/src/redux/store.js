// import { configureStore } from "@reduxjs/toolkit";
// import tickersReducer from "./quotesSlice";

// export const store = configureStore({
// 	reducer: {
// 		tickers: tickersReducer,
// 	},
// });

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), 
});

