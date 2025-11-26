import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

const Section2 = () => {
  return (
    <div className='mt-8'>
      {/* Left Content */}
      <div className='left grid sm:grid-cols-3 gap-10 mb-10'>
        {/* Head Office address */}
        <div>
          <h4 className='text-xl font-bold mb-3'>Head Office</h4>
          <ul className='text-gray-300'>
            <li className='flex place-items-center gap-2 mb-2'>
              <MapPin className='h-5'/>
              Graphura India Private Limited, near Renu Sharma Foundation, Pataudi, Gurgaon, Haryana 122503
            </li>
            <li className='flex place-items-center gap-2 mb-2'>
              <Phone className='h-5'/>
              +91 7378021327 
            </li>
            <li className='flex place-items-center gap-2 mb-2'>
              <Mail className='h-5'/>
              official@graphura.in 
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className='text-xl font-bold mb-3'>Quick Links</h4>
          <ul className='text-gray-300'>
                <li className='hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1'>
                  <ChevronRight className='h-5' />
                  <Link to="/">Home</Link>
                </li>
                {/* <li className='hover:text-black cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1'>
                  <ChevronRight className='h-5' />
                  <Link to="">Event</Link>
                </li> */}
                <li className='hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1'>
                  <ChevronRight className='h-5' />
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li className='hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1'>
                  <ChevronRight className='h-5' />
                  <Link to="/about">About</Link>
                </li>
                <li className='hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1'>
                  <ChevronRight className='h-5' />
                  <Link to="/contact">Contact Us</Link>
                </li>
          </ul>
        </div>

        {/* Events list */}
        <div>
          <h4 className='text-xl font-bold mb-3'>Events</h4>
          <ul className='text-gray-300'>
            <li className='hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1'>
              <ChevronRight className='h-5' />
              <Link to="/tech-corporate" className=''>Corporate Event</Link>
            </li>  
            <li className='hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1'>
              <ChevronRight className='h-5' />
              <Link to="/cultural" className=''>Cultural Event</Link>
            </li>  
            <li className='hover:text-white cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1'>
              <ChevronRight className='h-5' />
              <Link to="/weddings" className=''>Wedding Event</Link>
            </li>  
          </ul>
        </div>
        
      </div>

      {/* Right Content */}
      {/* <div className='right xl:px-25 mb-10'>
        <h4 className='text-xl font-bold mb-3'>Subscribe</h4>
        <p className='text-gray-300 mb-2'>Get exclusive deals by signing up to our Portal.</p>
        
        <div className='flex flex-col gap-2'>
            <input type="email" className='border-2 border-gray-400 rounded-md p-2 w-full' placeholder='Enter your email' required/>
            <button className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-2 rounded-md w-full cursor-pointer hover:scale-105 transition duration-300 ease-in-out'>Sign Up</button>
        </div>
      </div> */}

    </div>
  );
}

export default Section2;