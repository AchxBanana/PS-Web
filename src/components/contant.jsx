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
        <div className="container mx-auto mt-36 mb-10 relative">
          <div>
            <p className="font-mitr text-2xl text-center text-white">
              รับสมัคร
            </p>
            <div className="flex flex-wrap gap-9 mt-5 justify-center">
              <div className="hover:scale-125 duration-300">
                <a href="#">
                  <img
                    src="https://www.ps.ac.th/psth/wp-content/uploads/2024/02/banner2567-001.png"
                    className="size-48 rounded-md shadow-gray-500"
                  />
                </a>
              </div>
              <div className="hover:scale-125 duration-300">
                <a href="#">
                  <img
                    src="https://www.ps.ac.th/psth/wp-content/uploads/2024/02/banner2567-002.png"
                    className="size-48 rounded-md shadow-gray-500"
                  />
                </a>
              </div>
              <div className="hover:scale-125 duration-300">
                <a href="#">
                  <img
                    src="https://www.ps.ac.th/psth/wp-content/uploads/2024/02/banner2567-03.png"
                    className="size-48 rounded-md shadow-gray-500"
                  />
                </a>
              </div>
              <div className="hover:scale-125 duration-300">
                <a href="#">
                  <img
                    src="https://www.ps.ac.th/psth/wp-content/uploads/2024/02/banner2567-04.png"
                    className="size-48 rounded-md shadow-gray-500"
                  />
                </a>
              </div>
              <div className="hover:scale-125 duration-300">
                <a href="#">
                  <img
                    src="https://www.ps.ac.th/psth/wp-content/uploads/2024/02/banner2567-05.png"
                    className="size-48 rounded-md shadow-gray-500"
                  />
                </a>
              </div>
              <div className="hover:scale-125 duration-300">
                <a href="#">
                  <img
                    src="https://www.ps.ac.th/psth/wp-content/uploads/2024/02/banner2567-06.png"
                    className="size-48 rounded-md shadow-gray-500"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="font-mitr text-2xl text-white">หลักสูตร</p>
            <hr />
            <div className="flex flex-wrap gap-9 mt-5 justify-center">
              <div className="hover:scale-125 duration-300">
                <a href="#">
                  <img
                    src="https://www.ps.ac.th/psth/wp-content/uploads/2023/12/%E0%B9%81%E0%B8%95%E0%B8%81%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%872567%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A-01-2048x2048.jpg"
                    className="size-96 rounded-md shadow-gray-500"
                  />
                </a>
              </div>
              <div className="hover:scale-125 duration-300">
                <a href="#">
                  <img
                    src="https://www.ps.ac.th/psth/wp-content/uploads/2024/02/banner2567-002.png"
                    className="size-96 rounded-md shadow-gray-500"
                  />
                </a>
              </div>
            </div>
          </div>
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

