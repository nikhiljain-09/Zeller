/* eslint-disable */
// this is an auto generated file. This will be overwritten
import { gql } from "@apollo/client";



//removed email as we are not using that field
export const ListZellerCustomers = gql`
  query ListZellerCustomers {
    listZellerCustomers {
      items {
        id
        name
        role
      }
    }
  }
`;
