import React from "react";
import "./Button.scss";
import classNames from "classnames";

/* 필요한 이벤트가 있을 때 마다 매번 이렇게 넣어주는건 귀찮습니다. 
이러한 문제를 해결 해줄 수 있는 문법이 있는데요! 바로 spread 와 rest 입니다.  */
/* 이 문법은 주로 배열과 객체, 함수의 파라미터, 인자를 다룰 때 사용하는데, 
컴포넌트에서도 사용 할 수 있답니다. */
function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  onClick,
  onMouseMove,
}) {
  /* className 에 CSS 클래스 이름을 동적으로 넣어주고 싶으면 이렇게 설정을 해주어야 합니다. */
  /* props 로 받은 props 값이 button 태그의 className 으로 전달이 될 것 입니다 */
  /* outline 값을 props 로 받아와서 객체 안에 집어 넣은 다음에 classNames() 에 포함시켜줬는데 
  이렇게 하면 outline 값이 true 일 때에만 button 에 outline CSS 클래스가 적용됩니다.*/
  return (
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      onClick={onClick}
      onMouseMove={onMouseMove}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
