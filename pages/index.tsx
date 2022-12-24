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
      var supportsWheel = false;
      const [count, setCount] = useState(0);

      function logit() {
            setScrollY(window.pageYOffset);
      };
      const words = ["Hi! I'm \n Patrick.", "How may I \n help you?", "Need \n a Developer?", "Need a \n Designer?"];
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
      const DoSomething = (e) => {

            if (e.type == "wheel") supportsWheel = true;
            else if (supportsWheel) return;

            var delta = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1;


            if (delta == 1) {
                  // cnt += 1;

                  cnt < word2.length - 1 ? cnt += .15 : setTimeout(() => {
                        router.push('searchLocation')
                  }, 700);;




            } else {
                  // cnt -= 1
                  cnt = 0
                  // cnt != 0 ? cnt -= 1 : cnt = 0;



            }

            setCount(Math.round(cnt))
            console.log(cnt);


      }

      useEffect(() => {
            setCount(0);
            cnt = 0;
            document.addEventListener("wheel", DoSomething);
      }, []);


      return (
            <div>

                  {/* <PortfolioNav /> */}
                  <div className="dark:bg-gray-800 overflow-hidden  place-items-center  md:flex">
                        <div className='  md:h-screen w-screen flex  bg-white items-center align-middle text-center justify-center'>
                              {/* <button className=' px-6 py-2 text-white bg-minion-yellow' onClick={() => { count == word2.length - 1 ? router.push('/signin') : setCount(count + 1) }}>Add</button>
                              <h1>{count}</h1> */}
                              <Example />
                        </div>

                        <div className='left-shadow w-8/12 flex md:px-0 px-11  h-screen justify-center items-center  md:bg-light-steel-blue '>

                              <div className='w-full md:-ml-64   mb-10  text-left'>
                                    <Typewriter

                                          options={{
                                                wrapperClassName: "typewriter-nl md:text-left text-center custom-text-shadow text-rich-black-fogra md:text-9xl text-6xl font-bold leading-none w-full mb-10 md:w-9/12  mb-10",
                                                cursorClassName: "typewriter-nl blinking-cursor md:text-left text-center  text-rich-black-fogra md:text-9xl text-6xl font-thin leading-none  mb-10 w-9/12",
                                                strings: words[count],
                                                autoStart: true,
                                                // loop: true,
                                                deleteSpeed: .1,
                                                delay: 40
                                          }}

                                    // onInit={(typewriter) => {


                                    //       typewriter.typeString(" HI I'AM PATRICK")

                                    //             .callFunction(() => {
                                    //                   console.log('String typed out!');
                                    //             })

                                    //             .callFunction(() => {
                                    //                   console.log('All strings were deleted');
                                    //             })
                                    //             .deleteAll()
                                    //             .start()
                                    //             ;
                                    // }}
                                    />

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