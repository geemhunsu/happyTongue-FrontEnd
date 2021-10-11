import React from "react";
import styled from 'styled-components';

const Input = (props) => {

    const { _onChange, placeholder, multiple, width, height, size,
        color, margin, padding, border, radius, family, type } = props;
    
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
    }

    if(multiple){
        return(
            <React.Fragment>
                <InputTextArea {...styles} onChange={_onChange} placeholde={placeholder}/>
            </React.Fragment>
        );
    }

    return(
        <React.Fragment>
            <InputText {...styles} type={type} onChange={_onChange} placeholde={placeholder}/>
        </React.Fragment>
    );
}

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
}

const InputText = styled.input`
    ${(props) => (props.width ? `width: ${props.width};` : "")}
    ${(props) => (props.height ? `height: ${props.height};` : "")}
    ${(props) => (props.size ? `font-size: ${props.size};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.color ? `color: ${props.color};` : "")}
    ${(props) => (props.border ? `border: ${props.border};` : "")}
    ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
    ${(props) => (props.family ? `font-family: ${props.family};` : "")}
`;
const InputTextArea = styled.textarea`
    // 크기를 고정시킴.
    resize: none; 
    ${(props) => (props.width ? `width: ${props.width};` : "")}
    ${(props) => (props.height ? `height: ${props.height};` : "")}
    ${(props) => (props.size ? `font-size: ${props.size};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.color ? `color: ${props.color};` : "")}
    ${(props) => (props.border ? `border: ${props.border};` : "")}
    ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
    ${(props) => (props.family ? `font-family: ${props.family};` : "")}
`;