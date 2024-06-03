const Header = () => {
  return (
    <>
      <div className="flex justify-between ml-10 mr-10">
        <div className=" mt-10 ">
          <h1 className="text-6xl text-blue-600 font-kola animated-font">Welcome TO PS</h1>
          <h1 className="text-2xl text-pink-500 font-cus animated-font">Possibility Shit School</h1>
        </div>
        <div>
          <img
            src="pong.png"
            className="h-[880px]  animated-element"
            id="pong"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
