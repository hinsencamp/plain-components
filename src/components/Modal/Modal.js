/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. Licensed under a commercial license.
 * You may not use this file except in compliance with the commercial license.
 */

import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import * as Styled from "./styled";

const ModalContext = React.createContext();

export default class Modal extends React.Component {
  static propTypes = {
    onModalClose: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.keyHandlers = new Map([
      [27, this.props.onModalClose],
      [9, this.handleTabKeyDown]
    ]);
    this.modalRef = React.createRef();
    this.eventListenerAdded = false;
  }

  componentDidMount() {
    if (this.props.isVisible) {
      this.addEventListner();
    }
  }

  componentDidUpdate() {
    const { isVisible } = this.props;
    const { eventListenerAdded } = this;

    if (isVisible && !eventListenerAdded) {
      this.addEventListner();
    } else if (!isVisible && eventListenerAdded) {
      this.removeEventListner();
    }
  }

  addEventListner() {
    this.eventListenerAdded = true;
    this.prevActiveElement = document.activeElement;

    document.activeElement && document.activeElement.blur();
    document.addEventListener("keydown", this.handleKeyDown);
  }

  removeEventListner() {
    this.eventListenerAdded = false;

    document.removeEventListener("keydown", this.handleKeyDown);
    this.prevActiveElement.focus();
  }

  handleKeyDown = e => {
    const keyHandler = this.keyHandlers.get(e.keyCode);
    return keyHandler && keyHandler(e);
  };

  handleTabKeyDown = e => {
    const focusableModalElements = [
      ...this.modalRef.current.querySelectorAll(
        'a[href], button, textarea, code, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      )
    ].filter(element => !!element.disabled === false);

    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];
    const indexOfActiveElement = [...focusableModalElements].indexOf(
      document.activeElement
    );

    const isLastElement =
      indexOfActiveElement === focusableModalElements.length - 1;
    const isOutsideModal = indexOfActiveElement < 0;
    const isFirstElement = indexOfActiveElement === 0;

    if (!e.shiftKey && (isLastElement || isOutsideModal)) {
      firstElement.focus();
      e.preventDefault();
    }

    if (e.shiftKey && (isFirstElement || isOutsideModal)) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  addKeyHandler = (keyCode, handler) => this.keyHandlers.set(keyCode, handler);

  render() {
    const { onModalClose, children, className, isVisible } = this.props;
    return createPortal(
      isVisible && (
        <div className={className} ref={this.modalRef} role="dialog">
          <div>
            <ModalContext.Provider
              value={{
                onModalClose,
                addKeyHandler: this.addKeyHandler
              }}
            >
              {children}
            </ModalContext.Provider>
          </div>
        </div>
      ),

      document.body
    );
  }
}

Modal.Header = function ModalHeader(props) {
  return <header className={props.className}>{props.children}</header>;
};

Modal.Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Modal.Body = function ModalBody(props) {
  return <div className={props.className}>{props.children}</div>;
};

Modal.Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Modal.Footer = function ModalFooter(props) {
  return <footer className={props.className}>{props.children}</footer>;
};

Modal.Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

class ModalButton extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  };

  static contextType = ModalContext;

  componentDidMount() {
    !this.context.disableKeyBinding &&
      this.context.addKeyHandler(13, this.handleReturnKeyPress);
  }

  buttonRef = React.createRef();

  handleReturnKeyPress = e => {
    e.preventDefault();
    this.buttonRef.current.click();
  };

  render() {
    const { onModalClose, ...props } = this.props;
    return (
      <button ref={this.buttonRef} {...props}>
        {this.props.children}
      </button>
    );
  }
}

Modal.Button = ModalButton;
