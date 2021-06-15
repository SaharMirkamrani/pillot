import { useRef } from 'react';
import styles from '../styles/main.module.css';
import pic from '../assets/submit-pic.png';

const FileUploader = (props) => {
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
		<div className="border-dotted border-2 border-gray-400 rounded-md w-1/3 my-3 mr-3">
      <button onClick={handleClick} className="focus:outline-none w-1/2 my-3 mx-auto">
        <img src={pic} alt="submitPic" className="opacity-40 mx-auto" />
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
			</div>
    </>
  );
};
export default FileUploader;
