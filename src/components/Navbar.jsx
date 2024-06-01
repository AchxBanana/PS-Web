const Navbar = () => {
  return(
    <nav className="flex p-3 bg-slate-300 font-inter font-semibold">
      <a className="transition ease-in-out delay-150 hover:-translate-2 hover:scale-125 duration-300" href='#'>
         <img className="h-14" src="SHITSCHOOL.png"/>
      </a>
      <ul className="flex p-2 mt-2 gap-2">
        <li>
          <a className="rounded-md p-2 hover:bg-slate-800 hover:text-slate-200" href='#'>About</a>
        </li>
        <li>
          <a className="rounded-md p-2 hover:bg-slate-800 hover:text-slate-200" href='#'>Course</a>
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
    </nav>
  )
}

export default Navbar;
