import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; 

import { ButtonAppBar } from "./ButtonAppBar"; 

describe("ButtonAppBar", () => {
	it("renders the app bar with the title", () => {
		render(<ButtonAppBar />);

		expect(screen.getByTestId("app-bar")).toBeInTheDocument();

		const titleElement = screen.getByText("Finance News");
		expect(titleElement).toBeInTheDocument();
	});

	it("renders the interval select component", () => {
		render(<ButtonAppBar />);

		// Use data-testid to select the IntervalSelect component for testing
		const intervalSelect = screen.getByTestId("interval-select");
		expect(intervalSelect).toBeInTheDocument();
	});
});
