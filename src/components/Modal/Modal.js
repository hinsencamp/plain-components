/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. Licensed under a commercial license.
 * You may not use this file except in compliance with the commercial license.
 */

import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import theme from "../../theme.module.scss";
import styles from "./Modal.module.scss";

const ModalContext = React.createContext();

/**
 * Modals are a way to show content to your user upon clicking a button or something. You'll figure it out.
 */
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

    let rootClass = this.props.themed
      ? theme["modal-root"]
        ? theme["modal-root"]
        : styles.root
      : styles.root;
    let contentClass = this.props.themed
      ? theme["modal-content"]
        ? theme["modal-content"]
        : styles.content
      : styles.content;

    return createPortal(
      isVisible && (
        <div
          className={rootClass + " " + className}
          ref={this.modalRef}
          role="dialog"
        >
          <div className={contentClass + " " + className}>
            <ModalContext.Provider
              value={{
                addKeyHandler: this.addKeyHandler,
                themed: this.props.themed
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
  const context = React.useContext(ModalContext);
  let headerClass = context.themed
    ? theme["modal-header"]
      ? theme["modal-header"]
      : styles.default
    : styles.default;

  return <header className={headerClass + " " + className}>{children}</header>;
};

Modal.Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Modal.Body = function ModalBody({ className, children }) {
  const context = React.useContext(ModalContext);
  let bodyClass = context.themed
    ? theme["modal-body"]
      ? theme["modal-body"]
      : styles.default
    : styles.default;

  return <div className={bodyClass + " " + className}>{children}</div>;
};

Modal.Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Modal.Footer = function ModalFooter({ className, children }) {
  const context = React.useContext(ModalContext);
  let footerClass = context.themed
    ? theme["modal-footer"]
      ? theme["modal-footer"]
      : styles.default
    : styles.default;

  return <footer className={footerClass + " " + className}>{children}</footer>;
};

Modal.Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
