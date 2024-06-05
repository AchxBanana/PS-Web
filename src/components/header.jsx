import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <>
      <div className="container mx-auto h-screen">
        <div className="flex justify-between">
          <div className=" mt-10">
            <h1 className="text-6xl text-blue-600 font-kola animated-font">Welcome TO PS</h1>
            <TypeAnimation
              sequence={[
                'Definding the F U T U R E'
              ]}
              className="text-2xl text-pink-500 font-cus"
            />
          </div>
          <div>
            <img
              src="pong.png"
              className="h-[830px]  animated-element"
              id="pong"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
