import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className='min-h-screen bg-orange-50 overflow-hidden'>
      <div className='bg-red-800 max-w-auto h-72 flex flex-col justify-center items-center 
      rounded-bl-8xl rounded-br-8xl bg-gradient-to-r from-red-700 to-red-600'>
        {/* H1 Tag */}
        <h1 className='font-gilroy font-light flex italic text-xl text-white/60 mb-4'>
          Flair of Freedom,Freedom of Flair
        </h1>

        {/* Image Tag */}
        <img
          src="/image/logo-03 copy.png"
          alt="Rendezvous"
          className='h-[55%]'
        />
      </div>
      <div className='text-red-500 w-full items-center flex '>  
        <h1 className='mx-auto font-gilroy font-bold text-4xl w-fit mt-20 text-red-700 text-left ml-10 mb-0 leading-[10px]'>
          LIBRATIVE<br/>SUBMISSONS
          <span className='text-orange-500 text-5xl h-fit '>.</span>
        </h1> 
      </div>

      <div className='text-black/35 m-6 flex text-justify text-sm leading-[16px] font-normal animate-typing'>
        <p className='font-gilroy'><span className='font-semibold text-black/45'>Rendezvous Life Festival</span> is an annual arts and culture event organized by
        Jamia Madeenathunnoor to nurture and enhance the artistic talents of its students.This festival serves as a platform for students to express their
        creativity,explore various art forms and engage with peers in an environment that celebrates artistic growth.Through workshops, performances and 
        exhibitions.The event not only promotes individual artistic development but also aims to build a supportive, vibrant community 
        around the arts at Jamia Madeenathunnoor.
        </p>
      </div>
      <div className=" flex flex-col">
          <div className="h-10 w-screen bg-[url('/image/logo.png')] bg-repeat-x bg-contain animate-move"></div>
      </div>
    </div>
  );
}

export default Header;
