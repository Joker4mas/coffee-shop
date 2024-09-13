// import {NavLink} from 'react-dom'

export default function Navbar() {
  return (
    <div >
      <div className="relative">
      <img src="/image-removeb.png" alt="" className="bg-coffeeBrown"/>
   
   <div className="r-nav flex items-center md:ml-32 md:absolute md:-top-24 md:bottom-2">
     <div className="-mr-16">
       <img src="/Coofee-Footer-logo.png" alt="Coffee Borcelle logo" className="mt-8 h-40 md:h-80 "/>
     </div>
     <nav className="hidden md:block bg-menuBrown p-2 rounded-md">
       <ul className="flex gap-12 p-2">
         <li className="text-whiteCo font-bold"><a href="#" className="hover:bg-whiteCo  hover:text-menuBrown rounded-md p-2 cursor-pointer">Home</a></li>
         <li className="text-whiteCo font-bold"><a href="#" className="hover:bg-whiteCo  hover:text-menuBrown rounded-md p-2 cursor-pointer">About Us</a></li>
         <li className="text-whiteCo font-bold"><a href="#" className="hover:bg-whiteCo  hover:text-menuBrown rounded-md p-2 cursor-pointer">Feature</a></li>
         <li className="text-whiteCo font-bold"><a href="#" className="hover:bg-whiteCo  hover:text-menuBrown rounded-md p-2 cursor-pointer">Purchase</a></li>
         <li className="text-whiteCo font-bold"><a href="#" className="hover:bg-whiteCo  hover:text-menuBrown rounded-md p-2 cursor-pointer">Contact Us</a></li>
       </ul>
     </nav>
     </div> 

     <div className="flex-col  text-center -mt-80 mr-24">
       <h1 className="text-4xl text-whiteCo leading-loose tracking-widest">
       Coffee Makes Mood
       </h1>
       <p className="font-galada text-whiteCo">
        ``Indulge in Every Sip: Experience the Richness of Coffee!``
       </p>
     </div>
      </div>
    </div>
  )
}
