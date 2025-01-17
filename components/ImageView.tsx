import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from '@/sanity.types';
import React from 'react'

const ImageView = () => {
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
  return (
    <div>
      image view
    </div>
  )
}

export default ImageView
