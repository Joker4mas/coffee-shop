// import React from 'react'
// import {FaPhone} from '@react-icon'
export default function Footer() {
  return (
    <div className='  bg-coffeeBrown'>
        <div className="form-text flex flex-col md:flex-row justify-between items-center p-12">
            <div>
             <h2 className='text-2xl text-whiteCo'>Contact Us </h2>
             <p>Send us a message</p>
            <form action="" className="flex flex-col mb-8 md:mb-0 md:w-4/5">
                <input type="text" placeholder="Name" className=' p-4'/>
                <input type="email" placeholder="Email" className=' p-4 mt-4'/>
                <textarea placeholder="Message" className='p-4 mt-4'/>
                <button type="submit" className='p-4 mt-4 text-coffeeBrown bg-lightBrown'>Submit</button>
    
            </form>
            </div>
            <div className="siteMap text-whiteCo mb-12 md:mb-0">
                <h2 className="text-2xl font-bold text-whiteCo">Sitemap</h2>
                <p className='mb-4'>All our pages</p>
                <div className='flex flex-col'>
                    <span>- Home</span>
                    <span>- About Us</span>
                    <span>- Feature</span>
                    <span>- Pricing</span>
                    <span>- Contact Us</span>
                </div>
            </div >
            <div className="footer-logo flex flex-col items-center mt-8 md:mt-0 md:items-start">
                <img src="/Coofee-Footer-logo.png" alt="Coffee logo" className='-mt-24'/>
                <div className="flex flex-col text-whiteCo -mt-16">
                    <span>
                    (80) 234545656
                    </span>
                    <span>
                        cooffeeborcelle@gmail.com
                    </span>
                </div>
            </div>


        </div>
        <div className="bg-lightBrown text-white p-4 text-center">
        <span className="text-sm ">Copyright &copy; 2020 All Rights Reserved Company Name.</span>
        </div>
    </div>
  )
}
