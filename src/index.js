import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import "./tailwind.css";
import "./index.css";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   gql,
// } from "@apollo/client";
// const client = new ApolloClient({
//   uri: "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clh15u5nw3xu201umarfy6yoi/master",
//   cache: new InMemoryCache(),
// });

// client
//   .query({
//     query: gql`
//       query MyQuery {
//         products {
//           name
//           description
//           image {
//             url
//             fileName
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
