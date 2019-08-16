import React from "react";
import PropTypes from "prop-types";
import theme from "../../theme.module.scss";
import styles from "./Button.module.scss";

/**
 * The `Button` component allows for the easy use of well-defined buttons and
 * can easily be themed and customized.
 */
export default class Button extends React.Component {
  static propTypes = {
    /** Additional classes that should be applied to the button. */
    className: PropTypes.string,

    /** The content, which can really be anything. */
    children: PropTypes.node,

    /** The button's variant. */
    variant: PropTypes.string,

    /** The button's size */
    size: PropTypes.string
  };

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
    const { isFocused, ...props } = this.props;
    const classes = getClassNames(theme, "button");
    const appliedClasses = applyClassNames(classes, props, styles.default);

    return (
      <button
        ref={this.buttonRef}
        {...props}
        className={appliedClasses}
      >
        {this.props.children}
      </button>
    );
  }
}

function getClassNames(theme, namespace) {
  const matches = {};
  
  for (let selector in theme) {
    if (selector.includes(namespace)) {
      matches[selector] = theme[selector];
    }
  }

  return matches;
}

function applyClassNames(classes, props, defaultStyles) {
  let matches = [];

  for (let selector in classes) {
    if (Object.values(props).includes(selector.replace("button-", ""))) {
      matches.push(classes[selector]);
    }
  }

  if (props.className) {
    matches.push(props.className);
  }

  if (matches.length > 0) {
    return matches.join(" ");
  }

  return defaultStyles || null;
}
