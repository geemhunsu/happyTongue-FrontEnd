import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text, // 텍스트
    text_size, // 텍스트 크기
    btn_color, // 버튼색
    font_color, // 폰트색
    _onClick, // onClick
    border, // border
    width, // width
    height,
    margin, // margin
    padding, // padding
    is_float, // true면 원형 버튼 false면 사각형 버튼
    border_radius, // (김현수) border-radius추가
    hover,
    family,
    bold,
    border_right,
    border_left,
    border_top,
    border_bottom,
    transition,
    line_height, //line-height
    hover_font, //(김한준) hover때 폰트색 변경
  } = props;

  const style = {
    btn_color,
    font_color,
    text_size,
    border,
    width,
    height,
    margin,
    padding,
    border_radius,
    hover,
    family,
    bold,
    border_right,
    border_left,
    border_top,
    border_bottom,
    transition,
    line_height,
    hover_font,
  };

  if (is_float) {
    // 동그란버튼은 스타일 조정 불가.
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text}</FloatButton>
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
  hover: null,
  family: null,
  bold: false,
  border_right: null,
  border_left: null,
  border_top: null,
  border_bottom: null,
  transition: null,
};

// 사각형 버튼
const ElButton = styled.button`
  ${(props) =>
    props.btn_color
      ? `background-color : ${props.btn_color}`
      : `background-color : black`}; // 버튼색 기본 black
  ${(props) =>
    props.font_color
      ? `color : ${props.font_color}`
      : `color : #ffffff`}; // 글자색 기본 white
  ${(props) => (props.text_size ? `font-size : ${props.text_size}` : "14px")};
  ${(props) =>
    props.border ? `border : ${props.border}` : "none"}; // border 기본 none
  ${(props) =>
    props.width ? `width : ${props.width}` : `width : 80%`}; // width 기본 80%
  ${(props) => (props.height ? `height : ${props.height}` : ``)};
  ${(props) => (props.line_height ? `line-height : ${props.line_height}` : ``)};
  ${(props) =>
    props.margin ? `margin : ${props.margin}` : null}; // margin 기본 null
  ${(props) =>
    props.padding
      ? `padding : ${props.padding}`
      : `padding : 15px, 0px`}; // padding 기본 위아래 15px, 가로 0px
  ${(props) =>
    props.border_radius ? `border-radius: ${props.border_radius};` : null}
  /* box-sizing : border-box; */
  font-family: ${(props) => props.family};
  ${(props) => (props.bold ? `font-weight: bold;` : "")}
  border-right: ${(props) => props.border_right};
  border-left: ${(props) => props.border_left};
  border-top: ${(props) => props.border_top};
  border-bottom: ${(props) => props.border_bottom};
  transition: ${(props) => props.transition};

  :hover {
    background-color: ${(props) => props.hover};
    cursor: pointer;
     ${(props)=>(props.hover_font?`color : ${props.hover_font}`:null)}
  }
`;

// 원형 버튼
const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  font-size: 30px;
  color: white;
  font-weight: bold;
  border: none;
  background-color: orange;
`;

export default Button;
