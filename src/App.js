import React from "react";
import "./App.scss";

import {
  PlainExpandable,
  OperateExpandable,
  OptimizeExpandable
} from "./examples/Expandable";

function App() {
  return (
    <div className="App">
      <h1>Expandables </h1>

      <div className="example">
        <h2>Plain</h2>
        <PlainExpandable />
      </div>

      <div className="example">
        <h2>Operate</h2>
        <OperateExpandable />
      </div>
      <div className="example">
        <h2>Optimize</h2>
        <OptimizeExpandable />
      </div>
    </div>
  );
}

export default App;
