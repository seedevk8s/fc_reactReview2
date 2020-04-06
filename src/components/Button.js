import React from "react";
import "./Button.scss";
import classNames from "classnames";

function Button({ children, size, color, outline }) {
  /* className 에 CSS 클래스 이름을 동적으로 넣어주고 싶으면 이렇게 설정을 해주어야 합니다. */
  /* props 로 받은 props 값이 button 태그의 className 으로 전달이 될 것 입니다 */
  /* outline 값을 props 로 받아와서 객체 안에 집어 넣은 다음에 classNames() 에 포함시켜줬는데 
  이렇게 하면 outline 값이 true 일 때에만 button 에 outline CSS 클래스가 적용됩니다.*/
  return (
    <button className={classNames("Button", size, color, { outline })}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
