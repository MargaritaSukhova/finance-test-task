import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

export const ButtonAppBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<CurrencyExchangeIcon />
					<Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
						Finance News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
