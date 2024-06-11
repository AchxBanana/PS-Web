import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


export default function Navbar() {

  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 1) {
        setStickyClass('fixed top-0 left-0 z-50 transition duration-500 ease-in-out');
      } else {
        setStickyClass('relative transition duration-500 ease-in-out');
      }
    }
  };

  return (
    <div className={`h-16 w-full bg-gray-200 ${stickyClass}`}>
      <nav className="p-2 bg-zinc-300 font-inter font-semibold">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href="/">
            <img className="h-14" src="SHITSCHOOL.png" />
          </a>
          <ul className="flex p-2 mt-2 gap-2 flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a className="rounded-md p-2 font-ibm_thai  hover:text-slate-600 transition duration-300 font-medium" href='#'>เกี่ยวกับสถานศึกษา</a>
            </li>
            <li>
              <a className="rounded-md p-2 font-ibm_thai font-bold hover:text-slate-600 transition duration-300" href='#contant'>หลักสูตร</a>
            </li>
            <li>
              <a className="rounded-md p-2 hover:text-slate-600 transition duration-300" href='#contact'>Contacts</a>
            </li>
            <li className="">
              <div className="dropdown inline-block relative font-inter">
                <button className="font-semibold rounded inline-flex items-center">
                  <span className="mr-1 hover:text-slate-600 transition duration-300">Services System</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </button>
                <ul className="dropdown-menu justify-center absolute hidden text-gray-700 pt-1">
                  <li><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/Service1">Service 1</a></li>
                  <li><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/Service2">Service 2</a></li>
                  <li><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/Service3">Service 3</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a className="rounded-md p-2 hover:text-slate-600 transition duration-300" href='#'>ITA</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
