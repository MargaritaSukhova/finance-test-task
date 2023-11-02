import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { FavoriteTickers } from "./FavoriteTickers.jsx";

const mockStore = configureStore([thunk]);

describe("FavoriteTickers component", () => {
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
			favoriteTickers: ["AAPL"],
		});
	});

	it("renders favorite tickers", () => {
		render(
			<Provider store={store}>
				<FavoriteTickers />
			</Provider>
		);

		// Ensure the "Favorite Tickers" header is displayed
		expect(screen.getByText("Favorite Tickers")).toBeInTheDocument();

		// Ensure the favorite ticker data is displayed
		expect(screen.getByText("AAPL")).toBeInTheDocument();
	});

	it("displays 'Add tickers to follow' when there are no favorite tickers", () => {
		store = mockStore({
			tickerData: [],
			favoriteTickers: [],
		});

		render(
			<Provider store={store}>
				<FavoriteTickers />
			</Provider>
		);

		// Ensure the message for no favorite tickers is displayed
		expect(screen.getByText("Add tickers to follow")).toBeInTheDocument();
	});

	it("dispatches deleteFavoriteTickerFromState action when delete button is clicked", () => {
		render(
			<Provider store={store}>
				<FavoriteTickers />
			</Provider>
		);

		// Find and click the "Delete from Favorites" button
		const deleteButton = screen.getByTestId("delete-favorite-button");
		fireEvent.click(deleteButton);

		// Check that the action was dispatched
		expect(store.getActions()).toEqual([
			{
				type: "DELETE_FAVORITE_TICKER",
				tickerId: "AAPL",
			},
		]);
	});
});
