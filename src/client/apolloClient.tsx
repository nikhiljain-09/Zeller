import { createAuthLink, AuthOptions, AUTH_TYPE } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import appSyncConfig from "../awsconfig";

const auth: AuthOptions = {
  type: appSyncConfig.aws_appsync_authenticationType as AUTH_TYPE.API_KEY,
  apiKey: appSyncConfig.aws_appsync_apiKey,
};

const httpLink = new HttpLink({
  uri: appSyncConfig.aws_appsync_graphqlEndpoint,
});

const link = {
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth,
};

const apolloLink = ApolloLink.from([
  createAuthLink(link),
  createSubscriptionHandshakeLink(link, httpLink),
]);

export const client = new ApolloClient({
  link: apolloLink,
  cache: new InMemoryCache(),
});
