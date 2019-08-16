import React from "react";

import {
  PlainExpandable,
  OperateExpandable,
  OptimizeExpandable
} from "./examples/Expandable";

import { Modal, Button } from "./components";

function App() {
  const [isPlainModalVisible, setIsPlainModalVisible] = React.useState(false);
  const [isOperateModalVisible, setIsOperateModalVisible] = React.useState(
    false
  );
  const [isCawemoModalVisible, setIsCawemoModalVisible] = React.useState(false);

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

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
        <h2>Themed</h2>
        <button onClick={() => setIsOperateModalVisible(true)}>
          Open Modal
        </button>

        <Modal
          isVisible={isOperateModalVisible}
          onClose={() => setIsOperateModalVisible(false)}
          themed
        >
          <Modal.Header>
            <h3>Header</h3>
            <Button variant="icon">&times;</Button>
          </Modal.Header>
          <Modal.Body>
            <p>Body</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Click me</Button>
            <Button
              variant="primary"
              onClick={() => setIsOperateModalVisible(false)}
            >
              Click me too
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="example">
        <h2>Themed + Cawemo Styled</h2>
        <button onClick={() => setIsCawemoModalVisible(true)}>
          Open Modal
        </button>
        <Modal
          isVisible={isCawemoModalVisible}
          onClose={() => setIsCawemoModalVisible(false)}
          themed
          className="cawemo-root"
        >
          <Modal.Header className="cawemo-header">
            <h3>Feedback & Support</h3>
            <p>
              Do you have any issues, questions or other matters and want to get
              in touch with us?
            </p>
          </Modal.Header>
          <Modal.Body className="cawemo-body">
            <textarea
              rows={6}
              className="cawemo-textarea"
              placeholder="Please write your message here. Enter at least 10 characters"
            />
          </Modal.Body>
          <Modal.Footer className="cawemo-footer">
            <Button
              variant="primary"
              className="cawemo-primary"
              onClick={() => setIsCawemoModalVisible(false)}
            >
              Send feedback
            </Button>
          </Modal.Footer>
        </Modal>

        {/* <h1>Buttons</h1>
        <div className="example">
          <Button>Hello World</Button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
