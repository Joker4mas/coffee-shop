// import {NavLink} from 'react-dom'

export default function Navbar() {
  return (
    <div className="relative h-72">
      <img src="/src/assets/image-removeb.png" alt="" className="bg-yellow-950"/>
   
    <div className="r-nav flex items-center ml-28 absolute top-0 bottom-4">
      <div className="-mr-16">
        <img src="/src/assets/Coofee-Footer-logo.png" alt="Coffee Borcelle logo" className="mt-8 h-80"/>
      </div>
      <nav className="bg-yellow-800 p-2 rounded-md">
        <ul className="flex gap-12 p-2">
          <li className="text-white font-bold"><a href="#" className="hover:bg-white hover:text-black rounded-md p-2">Home</a></li>
          <li className="text-white font-bold"><a href="#" className="hover:bg-white hover:text-black rounded-md p-2">About Us</a></li>
          <li className="text-white font-bold"><a href="#" className="hover:bg-white hover:text-black rounded-md p-2">Feature</a></li>
          <li className="text-white font-bold"><a href="#" className="hover:bg-white hover:text-black rounded-md p-2">Purchase</a></li>
          <li className="text-white font-bold"><a href="#" className="hover:bg-white hover:text-black rounded-md p-2">Contact Us</a></li>
        </ul>
      </nav>
      </div> 

      <div className="flex-col ">
        <h1 className="text-3xl">
        Coffee Makes Mood
        </h1>
        <p className="font-galada">
         "Indulge in Every Sip: Experience the Richness of Coffee!"
        </p>
      </div>

    </div>
  )
}
