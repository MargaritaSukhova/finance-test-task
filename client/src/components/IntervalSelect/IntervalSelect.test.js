import { render, fireEvent, waitFor, within } from "@testing-library/react";
import { IntervalSelect } from "./IntervalSelect";
import { socket } from "../../redux/actions"; 

// Mock the socket.emit function to track emitted events
const mockEmit = jest.fn();
socket.emit = mockEmit;

test("IntervalSelect component allows selecting intervals and emits socket events", async () => {
	const { getByTestId, getByRole } = render(<IntervalSelect />);

	const intervalSelect = getByTestId("interval-select");

	// Verify the initial interval value is 5000 (5 seconds)
	expect(intervalSelect).toHaveTextContent("5 seconds");

	// Open the dropdown menu
	fireEvent.mouseDown(getByRole("combobox"));

	// Find the option within the select component
	const option = within(getByRole("option", { name: /3 seconds/i }));

	// Select a different interval (e.g., 3 seconds) by searching for the option
	fireEvent.click(option.getByText(/3 seconds/i));

	// Check if the interval value has changed in the component
	expect(intervalSelect).toHaveTextContent("3 seconds");

	// Ensure that the socket.emit function was called with the new interval value
	await waitFor(() => {
		expect(mockEmit).toHaveBeenCalledWith("change-interval", 3000);
	});
});
