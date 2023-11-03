import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { socket } from "../../redux/actions";

export const IntervalSelect = () => {
	const [interval, setInerval] = useState(5000);

	const handleChange = (event) => {
		const newInterval = event.target.value;
		setInerval(newInterval);
		socket.emit("change-interval", newInterval);
	};

	return (
		<Box sx={{ minWidth: 120 }} data-testid="interval-select">
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Interval</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={interval}
					label="Interval"
					onChange={handleChange}
				>
					<MenuItem value={1000}>1 second</MenuItem>
					<MenuItem value={3000}>3 seconds</MenuItem>
					<MenuItem value={5000}>5 seconds</MenuItem>
					<MenuItem value={10000}>10 seconds</MenuItem>
					<MenuItem value={15000}>15 seconds</MenuItem>
					<MenuItem value={30000}>30 seconds</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};
