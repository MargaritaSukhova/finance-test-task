import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	color: theme.palette.text.secondary,
	height: 60,
	lineHeight: "60px",
}));

const TickerCard = styled(Card)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	minWidth: 275,
	borderRadius: 16,
	boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
	transition: "0.2s",
	"&:hover": {
		transform: "scale(1.05)",
	},
}));

const TickerCardContent = styled(CardContent)(({ theme }) => ({
	flex: "1 0 auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	"&:last-child": {
		paddingBottom: theme.spacing(2),
	},
}));

const TickerCardTitle = styled(Typography)({
	fontSize: 16,
	fontWeight: "bold",
});

const TickerCardValue = styled(Typography)({
	fontSize: 24,
	fontWeight: "bold",
});

const lightTheme = createTheme({ palette: { mode: "light" } });
// const darkTheme = createTheme({ palette: { mode: "dark" } });

export const TickersList = ({ tickers }) => {
  return (
		<ThemeProvider theme={lightTheme}>
			<Grid container spacing={2}>
				<Box
					sx={{
						p: 2,
						borderRadius: 2,
						bgcolor: "background.default",
						display: "flex",
						gap: 2,
					}}
				>
					{tickers.map((ticker) => (
						<Item key={ticker.ticker} elevation={3}>
							<TickerCard>
								<TickerCardContent>
									<TickerCardTitle>{ticker.ticker}</TickerCardTitle>
									<TickerCardValue>${ticker.price}</TickerCardValue>
									<TickerCardValue>${ticker.change}</TickerCardValue>
									<TickerCardValue>${ticker.change_percent}</TickerCardValue>
								</TickerCardContent>
								<Box>
									<Typography variant="body2">
										Last Updated: {ticker.last_trade_time}
									</Typography>
								</Box>
							</TickerCard>
						</Item>
					))}
				</Box>
			</Grid>
		</ThemeProvider>
		// <Grid container spacing={2}>
		// 	{[lightTheme].map((theme, index) => (
		// 		<Grid item xs={6} key={index}>
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
	);
};
