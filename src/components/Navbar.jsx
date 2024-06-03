import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
        <nav className="p-2 bg-zinc-300 font-inter font-semibold">
          <div className="mx-auto flex flex-wrap items-center justify-between">
            <a className="transition ease-in-out delay-150 hover:-translate-2 hover:scale-125 duration-300" href='/'>
              <img className="h-14" src="SHITSCHOOL.png"/>
            </a>
            <ul className="flex p-2 mt-2 gap-2 flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a className="rounded-md p-2 font-mitr font-normal hover:bg-slate-800 hover:text-slate-200" href='#'>เกี่ยวกับสถานศึกษา</a>
              </li>
              <li>
                <a className="rounded-md p-2 font-mitr font-normal hover:bg-slate-800 hover:text-slate-200" href='#'>หลักสูตร</a>
              </li>
              <li>
                <a className="rounded-md p-2 hover:bg-slate-800 hover:text-slate-200" href='#'>Contacts</a>
              </li>
              <li>
                <a className="rounded-md p-2 hover:bg-slate-800 hover:text-slate-200" href='#'>Services System</a>
              </li>
              <li>
                <a className="rounded-md p-2 hover:bg-slate-800 hover:text-slate-200" href='#'>ITA</a>
              </li>
            </ul>
          </div>
        </nav>
    
  )
}

export default Navbar;
