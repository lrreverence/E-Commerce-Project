"use client";
import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from '@/sanity.types';
import React, { useState } from 'react'
import {motion, AnimatePresence} from 'motion/react'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface Props{
  images?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
      _key: string;
    }>;
}

const ImageView = ({images = []}: Props) => {
  const [active,setActive]=useState(images[0])
  return (
    <div className='w-full md:w-1/2 space-y-2 md:space-y-4'>
      <AnimatePresence mode='wait'>
        <motion.div className='w-full max-h-[550px] min-h-[450px] border border-darkColor/10 rounded-md group overflow-hidden'>
          <Image src={urlFor(active).url()} 
          alt="productImage" width={700}  height={700} 
          priority
          className='w-full h-96 max-h-[550px] min-h-[500px] object-contain group-hover:scale-110 hoverEffect rounded-md'
          />
        </motion.div>
      </AnimatePresence>
      <div>
        {images?.map((image)=>(
          <button key={image?._key}>
            <Image src={urlFor(image).url()}
            alt='productImage'
            width={100}
            height={100}
            className='w-full h-auto object contain'
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageView
