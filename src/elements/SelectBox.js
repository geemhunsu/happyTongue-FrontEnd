import React from 'react';
import styled from 'styled-components';


const SelectBox = (props) => {

    const {
        children,
        padding,
        margin,
    } = props;
    return (
        <React.Fragment>
            <ESelect>
                {children}
            </ESelect>
        </React.Fragment>
    );
};

SelectBox.defaultProps = {
    children: null,
    padding: null,
    margin: null,
}

const ESelect = styled.select`
    padding: ${props => props.padding}
`;

export default SelectBox;