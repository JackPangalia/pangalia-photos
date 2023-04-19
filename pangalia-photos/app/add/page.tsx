"use client";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import React, { useState } from "react";

const Add = () => {
  // Image upload state
  const [imageUpload, setImageUpload] = useState<File | null>(null);

  // Is sign in state
  const [isSignedIn, setIsSignedIn] = useState(false);

  // password state
  const [password, setPassword] = useState("");

  // File upload handler
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImageUpload(event.target.files[0]);
    }
  };

  // handle password change
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // send data to the backend api
  const sendPassword = async () => {
    const response = await fetch("../api/backend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
      }),
    });
  };

  // Image upload function: used to upload image to firebase storage
  const uploadFile = () => {
    if (imageUpload === null) {
      return;
    }

    // create a storage reference for the image in the images folder and give image unique nme
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    // upload image to firebase storage
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image uploaded successfully!");
    });
  };

  //JSX Markup
  return (
    <>
      <h1 className="flex justify-center my-32 text-3xl mr-auto ml-auto">
        Add Your Photos
      </h1>
      

      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[30rem] gap-4">
          <div className="flex" style = {isSignedIn ? {display: 'none'} : {display: 'flex'}}>
            <input
              type="password"
              className="w-full border-2 border-black p-2 outline-none"
              placeholder="Enter password"
              onChange={handlePasswordChange}
            />

            <button 
              onClick={sendPassword}
              className="w-1/2 border-r-2 border-t-2 border-b-2 border-black p-2 outline-none hover:bg-black hover:text-white"
            >
              Submit Password
            </button>
          </div>

          <input
            style = {isSignedIn? {display: 'block'} : {display: 'none'}}
            type="file"
            className="w-full border-2 border-black p-2"
            placeholder="Choose a file"
            onChange={handleFileChange}
          />

          <button
            style = {isSignedIn? {display: 'block'} : {display: 'none'}}
            
            className="w-full border-2 border-black p-2 outline-none hover:bg-black hover:text-white"
            onClick={uploadFile}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Add;
