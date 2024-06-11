import React from 'react';

const Course = () => {
  return(
  <>
    <section id="course">
      <div className="container mx-auto relative">
                <div className="mt-10">
            <p className="font-mitr text-2xl text-white">หลักสูตร</p>
            <hr />
            <div className="flex flex-wrap gap-9 mt-5 justify-center">
              <div className="hover:animate-spin">
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
                    src="https://www.ps.ac.th/psth/wp-content/uploads/2022/02/allplan1-01-2048x2048.jpg"
                    className="size-96 rounded-md shadow-gray-500"
                  />
                </a>
              </div>
            </div>
          </div>  
      </div>
    </section>
  </>
  )
}

export default Course;
