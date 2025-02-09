'use client';
import { CATEGORIES_QUERYResult } from '@/sanity.types'
import React, { useState } from 'react'
import { Button } from './ui/button';
import { client } from '@/sanity/lib/client';
interface Props {
    categories: CATEGORIES_QUERYResult;
    slug: string;
}

const CategoryProducts = ({categories,slug}:Props) => {
    const [currentSlug, setCurrentSlug]=useState(slug);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts=async(categorySlug:string)=>{
        try {
            setLoading(true);
            const query = `*[_type == 'product' && references(*[_type == 'category' && slug.current == $categorySlug]._id)] | order(name asc)`;
            const data = await client.fetch(query,{categorySlug});
        } catch (error) {
            console.error("Error fetching products:",error)
        }finally{
            setLoading(false);
        }
    }
  return (
    <div className='py-5 flex flex-col md:flex-row items-start gap-5'>
      <div className='flex flex-col md:min-w-40 border'>
        {categories?.map((item)=>(
            <Button key={item?._id} 
            onClick={()=> setCurrentSlug(item?.slug?.current as string)}
            className={`bg-transparent border-0 rounded-none text-darkColor shadow-none hover:bg-darkColor/80 hover:text-white font-semibold hoverEffect border-b last:border-b-40 ${item?.slug?.current === currentSlug && 'bg-darkColor text-white border-darkColor'}`}>
                {item?.title}
            </Button>
        ))}
      </div>
      <div className='w-full bg-red-200'>products</div>
    </div>
  )
}

export default CategoryProducts
