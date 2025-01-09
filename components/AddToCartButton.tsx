import { Product } from '@/sanity.types'
import React from 'react'
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import QuantityButtons from './QuantityButtons';
import PriceFormatter from './PriceFormatter';

interface Props {
    product: Product;
    className?: string;
}

const AddToCartButton = ({product, className}: Props) => {
    const isOutOfStock = product?.stock === 0;
    const itemCount = 0;
  return (
    <div>
      {itemCount ? 
      <div className='w-full text-sm'>
        <div className='flex items-center justify-between'>
          <span className='text-xs text-muted-foreground'>Quantity</span>
          <QuantityButtons product={product}/>
        </div>
        <div className='flex items-center justify-between border-t pt-1'>
          <span className='font-semibold text-xs'>Subtotal</span>
          <PriceFormatter amount={product?.price ? product ?.price *itemCount : 0}/>
        </div>
      </div> :
       <Button disabled={isOutOfStock} className={
        cn("w-full bg-transparent text-darkColor shadow-none border border-darkColor/30font-semibold tracking-wide hover:text-white hoverEffect",className)}>Add to cart</Button>}
    </div>
  )
}

export default AddToCartButton
