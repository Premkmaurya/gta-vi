import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';


const App = () => {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOUt",
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "expo.inOut",
        opacity: 0,
        transformOrigin: "50% 50%",
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector('.svg').remove();
            setShowContent(true);
            this.kill();
          }
        }
      })
  })
  useGSAP(() => {
    if(!showContent) return;

    gsap.to('.main',{
      scale:1,
      rotate:0,
      duration:2,
      delay:'-1',
      ease:"Expo.easeInOut",
    })
    gsap.to('.sky',{
      scale:1.2,
      rotate:0,
      duration:2,
      delay:'-1',
      ease:"Expo.easeInOut",
    })
    gsap.to('.bg',{
      scale:1.3,
      rotate:0,
      duration:2,
      delay:'-1.2',
      ease:"Expo.easeInOut",
    })
    gsap.to('.character',{
      scale:0.6,
      x:"-50%",
      rotate:0,
      duration:2,
      delay:'-1.2',
      ease:"Expo.easeInOut",
    })
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imageDiv .text", {
        x: `${xMove * 0.5}%`
      })
      gsap.to(".sky", {
        x: xMove
      })
      gsap.to(".bg", {
        x: xMove
      })
    })
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && <div className='main w-full bg-black rotate-[-10deg] scale-[1.7]'>
        <div className='landing relative w-full h-screen bg-black'>
          <div className='navbar absolute text-white top-0 left-0 z-[120] w-full py-8 px-8'>
            <div className='logo flex gap-7 items-center'>
              <div className='lines flex flex-col gap-2'>
                <div className='leading-none line w-15 h-1 bg-white'></div>
                <div className='leading-none line w-8 h-1 bg-white'></div>
                <div className='leading-none line w-4 h-1 bg-white'></div>
              </div>
              <h3 className='text-4xl -mt-[12px]'>Rockstar</h3>
            </div>
          </div>

          <div className='imageDiv overflow-hidden relative w-full h-screen'>
            <img
              className='sky absolute scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover'
              src="./sky.png"
              alt=""
            />
            <img
              className='bg absolute scale-[1.8] rotate-[-25deg] top-0 left-0 w-full h-full object-cover'
              src="./bg.png"
              alt=""
            />
            <div className='text text-white flex flex-col gap-2 absolute top-10 left-1/2'>
              <h1 className='text-8xl leading-none -ml-30'>grand</h1>
              <h1 className='text-8xl leading-none -ml-10'>theft</h1>
              <h1 className='text-8xl leading-none -ml-50'>auto</h1>
            </div>
            <img
              className='character absolute scale-2 rotate-[-10deg] left-1/2 -translate-x-[50%] scale-[0.7]'
              src="./girlbg.png"
              alt=""
            />
          </div>
          <div className='btmbr absolute text-white bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent'>
            <div className='flex gap-4 items-center'>
              <i class="ri-arrow-down-line text-xl"></i>
              <h3 className='text-2xl font-ligth -mt-[5px]'>Scroll Down</h3>
            </div>
            <img
              className='h-[55px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              src="./ps5.png"
              alt=""
            />
          </div>
        </div>
        <div className='w-full overflow-hidden h-screen flex items-center justify-center bg-black'>
          <div className="container flex text-white w-full h-[80%]">
            <div className='limg relative h-full w-1/2'>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
            </div>
            <div className="rg w-[30%]">
              <h1 className='text-7xl'>Still Runnig</h1>
              <h1 className='text-7xl'>Not Hunting</h1>
              <p className='mt-10 text-xl font-sans text-bold'>
                Lorem ipsum dolor sit amet consectetur, adipisicing el Lorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.
              </p>
              <p className='mt-3 font-sans text-bold'>
                Lorem ipsum dolor sit amet corro itaque ipsa repellendus quam placeat rem consequatur nobis debitis dolore nec
              </p>
              <button className='bg-green-400 px-5 py-4 text-black mt-[10%] ml-[25%]'>Registor Now</button>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default App
