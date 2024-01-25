import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/Home";
import Orders from "./containers/Orders";
import GlobalStyle from "./globalStyle";

ReactDOM.render(
  <>
    <Orders /> <GlobalStyle />
  </>,
  document.getElementById("root")
);
