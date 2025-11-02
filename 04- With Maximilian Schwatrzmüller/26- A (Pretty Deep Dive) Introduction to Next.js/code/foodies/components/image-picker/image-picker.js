"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const inputRef = useRef();

  const [pickedImage, setPickedImage] = useState();

  const handlePickClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && <Image src={pickedImage} alt="" fill />}
        </div>
        <input
          className={styles.input}
          ref={inputRef}
          id={name}
          type="file"
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImageChange}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
