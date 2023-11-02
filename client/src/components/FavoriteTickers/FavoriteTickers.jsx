import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {deleteFavoriteTickerFromState} from "../../redux/actions"

export const FavoriteTickers = () => {
	const tickers = useSelector((state) => state.tickerData);
	const favoriteTickers = useSelector((state) => state.favoriteTickers);
	const favoriteTickersData = tickers.filter((ticker) =>
		favoriteTickers.includes(ticker.ticker)
	);
	const dispatch = useDispatch();

	return (
		<>
			<Typography component="h2" variant="h6" color="primary" gutterBottom>
				Favorite Tickers
			</Typography>
			{favoriteTickersData.length > 0 ? (
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>Date</TableCell>
							<TableCell>Ticker</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Price Change</TableCell>
							<TableCell>Percentage Change</TableCell>
							<TableCell align="center">Delete from Favorites</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{favoriteTickersData.map(
							({ ticker, last_trade_time, price, change, change_percent }) => (
								<TableRow key={ticker}>
									<TableCell>
										{new Date(last_trade_time).toLocaleString()}
									</TableCell>
									<TableCell>{ticker}</TableCell>
									<TableCell>{price}</TableCell>
									<TableCell>{change}</TableCell>
									<TableCell>{change_percent}%</TableCell>
									<TableCell align="center">
										<IconButton
											onClick={() =>
												dispatch(deleteFavoriteTickerFromState(ticker))
											}
										>
											<DeleteOutlineIcon />
										</IconButton>
									</TableCell>
								</TableRow>
							)
						)}
					</TableBody>
				</Table>
			) : (
				<Typography >
					Add tickers to follow
				</Typography>
			)}
		</>
	);
};
