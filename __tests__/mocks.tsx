import { MockedResponse } from "@apollo/client/testing";
import { ListZellerCustomers } from "../src/context/queries";

export const successResponse: MockedResponse<
  Record<string, any>,
  Record<string, any>
> = {
  request: {
    query: ListZellerCustomers,
  },
  result: {
    data: {
      listZellerCustomers: {
        items: [
          {
            email: "test.email",
            id: 1,
            name: "test_admin",
            role: "ADMIN",
          },
          {
            email: "test.email",
            id: 2,
            name: "test1_manager",
            role: "MANAGER",
          },
        ],
      },
    },
  },
};

export const failureResponose: MockedResponse<
  Record<string, any>,
  Record<string, any>
> = {
  request: {
    query: ListZellerCustomers,
  },
  error: Error("error"),
};
