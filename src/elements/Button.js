import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text, // 텍스트
    btn_color, // 버튼색
    font_color, // 폰트색
    _onClick, // onClick
    border, // border
    width, // width
    margin, // margin
    padding, // padding
    is_float, // true면 원형 버튼 false면 사각형 버튼
    border_radius, // (김현수) border-radius추가
  } = props;

  const style = { btn_color, font_color, border, width, margin, padding, border_radius };
  
  if (is_float) {  // 동그란버튼은 스타일 조정 불가.
      return(
    <React.Fragment>  
        <FloatButton onClick = {_onClick}>{text}</FloatButton>
    </React.Fragment>
      );
  }

  
  return (
    <React.Fragment>
      <ElButton {...style} onClick={_onClick}>
        {text}
      </ElButton>
    </React.Fragment>
  );
};
Button.defaultProps = {
  text: "텍스트",
  _onClick: () => {},
  is_float: false,
};

// 사각형 버튼
const ElButton = styled.button`
  ${(props) =>
    props.btn_color
      ? `background-color : ${props.btn_color}`
      : `background-color : black`};  // 버튼색 기본 black
  ${(props) =>props.font_color ? `color : ${props.font_color}` : `color : #ffffff`}; // 글자색 기본 white
  ${(props) => (props.border ? `border : ${props.border}` : "none")};   // border 기본 none
  ${(props) => (props.width ? `width : ${props.width}` : `width : 80%`)};   // width 기본 80%
  ${(props) => (props.margin ? `margin : ${props.margin}` : null)};     // margin 기본 null
  ${(props) => props.padding ? `padding : ${props.padding}` : `padding : 15px, 0px`};   // padding 기본 위아래 15px, 가로 0px
  ${(props) => props.border_radius ? `border-radius: ${props.border_radius};` : null}
  /* box-sizing : border-box; */
`;

// 원형 버튼
const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius : 50px;
  font-size :30px;
  color : white;
  font-weight: bold;
  border : none;
  background-color : orange;
`;

export default Button;
