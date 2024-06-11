import React from "react";
import { news } from "./data.js";

const Contant = () => {
  const listItems = news.map((eiei) => (
    <div key={eiei.id} className="size-[450px] p-10 bg-blue-600">
      <p className="font-mitr text-white text-md w-4/5">{eiei.daTe}</p>
      <hr className="news mt-5 mb-5" />
      <h1 className="font-mitr font-semibold text-[#A7E6FF]">{eiei.title}</h1>
      <p className="mt-5 font-mitr text-gray-50 text-center">
        {eiei.description}
      </p>
    </div>
  ));
  return (
    <>
      <section id="contant">
        <div className="container mx-auto mb-10 relative">
          <div className="">
            <p className="font-mitr text-2xl text-white">ข่าวสาร</p>
            <hr />
            <div className="mt-5 flex flex-wrap justify-center gap-5">{listItems}</div>
          </div>
          <div className="flex flex-row-reverse mt-5">
            <button className="font-sans text-yellow-200 font-bold text-xl px-3 py-2 rounded-md">
              Read more
            </button>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Contant;

