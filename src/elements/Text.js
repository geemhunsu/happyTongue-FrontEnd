import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const { children, color, size, bold, align, margin,
        family, padding } = props;

    const styles = {
        color:color,
        size:size,
        bold:bold,
        align:align,
        margin:margin,
        family:family,
        padding:padding,
    }

    return (
        <React.Fragment {...styles}>
            <TextBox>{children}</TextBox>
        </React.Fragment>
    );
}

Text.defaultProps = {
    children: null,
    color: null,
    size: null,
    bold: false,
    align: null,
    margin: false,
    padding: false,
    family: false, //폰트 타입
}

const TextBox = styled.p`
    ${(props) => (props.color ? `color: ${props.color};` :  "")}
    ${(props) => (props.size ? `font-size: ${props.size};` : "")}
    font-wight: ${(props) => (props.bold ? `600` : `400`)};
    ${(props) => (props.align ? `text-align: ${props.align};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.family ? `font-family: ${props.family};` : "")}
`;