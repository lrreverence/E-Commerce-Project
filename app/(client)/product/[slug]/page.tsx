import Container from '@/components/Container'
import ImageView from '@/components/ImageView';
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
    <div>
        <Container>
          {product?.images && <ImageView images={product?.images}/>}
          <div>Right</div>
        </Container>
    </div>
  )
}

export default SingleProductPage