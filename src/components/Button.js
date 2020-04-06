import React from "react";
import "./Button.scss";
import classNames from "classnames";

function Button({ children, size }) {
  /* className 에 CSS 클래스 이름을 동적으로 넣어주고 싶으면 이렇게 설정을 해주어야 합니다. */
  /* props 로 받은 props 값이 button 태그의 className 으로 전달이 될 것 입니다 */
  return <button className={classNames("Button", size)}>{children}</button>;
}

Button.defaultProps = {
  size: "medium",
};

export default Button;
