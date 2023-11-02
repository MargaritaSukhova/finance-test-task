import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickerQuotes } from "./redux/actions";
import "./App.css";
import { ButtonAppBar } from "./components/AppBar/AppBar.jsx";
import { TickersList } from "./components/TickersList/TickersList.jsx";
import { FavoriteTickers } from "./components/FavoriteTickers/FavoriteTickers.jsx";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTickerQuotes());
	}, [dispatch]);

	const tickers = useSelector((state) => state.tickerData);
	console.log(tickers);

	return (
		<div className="App">
			<ButtonAppBar />
			<TickersList></TickersList>
			<FavoriteTickers></FavoriteTickers>
		</div>
	);
}

export default App;
