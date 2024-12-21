// import { title } from 'process'
import React from 'react'
import { projects } from  "@/data/index"
import { PinContainer } from './ui/PinContainer'
import { FaLocationArrow } from 'react-icons/fa6'
import Image from 'next/image'
function RecentProjects() {
  return (
    <div id='projects' className='py-20'>
        <h1 className="heading">
            A small selection of { ' '}
            <span className='text-purple'>
                recent projects
            </span>
        </h1>
        <div className='flex flex-wrap items-center justify-center  p-4 gap-16 mt-10'>
          {/* Projects displaying */}
            {projects.map(({id,title,des,img,iconLists,link})=>(
          //  <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 '>
          <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center  justify-center  sm:w-[570px] w-[80vw] '>
         
          {/* </div> */}

          <PinContainer
              title="Ping me"
              href="https://www.linkedin.com/in/tomson-repalle/"
              // href="www.google.com"
            >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh]     overflow-hidden h-[30vh]  mb-10 ">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="Image" />
                </div>
                <Image
                  src={img}
                  alt="cover"
                  className="z-10 absolute w-90 px-[70px] mt-11 bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
                <h1>jfndjfn</h1>
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                 <div className="flex items-center"> 
                  {/* {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))} */}
                </div>  

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow />
                </div>
              </div>
            </PinContainer>
                    </div>
                ))}
        </div>
        </div>
      
  )
}

export default RecentProjects