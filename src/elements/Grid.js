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
    is_center, // 글자 가운데 정렬
    _onClick,
    border,
    flex_direction,
    border_radius,
    flex_item,
    flex_wrap,
    border_bottom,
  } = props;
  const styles = {
    // props 중에서 스타일 부분만 따로 묶음
    margin,
    padding,
    width,
    height,
    bg,
    flex,
    is_center,
    border,
    flex_direction,
    border_radius,
    flex_item,
    flex_wrap,
    border_bottom,
  };

  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
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
  is_center: false,
  border: null,
  border_radius: null,
  _onClick: () => {},
  flex_item: null,
  flex_wrap: null,
  border_bottom: null,
};

// flex의 경우 justify-content의 값만 바꾸는 것으로
const GridBox = styled.div`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  ${(props) =>
    props.flex
      ? `display: flex; align-items: center; justify-content: ${props.flex};`
      : ""}
  ${(props) => (props.is_center ? `text-align: center;` : "")}
    flex-direction: ${(props) => props.flex_direction};
  box-sizing: border-box;
  border: ${(props) => props.border};
  border-radius: ${(props) => props.border_radius};
  flex-wrap: ${(props) => props.flex_wrap};
  border-bottom: ${(props) => props.border_bottom};
`;
export default Grid;
