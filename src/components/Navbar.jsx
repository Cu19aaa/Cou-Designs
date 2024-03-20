import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleItemClick = () => {
    // Close the mobile menu after clicking on an item
    setNav(false);
  };

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed mt-6 top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-[80px] flex justify-between items-center px-4 bg-[#242424] rounded-3xl md:w-[50%] text-gray-300 z-50'> {/* Increased z-index to 50 */}
      <div>
        <h1>Logo</h1>
      </div>

      {/* Menu */}
      <ul className={`hidden md:flex md:space-x-4 ${nav ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}`}>
        <li>
            <Link to="home" smooth={true} duration={500} onClick={handleItemClick}>
                Home
            </Link>
        </li>
        <li>
            <Link to="about" smooth={true} duration={500} onClick={handleItemClick}>
                About
            </Link>
        </li>
        <li>
            <Link to="work" smooth={true} duration={500} onClick={handleItemClick}>
                Work
            </Link>
        </li>
        <li>
            <Link to="experience" smooth={true} duration={500} onClick={handleItemClick}>
                Experience
            </Link>
        </li>
        <li>
            <Link to="contact" smooth={true} duration={500} onClick={handleItemClick}>
                Contact
            </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={`${nav ? 'fixed top-0 left-0 w-full h-screen bg-[#242424] flex flex-col justify-center items-center' : 'hidden'}`}>
        <li className='py-6 text-4xl'>
            <Link to="home" smooth={true} duration={500} onClick={handleItemClick}>
                Home
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link to="about" smooth={true} duration={500} onClick={handleItemClick}>
                About
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link to="work" smooth={true} duration={500} onClick={handleItemClick}>
                Work
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link to="experience" smooth={true} duration={500} onClick={handleItemClick}>
                Experience
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link to="contact" smooth={true} duration={500} onClick={handleItemClick}>
                Contact
            </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
