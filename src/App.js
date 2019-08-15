import React from "react";

import {
  PlainExpandable,
  OperateExpandable,
  OptimizeExpandable
} from "./examples/Expandable";

import Modal from "./components/Modal/Modal";
import Button from "./components/Button";

function App() {
  const [isPlainModalVisible, setIsPlainModalVisible] = React.useState(false);
  const [isOperateModalVisible, setIsOperateModalVisible] = React.useState(false);

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

      <div className="example">
        <h2>Plain</h2>
        <button onClick={() => setIsPlainModalVisible(true)}>Open Modal</button>
        
        <Modal
          isVisible={isPlainModalVisible}
          onClose={() => setIsPlainModalVisible(false)}
        >
          <Modal.Header>
            Header
            <Button>&times;</Button>
          </Modal.Header>
          <Modal.Body>
            <p>Body</p>
          </Modal.Body>
          <Modal.Footer>
            <Button>Click me</Button>
            <Button onClick={() => setIsPlainModalVisible(false)}>
              Click me too
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="example">
        <h2>Operate</h2>
        <button onClick={() => setIsOperateModalVisible(true)}>Open Modal</button>

        <Modal
          isVisible={isOperateModalVisible}
          onClose={() => setIsOperateModalVisible(false)}
          themed
        >
          <Modal.Header>
            <h3>Header</h3>
            <Button className="button-icon">&times;</Button>
          </Modal.Header>
          <Modal.Body>
            <p>Body</p>
          </Modal.Body>
          <Modal.Footer>
            <Button className="button-secondary">Click me</Button>
            <Button className="button-primary" onClick={() => setIsOperateModalVisible(false)}>
              Click me too
            </Button>
          </Modal.Footer>
        </Modal>
      </div>


      <h1>Button</h1>
      <Button className="NEwcamButton">cambutton</Button>
    </div>
  );
}

export default App;
