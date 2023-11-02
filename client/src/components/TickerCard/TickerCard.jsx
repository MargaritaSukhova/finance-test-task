import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { addFavoriteTickerToState } from "../../redux/actions";
import { Item, TickerCardTitle, TickerCardValue } from "./TickerCard.styled";

export const TickerCard = ({ ticker }) => {
	const dispatch = useDispatch();
	const { ticker: tickerName, price, change, change_percent } = ticker;
	return (
		<Grid item xs={4} sm={4} md={2}>
			<Item elevation={3}>
				{change > 0 ? (
					<ArrowUpwardIcon color="success" />
				) : (
					<ArrowDownwardIcon />
				)}
				<Box>
					<TickerCardTitle>{tickerName}</TickerCardTitle>
					<TickerCardValue>{price}</TickerCardValue>
				</Box>
				<Box>
					<Typography>{change}</Typography>
					<Typography>{change_percent}%</Typography>
				</Box>
				<IconButton
					aria-label="add to favorites"
					onClick={() => dispatch(addFavoriteTickerToState(tickerName))}
				>
					<FavoriteBorderIcon />
				</IconButton>
			</Item>
		</Grid>
	);
};
