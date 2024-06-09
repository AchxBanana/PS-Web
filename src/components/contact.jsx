import React, { useState, useEffect } from "react";
const Contact = () => {

    const [transformed, setTransformed] = useState(false);

    const handleClick = () => {
        setTransformed(!transformed);
    };

    return (
        <>
            <section id="contact" className="container mx-auto">
                <h1 className="mb-3 font-inter font-semibold text-2xl">Contact us</h1>
                <div className="flex  justify-between my-auto container mx-auto p-10 bg-gray-800 rounded-lg mb-10 h-72">
                    <div className="text-sm mt-2 w-96">
                        <h1 className="text-gray-100 text-lg underline font-inter font-semibold">Address</h1>
                        <p className=" text-white font-ibm_thai text-base font-semibold  mt-3">
                            โรงเรียนโพธิสารพิทยากร 120 ถนนพุทธมณฑลสาย 1 แขวงบางระมาด เขตตลิ่งชัน กรุงเทพมหานคร 10170 <br />
                            โทรศัพท์ (ส่วนกลาง) 02-4486130,<br />
                            02-4486931 (EP) 02-4487011 <br />
                            โทรสาร 02-4487108 <br />
                            Email : potisarn@ps.ac.th<br />
                        </p>
                    </div>
                    <div className="font-inter text-gray-600 font-semibold footerlink mt-52">
                        <ul className="flex uppercase">
                            <li className="hover:text-white">
                                <a href="https://youtu.be/dQw4w9WgXcQ?si=3p5P2PdIjfzYKNfz">facebook</a>
                            </li>
                            <li className="hover:text-white">
                                <a href="https://youtu.be/dQw4w9WgXcQ?si=3p5P2PdIjfzYKNfz">X</a>
                            </li>
                            <li className="hover:text-white">
                                <a href="https://youtu.be/dQw4w9WgXcQ?si=3p5P2PdIjfzYKNfz">Instagram</a>
                            </li>
                            <li className="hover:text-white">
                                <a href="https://youtu.be/dQw4w9WgXcQ?si=3p5P2PdIjfzYKNfz">Youtube</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Contact;