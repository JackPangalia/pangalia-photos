'use client'

import { storage } from "./firebase"
import { getDownloadURL,listAll, ref } from "firebase/storage"
import { useEffect, useState } from "react"
//import Image from "next/image"

const Home = () => {

  // create a reference to the storage bucket
  const imagelistRef = ref(storage, 'images/')

  // image url list
  const [imageUrls, setImageUrls] = useState<string[]>([])

  // use effect state to retrieve the list of images that runs at the initial load
  useEffect(() => {
    listAll(imagelistRef).then((response) => {
      // loop over the list of images
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url])
        });
      })
    })
  }, [])

  //TSX markup
  return (
    <>
      <section className = 'flex justify-center my-32'>
        <h2 className = 'text-3xl'>Explore Gallery, add photos</h2>
      </section>

      <section className = 'flex flex-wrap gap-5 my-5 justify-center'>
        {imageUrls.map((url) => (
          <img 
            alt = 'image'
            src = {url} 
            className = 'h-[15rem]' 
          />
        ))}
      </section>
    </>
  )
}

export default Home