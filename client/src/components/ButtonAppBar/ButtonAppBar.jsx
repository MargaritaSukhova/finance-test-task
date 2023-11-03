import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {IntervalSelect} from "../IntervalSelect/IntervalSelect"

import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

export const ButtonAppBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }} data-testid="app-bar">
			<AppBar position="static">
				<Toolbar>
					<CurrencyExchangeIcon />
					<Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
						Finance News
					</Typography>
					<IntervalSelect />
				</Toolbar>
			</AppBar>
		</Box>
	);
};
