import React from 'react';
import { CiPaperplane } from 'react-icons/ci';

const Footer = () => {
  return (
    <div name='contact' className='flex flex-col justify-center items-center min-h-screen bg-[#2d2d2d]'>
      <div className='bg-[#6a5acd] rounded-2xl mx-2 p-4 w-full  max-w-lg'>
        <div className='flex flex-col items-center gap-4'>
          <p className='text-sm font-bold'>LET'S WORK TOGETHER</p>
          <p className='text-lg'>chioma.ugwu@rocketmail.com</p>
        </div>

        <div className='flex items-center justify-center pt-6'>
          <button className='text-white group px-6 py-3 flex items-center rounded-2xl bg-black hover:bg-gray-700'>
            <span className='group-hover:scale-125 duration-300'>
              <CiPaperplane className='mr-2 size-5' />
            </span>
            Let's Connect
          </button>
        </div>

        <div className='flex flex-col text-center items-center gap-4 pt-6'>
          <div>
            <p>VERSION</p>
            <p>2024@Edition</p>
          </div>
          <div className='flex flex-col justify-items items-center'>
            <p>BASED IN NIGERIA</p>
            <p>Open To Relocation and Online Work</p>
          </div>
        </div>

        <div className='flex flex-col items-center gap-4 pt-6'>
          <h1 className='font-bold'>SOCIALS</h1>
          <ul className='text-center'>
              <a  target="_blank" rel="noopener noreferrer" href=""><li>DRIBBLE</li></a>
              <a  target="_blank" rel="noopener noreferrer" href="https://www.behance.net/chiomaugwu"><li>BEHANCE</li></a>
              <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chioma-ugwu-962354113?trk=contact-info"><li>LINKEDIN</li></a>
              <a  target="_blank" rel="noopener noreferrer" href="http://chioma-ugwu.medium.com/"><li>MEDIUM</li></a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
