import React from "react";
import "./App.scss";

import Expandable from "./components/Expandable";

function App() {
  return (
    <div className="App">
      <Expandable className="expandable" isExpanded={false}>
        <Expandable.Header>
          <Expandable.Toggle>toogle</Expandable.Toggle>
          foo
        </Expandable.Header>
        <Expandable.Content>bar</Expandable.Content>
      </Expandable>
    </div>
  );
}

export default App;
