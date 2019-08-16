```js
import Button from '../Button/Button';

initialState = { isVisible: false };

<div>
  <Button onClick={() => setState({ isVisible: true })}>Open Modal</Button>

  <Modal
    isVisible={state.isVisible}
    onClose={() => setState({ isVisible: false })}
  >
    <Modal.Header>
      Title
      <Button>&times;</Button>
    </Modal.Header>
    <Modal.Body>
      Body
    </Modal.Body>
    <Modal.Footer>
      <Button
        onClick={() => setState({ isVisible: false })}
        >
        Close
      </Button>
      <Button
        onClick={() => setState({ isVisible: false })}
      >
        Click me too
      </Button>
    </Modal.Footer>
  </Modal>
</div>
```