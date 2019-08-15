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
    const { className, isFocused, ...props } = this.props;

    return (
      <button
        ref={this.buttonRef}
        className={theme[className] ? theme[className] : styles.default}
        {...props}
      >
        {this.props.children}
      </button>
    );
  }
}