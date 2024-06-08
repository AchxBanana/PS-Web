import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <>
      <div className="container mx-auto h-screen">
        <div className="flex justify-between">
          <div className=" mt-10">
            <h1 className="text-2xl text-blue-600 font-kola animated-font md:text-6xl">Welcome TO PS</h1>
            <TypeAnimation
              sequence={[
                'Definding the Fucker'
              ]}
              className="text-xl text-pink-500 font-cus md:text-2xl"
            />
            <div className="mt-56 rounded-md shadow-lg shadow-green-500/50 text-white font-bold h-24 p-10 bg-green-500">
              Hello world
            </div>
          </div>

          <div>
            <img
              src="pong.png"
              className="h-1/2 animated-element md:h-[830px]"
              id="pong"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
