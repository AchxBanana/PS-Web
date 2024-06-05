import { TypeAnimation } from 'react-type-animation';


const Header = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between ml-10 mr-10">
          <div className=" mt-10 ">
            <h1 className="text-6xl text-blue-600 font-kola animated-font">Welcome TO PS</h1>
            <TypeAnimation 
              sequence={[
              'Possibility Shit School'
              ]}
              className="text-2xl text-pink-500 font-cus"
            />
          {/* <h1 className="text-2xl text-pink-500 font-cus animated-font">Possibility Shit School</h1> */}
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
}

export default Header;
