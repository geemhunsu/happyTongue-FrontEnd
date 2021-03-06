import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const {
    _onChange,
    placeholder,
    multiple,
    width,
    height,
    size,
    color,
    margin,
    padding,
    border,
    radius,
    family,
    type,
    outline,
    outlinecolor,
    onSubmit,
    value,
    id,
    name,
    border_bottom,
    display,
  } = props;

  const styles = {
    width: width,
    height: height,
    size: size,
    color: color,
    margin: margin,
    padding: padding,
    border: border,
    radius: radius,
    family: family,
    type: type,
    outline: outline,
    outlinecolor: outlinecolor,
    value: value,
    border_bottom,
    display,
  };

  if (multiple) {
    return (
      <React.Fragment>
        <InputTextArea
          {...styles}
          id={id}
          name={name}
          onKeyPress={(e) => {
            onSubmit(e);
          }}
          onChange={_onChange}
          placeholder={placeholder}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <InputText
        {...styles}
        type={type}
        id={id}
        name={name}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onSubmit(e);
          }
        }}
        onChange={_onChange}
        placeholder={placeholder}
      />
    </React.Fragment>
  );
};

Input.defaultProps = {
  _onChange: () => {},
  width: "100%",
  height: null,
  size: null, //폰트 크기
  margin: "0px",
  padding: "0px",
  color: null, //폰트 색상
  border: null,
  radius: null, //border-radius
  family: null, //폰트 타입
  type: "text",
  outline: false, // 아웃라인 유무
  outlinecolor: null, // 아웃라인 색상
  onSubmit: () => {},
  value: "",
  id: null,
  name: null,
  border_bottom: null,
  display: null,
};

const InputText = styled.input`
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "")}
    ${(props) => (props.size ? `font-size: ${props.size};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.color ? `color: ${props.color};` : "")}
    ${(props) => (props.border ? `border: ${props.border};` : "")}
    ${(props) =>
    props.border_bottom ? `border-bottom: ${props.border_bottom};` : ""}
    ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
    ${(props) => (props.family ? `font-family: ${props.family};` : "")}
    ${(props) =>
    props.outlinecolor ? `outline-color: ${props.outlinecolor};` : ""}
    ${(props) => (props.outline ? `outline: ${props.outline};` : "")}
    display: ${props => props.display};
    box-sizing: border-box;
    transition: 0.3s all ease;
`;
const InputTextArea = styled.textarea`
  // 크기를 고정시킴.
  resize: none;
  box-sizing: border-box;
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "")}
    ${(props) => (props.size ? `font-size: ${props.size};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.color ? `color: ${props.color};` : "")}
    ${(props) => (props.border ? `border: ${props.border};` : "")}
    ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
    ${(props) => (props.family ? `font-family: ${props.family};` : "")}
    ${(props) =>
    props.outlinecolor ? `outline-color: ${props.outlinecolor};` : ""}
    ${(props) => (props.outline ? `outline: ${props.outline};` : "")}
`;

export default Input;
