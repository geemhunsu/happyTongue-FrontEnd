import React from 'react';
import styled from 'styled-components';

const Upload = () => {
    const [preview, setPreview] = React.useState("");
    const fileInput = React.useRef();
    
    const selectFile = (e) => {
        console.log(e.target.files[0])
        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result)
            setPreview(reader.result);
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