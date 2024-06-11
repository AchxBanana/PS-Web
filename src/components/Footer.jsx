import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" py-3 bg-gray-900">
        <div className="container  my-auto mx-auto flex justify-center">
          <p className=" text-xs text-white font-ibm_thai font-semibold">
            &copy; {new Date().getFullYear()}<span className="text-blue-400 font-ibm_thai font-semibold"><a href="/"> โพธิสารพิทยากร</a></span>
          </p>

        </div>
      </div>
    </>
  );
}

export default Footer;
