import React from 'react';

const Upload = () => {
    // const [preview, setPreview] = React.useState("");
    const fileInput = React.useRef;

    const selectFile = (e) => {
        console.log(e.target.value)
    }

    return (
        <React.Fragment>
            <input type="file" onChange={selectFile} ref={fileInput}/>
        </React.Fragment>
    );
};


export default Upload;