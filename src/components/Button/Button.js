import React from "react";
import PropTypes from "prop-types";
import theme from "../../theme.module.scss";
import styles from "./Button.module.scss";

export default class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
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
    /*const classes = !classNameString
      ? ""
      : classNameString
          .split(" ")
          .map(className => {
            return theme[className] ? theme[className] : className;
          })
          .join(" ");*/

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
