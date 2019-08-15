import React from "react";
import Button from "../components/Button";

export default function Cambutton({ children, className }) {
  // do some theme styles exist for camButton ? if not show defaults instead
  return <Button className={`camButton ${className}`}>{children}</Button>;
}
