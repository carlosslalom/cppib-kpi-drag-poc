import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import './App.css';

function App() {
  const onDrop = useCallback(acceptedFiles => {
    // do something with the files
    console.log(acceptedFiles);
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 500000
  });

  return (
    <div>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        {
          isDragActive ?
          <p>Drop the file here...</p> :
          <p>Drag and drop a file here, or click to select a file</p>
        }
      </div>
    </div>
  );
}

export default App;
