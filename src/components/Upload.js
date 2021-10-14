import React from 'react';
import styled from 'styled-components';
import {actionCreators as imageActions} from "../redux/modules/image"
import { useDispatch } from 'react-redux';

const Upload = () => {
    const dispatch = useDispatch();    
    const fileInput = React.useRef();   

    const selectFile = (e) => {        
        const fullName = e.target.files[0].name;
        const name = e.target.files[0].name.split('.')[0];
        const type = e.target.files[0].name.split('.')[1];
        console.log(name);
        console.log(type);
        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);
        reader.onloadend = () => {                       
            dispatch(imageActions.setPreview(reader.result, name, type, fullName, file))
        }
    }

    return (
        <React.Fragment>
            <EInput type="file" onChange={selectFile} ref={fileInput}/>
        </React.Fragment>
    );
};

const EInput = styled.input`
    font-family: GowunDodum-Regular;
    font-weight: bold;
    border-radius: 7px;
    padding: 5px 0 5px 10px;
    box-shadow: 2px 2px 10px #b95050;
    transition: 0.2s all ease;

    ::file-selector-button {
        display:none;
    }
    :hover {
        cursor: pointer;
        background: skyblue;
        color: aliceblue;
    }
`;

export default Upload;