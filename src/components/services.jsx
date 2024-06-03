import { IoSchoolSharp } from "react-icons/io5";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
const Services = () =>{
  return(
    <>
      <div className="flex justify-center gap-5 mt-10">
        <a className="" href="#"><IoSchoolSharp color="white" className="h-12 w-12 p-3 bg-blue-500 rounded-full mb-4"/></a>
        <a href="#"><PiChalkboardTeacherBold color="white" className="h-12 w-12 p-3 bg-pink-500 rounded-full mb-4"/></a>
        <a href="#"><FaBookOpenReader color="white" className="h-12 w-12 p-3 bg-pink-500 rounded-full mb-4"/></a>
        <a href="#"><FaMoneyBillAlt color="white" className="h-12 w-12 p-3 bg-pink-500 rounded-full mb-4"/></a>
      </div>
    </>
  )
}

export default Services;
