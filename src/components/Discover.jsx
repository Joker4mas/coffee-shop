// import React from 'react'

export default function Discover() {
  return (
    <div className="mt-40">
    <div className='flex flex-col  md:flex-row gap-24 items-center text-black bg-lightBrown p-16'>
      <div className="mt-8"> 
        <img src="/mug-discover.png" alt="Discover Coffee Borcelle" className="w-screen"/>
      </div>
      
      <div >
      <span className="">
      <h2 className="font-bold text-4xl">Discover Coffee Borcelle</h2>
        <p className="text-2xl">
        Elevating Your Coffee Experience
        </p>
      </span>
        <p className="text-wrap text-xl  my-4 md:w-3/5">
        At Coffee Borcelle, we`re on a mission to redefine your coffee moments. 
        Our carefully curated selection of premium beans,
         sourced from the world`s most renowned coffee regions.
        </p>
        <p className="text-xl md:w-3/5">
        With expert craftsmanship and a commitment to quality, 
        Join us in savoring the art of coffee, one cup at a time.
        </p>
      
        <div className="flex  mt-4 text-lightBrown">
          <button className="bg-coffeeBrown hover:bg-amber-400 text-white font-bold py-2 px-4 rounded">
            View All Coffee Blends
          </button>
        </div>
      </div>
      </div>
    </div>

  )
}
