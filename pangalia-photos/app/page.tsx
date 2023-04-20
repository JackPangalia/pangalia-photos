"use client";

import { storage } from "./firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
//import Image from "next/image"
import ImageInspect from "./components/ImageInspect";

const Home = () => {
  // create a reference to the storage bucket
  const imagelistRef = ref(storage, "images/");

  // image url list
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  // state to store the selected image url
  const [selectedImageUrl, setSelectedImageUrl] = useState('')

  // state to store whether to inspect the selected image
  const [showInspectImage, setShowInspectImage] = useState(false)

  // use effect state to retrieve the list of images that runs at the initial load
  useEffect(() => {
    listAll(imagelistRef).then((response) => {
      // loop over the list of images
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  //TSX markup
  return (
    <>
      <section className="flex justify-center my-32">
        <h2 className="text-3xl">Explore Gallery, add photos</h2>
      </section>


      <section className="flex flex-wrap gap-5 justify-center">
        
        {imageUrls.map((url) => (
          <img
            key = {url}
            alt="image"
            src={url}
            className="h-[15rem] hover:cursor-pointer"
            onClick={() => {
              setSelectedImageUrl(url);
              setShowInspectImage(true)
            }}
          />
        ))}

      </section>
    </>
  );
};

export default Home;
