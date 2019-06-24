import React from "react";
import ReactDOM from "react-dom";
import Board from "./Components/Board";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Board} />
        </div>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
