import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TickerCard } from "../TickerCard/TickerCard";

const lightTheme = createTheme({ palette: { mode: "light" } });
// const darkTheme = createTheme({ palette: { mode: "dark" } });

export const TickersList = () => {
	const tickers = useSelector((state) => state.tickerData);

	return (
		// <ThemeProvider theme={lightTheme}>
		// 	<Grid container spacing={2}>
		// 		<Box
		// 			sx={{
		// 				p: 2,
		// 				borderRadius: 2,
		// 				bgcolor: "background.default",
		// 				display: "flex",
		// 				gap: 2,
		// 			}}
		// 		>
		// 			{tickers.map((ticker) => (
		// 				<Item key={ticker.ticker} elevation={3}>
		// 					<TickerCard>
		// 						<TickerCardContent>
		// 							<TickerCardTitle>{ticker.ticker}</TickerCardTitle>
		// 							<TickerCardValue>${ticker.price}</TickerCardValue>
		// 							<TickerCardValue>${ticker.change}</TickerCardValue>
		// 							<TickerCardValue>${ticker.change_percent}</TickerCardValue>
		// 						</TickerCardContent>
		// 						<Box>
		// 							<Typography variant="body2">
		// 								Last Updated: {ticker.last_trade_time}
		// 							</Typography>
		// 						</Box>
		// 					</TickerCard>
		// 				</Item>
		// 			))}
		// 		</Box>
		// 	</Grid>
		// </ThemeProvider>
		// <Grid container spacing={2}>
		// 	{[lightTheme].map((theme, index) => (
		// 		<Grid item xs={1} key={index}>
		// 			<ThemeProvider theme={theme}>
		// 				<Box
		// 					sx={{
		// 						p: 2,
		// 						borderRadius: 2,
		// 						bgcolor: "background.default",
		// 						display: "grid",
		// 						gridTemplateColumns: { md: "1fr 1fr" },
		// 						gap: 2,
		// 					}}
		// 				>
		// 					{tickers.map((ticker) => (
		// 						<Item key={ticker.ticker} elevation={3}>
		// 							{`elevation=${ticker.price}`}
		// 						</Item>
		// 					))}
		// 				</Box>
		// 			</ThemeProvider>
		// 		</Grid>
		// 	))}
		// </Grid>
		<Box
			sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center", p: 6 }}
		>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{/* {Array.from(Array(6)).map((_, index) => (
					<Grid item xs={1} sm={1} md={1} key={index}>
						<Item>xs=2</Item>
					</Grid>
				))} */}
				{tickers.map((ticker) => (
					<TickerCard key={ticker.ticker} ticker={ticker}></TickerCard>
					// <Grid
					// 	item
					// 	xs={4}
					// 	sm={4}
					// 	md={2}
					// 	key={ticker}
					// >
					// 	<Item elevation={3}>
					// 		{change > 0 ? (
					// 			<ArrowUpwardIcon color="success" />
					// 		) : (
					// 			<ArrowDownwardIcon />
					// 		)}
					// 		<Box>
					// 			<Typography>{ticker}</Typography>
					// 			<Typography>{price}</Typography>
					// 		</Box>
					// 		<Box>
					// 			<Typography>{change}</Typography>
					// 			<Typography>{change_percent}</Typography>
					// 		</Box>
					// 		<IconButton aria-label="add to favorites">
					// 			<FavoriteBorderIcon />
					// 		</IconButton>
					// 	</Item>
					// </Grid>
				))}
			</Grid>
		</Box>
	);
};
