import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    children,
    margin,
    padding,
    width,
    height,
    bg,
    flex, // justify-content의 값 설정
    flex_align, //align-itmes의 값 설정
    is_center, // 글자 가운데 정렬
    _onClick,
    border,
    flex_direction,
    border_radius,
    flex_item,
    flex_wrap,
    overflow,
    border_bottom,
    ref,
    min_width,
    max_width,
    shadow,
    hover, // 커서 포인터
  } = props;
  const styles = {
    // props 중에서 스타일 부분만 따로 묶음
    margin,
    padding,
    width,
    height,
    bg,
    flex,
    flex_align,
    is_center,
    border,
    flex_direction,
    border_radius,
    flex_item,
    flex_wrap,
    overflow,
    border_bottom,
    ref,
    min_width,
    max_width,
    shadow,
    hover,
  };

  return (
    <React.Fragment>
      <GridBox {...styles} ref={ref} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  margin: null,
  padding: null,
  width: "100%",
  height: "100%",
  bg: null,
  flex: null,
  flex_direction: null,
  flex_align: null,
  is_center: false,
  border: null,
  border_radius: null,
  _onClick: () => {},
  flex_item: null,
  flex_wrap: null,
  overflow: null,
  border_bottom: null,
  min_width: false,
  max_width: false,
  shadow: null,
  hover: false,
};

// flex의 경우 justify-content의 값만 바꾸는 것으로
const GridBox = styled.div`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  min-width: ${(props) => props.min_width};
  max-width: ${(props) => props.max_width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  ${(props) =>
    props.flex
      ? `display: flex; align-items: center; justify-content: ${props.flex};`
      : ""}
  ${(props) => (props.is_center ? `text-align: center;` : "")}
  flex-direction: ${(props) => props.flex_direction};
  ${(props) => (props.flex_align ? `align-items: ${props.flex_align};` : "")}
  box-sizing: border-box;
  border: ${(props) => props.border};
  border-radius: ${(props) => props.border_radius};
  flex-wrap: ${(props) => props.flex_wrap};
  border-bottom: ${(props) => props.border_bottom};
  overflow: ${(props) => props.overflow};
  ${(props) => (props.shadow ? `box-shadow: ${props.shadow};` : "")}
  ${(props) => (props.hover ? `cursor:pointer;` : "")}

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 15px;
  }
`;
export default Grid;
