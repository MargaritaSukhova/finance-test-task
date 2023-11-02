// import React from "react";
// import { render, screen } from "@testing-library/react";
// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";
// import { TickersList } from "./TickersList";

// const mockStore = configureStore([]);

// describe("TickersList component", () => {
// 	let store;

// 	beforeEach(() => {
// 		store = mockStore({
// 			tickerData: [
// 				{
// 					ticker: "AAPL",
// 					last_trade_time: "2023-11-02T18:59:50.000Z",
// 					price: 150,
// 					change: 2,
// 					change_percent: 1,
// 				},
// 				{
// 					ticker: "GOOGL",
// 					last_trade_time: "2023-11-02T18:59:50.000Z",
// 					price: 2800,
// 					change: -5,
// 					change_percent: -0.5,
// 				},
// 			],
// 		});
// 	});

// 	it("renders a list of TickerCard components", () => {
// 		render(
// 			<Provider store={store}>
// 				<TickersList />
// 			</Provider>
// 		);

// 		// Ensure the component renders correctly
// 		expect(screen.getByTestId("tickers-list")).toBeInTheDocument();

// 		// Ensure TickerCard components are rendered for each ticker in the store
// 		const tickerCards = screen.getAllByRole("listitem"); // Assuming TickerCard uses a role of "listitem"
// 		expect(tickerCards).toHaveLength(2); // Number of tickers in the store

// 		// Check if the TickerCard components have been rendered correctly
// 		expect(screen.getByText("AAPL")).toBeInTheDocument();
// 		expect(screen.getByText("GOOGL")).toBeInTheDocument();
// 	});
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import {TickersList} from "./TickersList"; 

const mockStore = configureStore([]);

describe("TickersList component", () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			tickerData: [
				{
					ticker: "AAPL",
					last_trade_time: "2023-11-02T18:59:50.000Z",
					price: 150,
					change: 2,
					change_percent: 1,
				},
				{
					ticker: "GOOGL",
					last_trade_time: "2023-11-02T18:59:50.000Z",
					price: 2800,
					change: -5,
					change_percent: -0.5,
				},
			],
		});
	});

	it("renders a list of TickerCard components", () => {
		render(
			<Provider store={store}>
				<TickersList />
			</Provider>
		);

		// Ensure the component renders correctly
		expect(screen.getByTestId("tickers-list")).toBeInTheDocument();

		// Ensure TickerCard components are rendered for each ticker in the store
		const tickerCards = screen.getAllByTestId("ticker-card"); // Assuming you have a "data-testid" attribute on TickerCard
		expect(tickerCards).toHaveLength(2); // Number of tickers in the store

		// Check if the TickerCard components have been rendered correctly
		expect(screen.getByText("AAPL")).toBeInTheDocument();
		expect(screen.getByText("GOOGL")).toBeInTheDocument();
	});


});
