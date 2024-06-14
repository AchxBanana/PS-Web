import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    
  return (
    <>
      <div className="container mx-auto h-fit m-10 relative">
        <img src="slide-18.jpg" className="absolute w-4/5 shadow-md shadow-gray-500 rounded-sm " />
        <div className="flex justify-between relative">
          <div className="mt-10 ml-10">
            <h1 className="text-2xl text-blue-600 font-mitr animated-font md:text-6xl">โพธิสารพิทยากร</h1>
            <TypeAnimation
              sequence={[
                'Definding the Future'
              ]}
              className="text-xl text-pink-500 font-cus md:text-2xl "
            />
          </div>
          <div>
            <img
              src="pong.png"
              className="h-1/2 animated-element md:h-[760px] mr-10 "
              id="pong"
            />
          </div>
        </div>
        <div className="text-white text-3xl shadow-lg rounded-md h-32 flex font-mitr p-5 bg-blue-500">
          <div className='flex'>
            <h1 className="my-auto"> โพธิสาร คือสถานการศึกษา</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
