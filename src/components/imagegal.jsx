const Imagegal = () => {
  return (
    <>
      <h1 className="container mx-auto font-bold text-2xl text-white">Potisarn Gallery</h1>
      <div className="container w-1/2 h-1/2 mx-auto grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div className="">
          <img className="inset-0 w-full h-full object-cover rounded-md hover:transform hover:scale-110 hover:-rotate-6 duration-200" src="https://www.ps.ac.th/psth/wp-content/uploads/2022/01/Building1-119.jpg" alt="" loading="lazy" />
        </div>
        <div className="col-start-3 ">
          <img className="w-full h-1/2 object-cover rounded-md hover:transform hover:scale-75 hover:-rotate-12 duration-200" src="https://www.ps.ac.th/psth/wp-content/uploads/2022/01/Building-18.jpg" alt="" loading="lazy" />
        </div>
        <div className="" >
          <img className="w-full h-1/2 object-cover rounded-md hover:transform hover:scale-110 hover:-rotate-12 duration-200" src="https://www.ps.ac.th/psth/wp-content/uploads/2022/01/Building1-141-scaled.jpg" alt="" loading="lazy" />
        </div>
        <div className="">
          <img className="w-full h-1/2 rounded-md object-cover hover:transform hover:scale-110 hover:rotate-12 hover:translate-y-12 duration-200" src="https://www.ps.ac.th/psth/wp-content/uploads/2022/01/Building4-67.jpg" alt="" loading="lazy" />
        </div>
        <div className="row-start-1 col-start-2 col-span-2 ">
          <img className="w-full h-full object-cover rounded-md hover:transform hover:scale-75 hover:rotate-6 hover:translate-x-2 hover:translate-y-15 duration-200" src="https://www.ps.ac.th/psth/wp-content/uploads/2022/01/Building3-14.jpg" alt="" loading="lazy" />
        </div>
      </div>
    </>
  )
}

export default Imagegal;
