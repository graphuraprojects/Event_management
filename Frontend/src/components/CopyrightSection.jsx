import React from 'react'
import { Link } from 'react-router-dom';

const CopyrightSection = () => {
  return (
    <div className='mt-3 flex justify-between flex-wrap copyright'>
        <h4 className='mb-3 md:text-[16px] text-[14px]'>Copyright &copy; 2025 Graphura India Private Limited, All rights reserved</h4>

        <ul className='flex gap-5 text-gray-500'>
            <li className='hover:text-white cursor-pointer md:text-[16px] text-[13px]'>
                <Link to='/term-policy'>Term of use</Link>
            </li>
            
            <li className='hover:text-white cursor-pointer md:text-[16px] text-[13px]'>
                <Link to='/cookie'>Cookie Policy</Link>
            </li>
        </ul>
    </div>
  )
}

export default CopyrightSection