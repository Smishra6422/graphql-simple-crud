import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient, gql } from "apollo-boost";

const http = createHttpLink({
  uri: "http://localhost:5002/graphql",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: http,
  cache,
});

client
  .query({
    query: gql`
      {
        books {
          name
        }
      }
    `,
  })
  .then((response) => console.log(response.data));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
