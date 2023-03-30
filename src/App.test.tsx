import "@testing-library/jest-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { MockedProvider } from "@apollo/client/testing";
import { failureResponose, successResponse } from "../__tests__/mocks";
import App from "./App";

afterEach(cleanup);

test("renders all compoenets without error", async () => {
  const { findByText, getByText, getByTestId } = render(
    <MockedProvider
      addTypename={false}
      mocks={[successResponse, successResponse]}
    >
      <App />
    </MockedProvider>
  );

  expect(getByText("Loading...")).toBeInTheDocument();
  const admin = await findByText("test_admin");
  expect(admin).toBeInTheDocument();
  fireEvent.click(getByTestId("manager"));
  const manger = await findByText("test1_manager");
  expect(manger).toBeInTheDocument();
});

test("renders error while fetching queries", async () => {
  const { findByText, getByText } = render(
    <MockedProvider addTypename={false} mocks={[failureResponose]}>
      <App />
    </MockedProvider>
  );

  expect(getByText("Loading...")).toBeInTheDocument();
  const errorText = await findByText(
    "An error occurred while fetching zeller customer"
  );
  expect(errorText).toBeInTheDocument();
});
