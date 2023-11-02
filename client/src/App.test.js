import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "./App";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// Mock the module that contains the getTickerQuotes action creator
jest.mock("./redux/actions", () => {
	return {
		getTickerQuotes: () => async (dispatch) => {
			// Simulate a successful API call
			dispatch({
				type: "GET_TICKER_DATA",
				data: [{ ticker: "AAPL" }, { ticker: "GOOGL" }],
			});
		},
	};
});

describe("App component", () => {
	let store;

	beforeEach(() => {
		// Mock the store with an initial state
		store = mockStore({
			tickerData: [],
			favoriteTickers: [],
		});
	});

	it("renders without errors", () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		expect(screen.getByTestId("app")).toBeInTheDocument();
	});

	it("dispatches getTickerQuotes action on mount", async () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		// Wait for the action to be dispatched
		await waitFor(() => {
			expect(store.getActions()).toEqual([
				{
					type: "GET_TICKER_DATA",
					data: [{ ticker: "AAPL" }, { ticker: "GOOGL" }],
				},
			]);
		});
	});

	it("displays tickers list and favorite tickers", async () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		await waitFor(() => {
			expect(screen.getByTestId("tickers-list")).toBeInTheDocument();
			expect(screen.getByTestId("favorite-tickers")).toBeInTheDocument();
		});
	});
});
