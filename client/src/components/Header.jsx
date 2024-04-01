import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-transparent shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
            <span className='text-blue-500 shadow-md'>Bluenest</span>
            
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Start typing....' className='bg-transparent' w-24 sm />
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/Home'>
           <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
           </Link>
           <Link to='/About'>
           <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
           </Link>
           <Link to='/Signin'>
           <li className=' text-slate-700 hover:underline'>Sign-in</li>
           </Link>
           <Link to='/Signup'>
           <li className=' text-slate-700 hover:underline'>Signup</li>
           </Link>
           
        </ul>
        </div>
    </header>
  )
}
