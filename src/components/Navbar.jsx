import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="p-2 bg-zinc-300 font-inter font-semibold">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href='/'>
            <img className="h-14" src="SHITSCHOOL.png"/>
          </a>
          <ul className="flex p-2 mt-2 gap-2 flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a className="rounded-md p-2 font-mitr font-normal hover:bg-slate-800 hover:text-slate-200 transition duration-300" href='#'>เกี่ยวกับสถานศึกษา</a>
            </li>
            <li>
              <a className="rounded-md p-2 font-mitr font-normal hover:bg-slate-800 hover:text-slate-200 transition duration-300" href='#'>หลักสูตร</a>
            </li>
            <li>
              <a className="rounded-md p-2 hover:bg-slate-800 hover:text-slate-200 transition duration-300" href='#'>Contacts</a>
            </li>
            <li className="relative">
              <a
                className="rounded-md p-2 hover:bg-slate-800 hover:text-slate-200 transition duration-300"
                href='#'
                onMouseOver={toggleDropdown}
                onMouseOut={toggleDropdown}
              >
                Services System
              </a>
              <ul
                id="services-dropdown"
                className={
                  dropdownOpen
                    ? 'absolute bg-white rounded-md shadow-lg py-2 space-y-2 z-10'
                    : 'hidden'
                }
              >
                <li>
                  <a
                    className="rounded-md p-2 font-mitr font-normal hover:bg-slate-700 hover:text-slate-300 transition duration-300"
                    href='#'
                  >
                    Service 1
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-md p-2 font-mitr font-normal hover:bg-slate-700 hover:text-slate-300 transition duration-300"
                    href='#'
                  >
                    Service 2
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-md p-2 font-mitr font-normal hover:bg-slate-700 hover:text-slate-300 transition duration-300"
                    href='#'
                  >
                    Service 3
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="rounded-md p-2 hover:bg-slate-800 hover:text-slate-200 transition duration-300" href='#'>ITA</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
