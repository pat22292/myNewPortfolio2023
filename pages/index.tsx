import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import axios from 'axios';
import { connect } from "react-redux"
import { setProducts, setSelectedProductsNull } from "../redux/actions/product"
import NavBar from "../Layouts/Navbar"
import PortfolioNav from '../components/portfolionav';
import Footer from "../Layouts/footer"
import Head from 'next/head';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { options } from 'next-auth/client';
import { useRouter } from 'next/router'
import { Example } from '../components/Example';
import { ExampleTwo } from '../components/ExampleTwo';
import { gsap } from "gsap";
import RoughEase from "gsap";
import { EasePack } from 'gsap-trial/src/all';

const DynamicTable = dynamic(() => import('../components/table'),
      { loading: () => <p>...</p> }
)
const spring = {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 10
};



function Home(props) {
      const router = useRouter();
      const threshold = 100;

      const [scrollY, setScrollY] = useState(0);
      const [typeStart, setTypeStart] = useState(false);
      var supportsWheel = false;
      const [count, setCount] = useState(1);

      function logit() {
            setScrollY(window.pageYOffset);
      };
      const words =
            [
                  {
                        id: 1,
                        text: "Hello! I'm Patrick.",
                        Image: <ExampleTwo />,
                  },
                  {
                        id: 2,
                        text: "How may I help you?",
                        Image: <Example />,

                  },
                  {
                        id: 3,
                        text: "Need a Developer?",
                        Image: <ExampleTwo />,

                  },
                  {
                        id: 4,
                        text: "or a Designer?",
                        Image: <Example />,
                  },
                  {
                        id: 5,
                        text: "Hello! I'm Patrick.",
                        Image: <ExampleTwo />,
                  }
            ];
      const word2 = ["Hi! I'm not \n Patrick.", "How may I \n help you?", "You need \n a Developer?", "or a  Designer?"];
      var cnt = 0;
      const container = {
            hidden: { opacity: 1, scale: 0 },
            visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                        delayChildren: 0.3,
                        staggerChildren: 0.2
                  }
            }
      };

      const item = {
            hidden: { y: 20, opacity: 0 },
            visible: {
                  y: 0,
                  opacity: 1
            }
      };
      let tl = gsap.timeline();
      let tl2 = gsap.timeline();
      let tl3 = gsap.timeline();
      const DoSomething = (e) => {


            if (e.type == "wheel") supportsWheel = true;
            else if (supportsWheel) return;

            var delta = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1;


            if (delta == 1) {
                  // setCount(0);

                  tl.play();
                  tl2.play();
                  // tl2.reverse();
                  // cnt < word2.length - 1 ? cnt += .15 : setTimeout(() => {
                  //       router.push('searchLocation')
                  // }, 700);;




            } else {
                  // cnt -= 1
                  // cnt = 0
                  // cnt != 0 ? cnt -= 1 : cnt = 0;
                  tl.reverse();
                  tl2.reverse();
                  // tl.play();
                  // tl2.play();

                  // setCount(1);

            }
            // tl3.restart();
            // console.log(id[0].innerHTML)
            // setCount(Math.round(cnt))



      }


      var xDown = null;
      var yDown = null;
      function getTouches(evt) {
            return (
                  evt.touches || // browser API
                  evt.originalEvent.touches
            ); // jQuery
      }
      function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
      }

      function handleTouchMove(evt) {
            if (!xDown || !yDown) {
                  return;
            }
            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;
            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                  /*most significant*/
                  if (xDiff > 0) {
                        tl.play();
                        setCount(0);
                        // //  document.getElementById("prevBtn").click();
                  } else {
                        //  document.getElementById("nextBtn").click();
                        tl.reverse();
                        setCount(1);
                  }
            } else {
                  if (yDiff > 0) {
                        //  document.getElementById("prevBtn").click();
                        tl.reverse();
                        setCount(1);
                  } else {
                        // document.getElementById("nextBtn").click();
                        tl.play();
                        setCount(0);
                  }
            }
            /* reset values */
            xDown = null;
            yDown = null;
      }



      //Create a custom bounce ease:



      useEffect(() => {

            document.addEventListener("wheel", DoSomething);
            document.addEventListener("touchstart", handleTouchStart, false);
            document.addEventListener("touchmove", handleTouchMove, false);
            var slides = document.querySelectorAll(".img-galleries");

            var id = document.getElementsByClassName('carousel-text');
            // 
            console.log(words.length);
            // console.log(id.innerText);
            // tl.fromTo('.img-galleries', { duration: 2.5, ease: "bounce.inOut", y: 500 }, { duration: 2.5, ease: "bounce.inOut", y: 0 }).addPause();

            for (var i = 1; i < words.length; i++) {


                  tl.add("intro")
                        .staggerFromTo(
                              `.slide-${i}`,
                              .25,

                              { autoAlpha: 1, },
                              { opacity: 0, ease: "power4.inOut" },
                              ".25"
                        )
                        .fromTo(
                              `.slide-${i + 1}`,
                              .25,
                              { opacity: 0 },
                              { autoAlpha: 1, ease: "power4.inOut" },
                              "intro",

                        )
                        .addPause();
            }
            for (var j = 1; j < words.length; j++) {



                  tl2.add("intro-text")
                        .staggerFromTo(
                              `.text-${j}`,
                              .75,

                              { display: "block", text: { value: `${words[j - 1].text}` } },
                              { text: { value: `` }, ease: "power4.inOut" },
                              .75
                        )
                        .fromTo(
                              ".text-" + (j + 1),
                              .75,
                              { text: { value: `` }, ease: "power4.inOut" },
                              { display: "block", text: { value: `${words[j].text}` }, ease: "power4.inOut" },
                              "intro-text"

                        )
                        // .to(".text-" + (i - 1), .5,
                        //       {
                        //             text: {
                        //                   value: `${document.getElementsByClassName(`text-${i}`)[0].innerHTML}`,
                        //             }
                        //       },


                        //       //  .5
                        // ).paused(true)



                        .addPause();
            }


            // console.log(slides.length);

            // tl3.to("#element", {
            //       duration: 1.25,
            //       text: {
            //             value: `${words[1].text}`,
            //       },
            //       delay: .5
            // }).paused(true);
      }, []);


      return (
            <div>

                  {/* <PortfolioNav /> */}
                  <div className="dark:bg-gray-800 overflow-hidden  place-items-center  md:flex  md:flex-row grid grid-cols-2  h-screen ">
                        <div className=' col-span-2 h-full md:h-screen w-screen flex  bg-white items-center align-middle text-center justify-center'>
                              {/* <button className=' px-6 py-2 text-white bg-minion-yellow' onClick={() => { count == word2.length - 1 ? router.push('/signin') : setCount(count + 1) }}>Add</button>
                              <h1>{count}</h1> */}
                              {words.map((title, index) => {
                                    return <div className={`fixed  bg-white img-galleries slide-${title.id}`} key={index} >



                                          {title.Image}
                                    </div>
                              })}
                        </div>

                        <div className='h-full col-span-2 w-screen md:h-screen left-shadow bg-light-steel-blue flex md:px-0  items-center   '>

                              <div className='md:-ml-32 absolute md:w-6/12   flex  items-center '>
                                    {/* <h1 className='typewriter-nl md:text-left text-center  custom-text-shadow text-rich-black-fogra md:text-9xl text-6xl md:font-bold font-extrabold leading-none  md:w-9/12  ' id='element'>{words[0].text}</h1> */}

                                    {words.map((title, index) => {

                                          return <h1 className={`hidden absolute w-1/2  md:text-left text-center custom-text-shadow text-rich-black-fogra md:text-9xl text-6xl md:font-bold font-extrabold leading-none   text-${title.id}`} key={index} ></h1>



                                    })}
                              </div>

                              {/* <h1 className='text-left custom-text-shadow text-rich-black-fogra text-9xl font-bold leading-none  -ml-64 mb-10 w-9/12 '>
                                    HI I'AM PATRICK
                              </h1> */}
                        </div >


                  </div >
            </div>

      )
}

const mapStateToProps = state => ({
      userInfo: state.main,
      error: state.main,
      product: state.product,
})

const mapDispatchToProps = {
      setProducts: setProducts,
      setSelectedProductsNull: setSelectedProductsNull
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)