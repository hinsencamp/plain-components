import React from "react";
import "./App.scss";

import {
  PlainExpandable,
  OperateExpandable,
  OptimizeExpandable
} from "./examples/Expandable";

import Modal from "./components/Modal/Modal";

function App() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

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

      <h1>Modals</h1>
      <button onClick={() => setIsModalVisible(true)}>Open Modal</button>

      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <Modal.Header>
          Header
          <Modal.Button>&times;</Modal.Button>
        </Modal.Header>
        <Modal.Body>
          <input />
        </Modal.Body>
        <Modal.Footer>
          <Modal.Button>Click me</Modal.Button>
          <Modal.Button onClick={() => setIsModalVisible(false)}>Click me too</Modal.Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
