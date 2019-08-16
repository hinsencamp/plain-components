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
    const { className: classNameString, isFocused, ...props } = this.props;

    const classes = !classNameString
      ? ""
      : classNameString
          .split(" ")
          .map(className => {
            return theme[className] ? theme[className] : className;
          })
          .join(" ");

    return (
      <button
        ref={this.buttonRef}
        className={classes === "" ? styles.default : classes}
        {...props}
      >
        {this.props.children}
      </button>
    );
  }
}
