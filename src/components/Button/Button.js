import React from "react";
import theme from "../../theme.module.scss";
import styles from "./Button.module.scss";

export default function Button({ className, children }) {
  let classes = theme.button ? theme.button : styles.default;

  return <button className={classes + " " + className}>{children}</button>;
}
