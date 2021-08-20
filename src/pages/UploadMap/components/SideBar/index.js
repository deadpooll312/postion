import React, { useRef } from 'react';

const SideBar = ({ setImage, image }) => {
  const imageInput = useRef(null);

  const clickImageInput = () => {
    imageInput.current.click();
  };

  const handleImageLoad = (e) => {
    const [file] = e.target.files;
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="sidebar">
      <input className="input" placeholder="mapName" />
      <input
        ref={imageInput}
        className="d-none"
        type="file"
        name="image"
        onChange={handleImageLoad}
      />
      <button className="btn" onClick={clickImageInput}>
        +
      </button>
      {image && (
        <div className="form-item">
          <div className="form-image"></div>
          <div className="form-tex">
            <h4> Form item</h4>
            <h4>0x0</h4>
            <h4>scale: ?</h4>
            <button className="form-btn">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
