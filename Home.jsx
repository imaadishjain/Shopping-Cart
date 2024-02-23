import React from 'react'
import { useState,useEffect } from 'react';
import Spineer from '../components/Spineer';
import Product from '../components/Product';

export default function Home() {
  const API_URL = "https://fakestoreapi.com/products";

  const[loading,setLoading]=useState(false);
  const[posts,setPosts]=useState([]);

  useEffect(()=>
  {
   fetchProductData();
  },[])

  async function fetchProductData()
  {
      setLoading(true);
      try{
        const res=await fetch(API_URL);
        const data=await res.json();
         
        setPosts(data);

      }
      catch(error)
      {
           console.log("Error aa gaya ji")
           setPosts([]);
      }
      setLoading(false);
  }
  return (
      <div >
         {
          loading?<Spineer/>:
          posts.length>0?
          (<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map((post)=>
            (
              <Product key={post.id} post={post}/>
            ))
          }
          </div>):

          <div className='flex justify-center items-center'>
            <p>No Data Found</p>
          </div>
          
         }
      </div>
  )
}
