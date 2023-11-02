import { useEffect } from "react";
// import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
// import { fetchTickerData } from "./redux/operations";
import { getTickerQuotes } from "./redux/actions";
import logo from "./logo.svg";
import "./App.css";
import { TickersList } from "./components/TickersList.jsx";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTickerQuotes());
	}, [dispatch]);

	const tickers = useSelector((state) => state.tickerData);
	console.log(tickers);

	return (
		<div className="App">
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p> */}
			<ul>
				{tickers.map((ticker) => (
					<li key={ticker.ticker}>
						{ticker.ticker}: {ticker.price}
					</li>
				))}
			</ul>
			<TickersList tickers={tickers}></TickersList>
			{/* <a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
		</div>
	);
}

export default App;
