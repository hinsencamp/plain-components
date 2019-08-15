/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. Licensed under a commercial license.
 * You may not use this file except in compliance with the commercial license.
 */

import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const ModalContext = React.createContext();

export default class Modal extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.keyHandlers = new Map([
      ["Tab", this.handleTabKeyDown],
      ["Escape", this.props.onClose]
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
    this.setFocus();
    const { isVisible } = this.props;
    const { eventListenerAdded } = this;

    if (isVisible && !eventListenerAdded) {
      this.addEventListner();
    } else if (!isVisible && eventListenerAdded) {
      this.removeEventListner();
    }
  }

  setFocus = () => {
    const modalRef = this.modalRef.current;

    if (modalRef) {
      const defaultElement = modalRef.querySelector("input, textarea, select");

      if (defaultElement) {
        // Ugh
        setTimeout(() => defaultElement.focus());
      }
    }
  };

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
    const keyHandler = this.keyHandlers.get(e.key);
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

  addKeyHandler = (key, handler) => this.keyHandlers.set(key, handler);

  render() {
    const { children, className, isVisible } = this.props;
    return createPortal(
      isVisible && (
        <div
          className={styles.root + " " + className}
          ref={this.modalRef}
          role="dialog"
        >
          <div className={styles.content}>
            <ModalContext.Provider
              value={{
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

Modal.Header = function ModalHeader({ className, children }) {
  return (
    <header className={className ? className : styles.default}>
      {children}
    </header>
  );
};

Modal.Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Modal.Body = function ModalBody({ className, children }) {
  return (
    <div className={className ? className : styles.default}>{children}</div>
  );
};

Modal.Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Modal.Footer = function ModalFooter({ className, children }) {
  return (
    <footer className={className ? className : styles.default}>
      {children}
    </footer>
  );
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
    if (this.props.isFocused) {
      setTimeout(() => this.buttonRef.current.focus());
    }
  }

  buttonRef = React.createRef();

  handleReturnKeyPress = e => {
    e.preventDefault();
    this.buttonRef.current.click();
  };

  render() {
    const { className, isFocused, ...props } = this.props;

    return (
      <button
        ref={this.buttonRef}
        className={className ? className : styles.default + " " + styles.button}
        {...props}
      >
        {this.props.children}
      </button>
    );
  }
}

Modal.Button = ModalButton;
