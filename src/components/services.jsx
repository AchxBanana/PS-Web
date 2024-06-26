import { IoSchoolSharp } from "react-icons/io5";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
const Services = () => {
  return (
    <>
      <div> 
        <p className="text-white font-mitr text-2xl text-center mb-4">ระบบริการครู/นักเรียน</p>
        <div className="flex justify-center gap-5">
          <a className="" href="#"><IoSchoolSharp color="white" className="size-16 p-3 bg-blue-500 rounded-full mb-4" /></a>
          <a href="#"><PiChalkboardTeacherBold color="white" className="size-16 p-3 bg-pink-500 rounded-full mb-4" /></a>
          <a href="#"><FaBookOpenReader color="white" className="size-16 p-3 bg-orange-500 rounded-full mb-4" /></a>
          <a href="#"><FaMoneyBillAlt color="white" className="size-16 p-3 bg-yellow-500 rounded-full mb-4" /></a>
        </div>
      </div>
    </>
  )
}

export default Services;
