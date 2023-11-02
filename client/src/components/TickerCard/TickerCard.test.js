import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { TickerCard } from "./TickerCard";

const mockStore = configureStore([thunk]);

describe("TickerCard component", () => {
	let store;
	const ticker = {
		ticker: "AAPL",
		price: 150,
		change: 2,
		change_percent: 1,
	};

	beforeEach(() => {
		store = mockStore({
			tickerData: [],
			favoriteTickers: [],
		});
	});

	it("renders ticker card with the correct data", () => {
		render(
			<Provider store={store}>
				<TickerCard ticker={ticker} />
			</Provider>
		);

		expect(screen.getByText("AAPL")).toBeInTheDocument();
		expect(screen.getByText("150")).toBeInTheDocument();
		expect(screen.getByText("2")).toBeInTheDocument();
		expect(screen.getByText("1%")).toBeInTheDocument();
	});

	it("dispatches addFavoriteTickerToState action when 'Add to Favorites' button is clicked", () => {
		render(
			<Provider store={store}>
				<TickerCard ticker={ticker} />
			</Provider>
		);

		const addToFavoritesButton = screen.getByLabelText("add to favorites");
		fireEvent.click(addToFavoritesButton);

		// Check that the action was dispatched with the correct details
		expect(store.getActions()).toEqual([
			{
				type: "ADD_FAVORITE_TICKER_ID",
				tickerId: "AAPL",
			},
		]);
	});
});
