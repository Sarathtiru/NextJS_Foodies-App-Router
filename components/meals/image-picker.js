"use client";
import Image from 'next/image';
import classes from "./image-picker.module.css";
import { useState, useRef } from 'react';

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();
    const handlePickClick = () => {
      console.log('Image click')
    imageInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

      const fileReader = new FileReader();
      fileReader.onload = () => {
          setPickedImage(fileReader.result)
      }
      fileReader.readAsDataURL(file)
      
  };

  return (
    <div className={classes.picker}>
      <label htmlFor="image"></label>
          <div className={classes.controls}>
              <div className={classes.preview}>
                  {!pickedImage && <p>No image picked yet.</p>}
                  {pickedImage && <Image src={pickedImage} alt='Image selected by the user' fill/>}
              </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
