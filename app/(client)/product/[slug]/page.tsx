import Container from '@/components/Container'
import ImageView from '@/components/ImageView';
import PriceView from '@/components/PriceView';
import { getProductBySlug } from '@/sanity/helpers/queries';
import { notFound } from 'next/navigation';
import React from 'react'

const SingleProductPage = async({params}:{
  params:Promise<{slug: string}> 
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if(!product){
    return notFound();
  }

  return (
        <Container className='py-10 flex flex-col md:flex-row gap-10'>
          {product?.images && <ImageView images={product?.images}/>}
          <div className='w-full md:w-1/2 flex flex-col gap-5'>
            <div className='text-3xl md:text-4xl font-bold mb-2'>
              <h2>{product?.name}</h2>
              <PriceView price={product?.price} discount={product?.discount} className='text-lg font-bold'/>
            </div>
          </div>
        </Container>
  )
}

export default SingleProductPage