const Header = () => {
  return(
    <div className="flex">
      <div className="ml-20 mt-10">
        <h1 className="text-6xl text-blue-600 font-kola animated-font">Welcome TO PS</h1>
        <h1 className="text-2xl text-pink-500 font-cus animated-font">Possibility Shit School</h1>
      </div>
      <div className="ml-2 p-2">
        <img
          src="pong.png"
          className="h-48 animated-element ml-[210%] md:h-auto md:ml-[100%] lg:h-[830px] lg:ml-[230%]"
          id="pong"
        />
      </div>
      <div className="text-center mx-auto mt-10">
        <h1 className="text-gray-200 text-5xl font-bold mb-[210px]">Potisarn School</h1>
      </div>
    </div>
  );
}

export default Header;
