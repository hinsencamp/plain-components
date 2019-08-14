/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. Licensed under a commercial license.
 * You may not use this file except in compliance with the commercial license.
 */

import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./Expandable.module.scss";

const ExpandableContext = React.createContext();

export default class Expandable extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    isExpanded: PropTypes.bool
  };

  state = {
    isExpanded: this.props.isExpanded
  };

  toggleExpand = () => {
    const { isExpanded } = this.state;
    this.setState({ isExpanded: !isExpanded });
  };

  render() {
    const { isExpanded, ...rest } = this.props;
    return (
      <div {...rest}>
        <ExpandableContext.Provider
          value={{
            toggleExpand: this.toggleExpand,
            isExpanded: this.state.isExpanded
          }}
        >
          {this.props.children}
        </ExpandableContext.Provider>
      </div>
    );
  }
}

Expandable.Toggle = function Toggle(props) {
  const context = useContext(ExpandableContext);
  const { className, ...rest } = props;

  let classes = className ? className : styles.default;

  if (context.isExpanded) {
    classes += " is-open";
  }

  return (
    <button
      className={classes}
      {...rest}
      type="button"
      onClick={context.toggleExpand}
      aria-expanded={context.isExpanded}
    >
      {props.children}
    </button>
  );
};

Expandable.Toggle.propTypes = {
  //
};

Expandable.Toggle.defaultProps = {
  //
};

// /**
//  *
//  */

Expandable.Content = function Content(props) {
  const context = useContext(ExpandableContext);

  return context.isExpanded ? (
    <div className={styles.default} {...props}>
      {props.children}
    </div>
  ) : null;
};

Expandable.Content.propTypes = {
  //
};

Expandable.Content.defaultProps = {
  //
};

// /**
//  *
//  */

Expandable.Header = function Header(props) {
  // displays the title
  // hosts the trigger
  return (
    <div className={styles.default} {...props}>
      {props.children}
    </div>
  );
};

Expandable.Header.propTypes = {
  //
};

Expandable.Header.defaultProps = {
  //
};
