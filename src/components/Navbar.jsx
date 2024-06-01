const Navbar = () => {
  return(
    <nav className="flex bg-slate-300 p-3 font-inter font-semibold">
      <a className="transition ease-in-out delay-150 hover:-translate-2 hover:scale-125 duration-300" href='#'>
         <img className="h-14" src="SHITSCHOOL.png"/>
      </a>
      <ul className="flex p-2">
        <li className="rounded-md p-2 hover:bg-slate-800 hover:text-slate-200">
          <a href='#'>About</a>
        </li>
        <li className="rounded-md p-2 hover:bg-slate-800 hover:text-slate-200">
          <a href='#'>Course</a>
        </li>
        <li className="rounded-md p-2 hover:bg-slate-800 hover:text-slate-200">
          <a href='#'>Contacts</a>
        </li>
        <li className="rounded-md p-2 hover:bg-slate-800 hover:text-slate-200">
          <a href='#'>Services System</a>
        </li>
        <li className="rounded-md p-2 hover:bg-slate-800 hover:text-slate-200">
          <a href='#'>ITA</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
