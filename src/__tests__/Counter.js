import React from "react";
import ReactDOM from "react-dom";
import "jest-dom/extend-expect";

import App from "../App";

import { render, cleanup, fireEvent } from "@testing-library/react";
import { Counter } from "../components/Counter";

afterEach(cleanup);

test("輸入input 值", () => {
  const { getByText, asFragment } = render(<Counter />);
  const firstRender = asFragment();

  fireEvent.click(getByText(/Click to increase/));

  // This will snapshot only the difference between the first render, and the
  // state of the DOM after the click event.
  // See https://github.com/jest-community/snapshot-diff
  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders a message", () => {
  const { container, getByText } = render(<App />);
  expect(getByText("Hello, world!")).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>Hello, World!</h1>
  `);
});
