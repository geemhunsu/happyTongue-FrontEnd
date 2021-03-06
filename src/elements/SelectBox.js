import React from 'react';
import styled from 'styled-components';
import Down from "../downarrow.png"

const SelectBox = (props) => {

    const {
        children,
        padding,
        margin,
        width,
        height,
        _onChange,
    } = props;
    const styles = {
        padding,
        margin,
        width,
        height,        
    }
    return (
        <React.Fragment>
            <ESelect {...styles} onChange={_onChange}>
                {children}
            </ESelect>
        </React.Fragment>
    );
};

SelectBox.defaultProps = {
    children: null,
    padding: null,
    margin: null,
    width : null,
    height: null,
    _onChange: () => {},
}

const ESelect = styled.select`
    padding: ${props => props.padding};
    width: ${props => props.width};
    height: ${props => props.height};
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(${Down}) no-repeat 95% 50%;
    background-size: 20px 20px;
    border: none;
    border-bottom: 4px solid #F18C8E;
    border-right: 3px solid #F18C8E;
    border-top: 1.5px solid #F18C8E;
    border-left: 1.5px solid #F18C8E;    
    border-radius: 7px;
    font-family: GowunDodum-Regular;
    font-weight: bold;
    transition: 0.3s all ease;

    :focus {
        outline: 1px solid #F18C8E;
        
    }
    :hover{
        background-color: #FEFFBD;
        cursor: pointer;
        color: #b56b6d;
    }
`;

export default SelectBox;