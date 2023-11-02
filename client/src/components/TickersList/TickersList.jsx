import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { TickerCard } from "../TickerCard/TickerCard";

export const TickersList = () => {
	const tickers = useSelector((state) => state.tickerData);

	return (
		<Box
			data-testid="tickers-list"
			sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center", p: 6 }}
		>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{tickers.map((ticker) => (
					<TickerCard
						key={ticker.ticker}
						ticker={ticker}
						
					></TickerCard>
				))}
			</Grid>
		</Box>
	);
};
