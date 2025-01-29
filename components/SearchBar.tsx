"use client"
import { Search, X } from 'lucide-react'
import React, { useCallback, useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Input } from './ui/input'
import { client } from '@/sanity/lib/client'

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const fetchProducts=useCallback(async()=>{
    if(!search){
      setProducts([]);
      return;
    }
    setLoading(true)
    try {
      const query = `*[_type == "product" && name match $search] | order(name asc)`;
      const params={search:`${search}*`}
      const response = await client.fetch(query,params);
      setProducts(response);
    } catch (error) {
      console.error('Error Fetching products:',error)
    }finally{
      setLoading(false);
    }
  },[search])

  useEffect(() => {
    const debounceTimer = setTimeout(()=>{
      fetchProducts();
    },300)
    return()=>clearTimeout(debounceTimer)
  },[search,fetchProducts]);
  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger onClick={() => setShowSearch(!showSearch)}>
        <Search className='w-5 h-5 hover:text-darkColor hoverEffect'/>
      </DialogTrigger>
      <DialogContent className='max-w-5xl h-[90vh] flex flex-col overflow-hidden'>
        <DialogHeader>
          <DialogTitle className='mb-1'>
            Product Searchbar
          </DialogTitle>
          <form className='relative' onSubmit={(e)=> e.preventDefault()}>
            <Input placeholder='Search your product here...' className='flex-1 rounded-md py-5'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            {search && <X onClick={() => setSearch("")} className='w-4 h-4 absolute top-3 right-11 hover:text-red-600 hoverEffect'/>}
            <button type='submit' className={`absolute right-0 top-0  w-10 h-full flex items-center justify-center rounded-tr-md rounded-br-md hover:bg-darkColor hover:text-white hoverEffect ${search ? "bg-darkColor text-white":"bg-darkColor/10"}`}>
              <Search className='w-5 h-5'/>
            </button>
          </form>
        </DialogHeader>
        <div className='w-full h-full overflow-y-scroll border border-darkColor/20 rounded-md '>
          <div>
            {loading ? <p>Searching in progress...</p>:products.length ? <div>Products available</div>:<div className='text-center py-10 font-semibold tracking-wide'>
              {search && products?.length ? <p>No match</p>:<p className='text-green-600 flex items-center justify-center gap-1'><Search className='w-5 h-5'/>Search and explore your products from Vulos.</p>}
              </div>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SearchBar
