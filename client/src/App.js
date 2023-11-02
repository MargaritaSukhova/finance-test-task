import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTickerQuotes } from "./redux/actions";
import { ButtonAppBar } from "./components/AppBar/AppBar.jsx";
import { TickersList } from "./components/TickersList/TickersList.jsx";
import { FavoriteTickers } from "./components/FavoriteTickers/FavoriteTickers.jsx";
import "./App.css";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTickerQuotes());
	}, [dispatch]);

	return (
		<div className="App" data-testid="app">
			<ButtonAppBar />
			<TickersList></TickersList>
			<FavoriteTickers></FavoriteTickers>
		</div>
	);
}

export default App;
