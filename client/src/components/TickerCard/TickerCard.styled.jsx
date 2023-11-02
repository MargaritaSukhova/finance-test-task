import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	color: theme.palette.text.secondary,
	height: 70,
	lineHeight: "60px",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-evenly",
}));

export const TickerCardTitle = styled(Typography)({
	fontSize: 16,
	fontWeight: "bold",
});

export const TickerCardValue = styled(Typography)({
	fontSize: 14,
	fontWeight: "bold",
});
