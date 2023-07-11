import React from 'react';
import roof from './images/roof.jpg';
import elden from './images/elden.png';
import collatz from './images/collatz.png';
import handdrawn from './images/handwritten.png'
import portrait from './images/portrait.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faUser, faClipboard, faLaptopFile, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Card from './Components/Card';
import BasicTabs from '../src/Tabs/BasicTabs.js';
// import ColorTabs from '../src/Tabs/ColoredTabs.js';
import MobileTabs from './Tabs/MobileTabs';
import P5Sketch from './Components/TreeDrawing';

import './App.css';
import './CSS/About.css';
import './CSS/Work.css';
import './CSS/Portfolio.css';
import './CSS/Mobile.css';
import './CSS/Home.css';
import './CSS/Buttons.css';
import './CSS/Typewriter.scss';
import './CSS/Card.css';
import './CSS/tester.scss';

import { useEffect } from 'react';
import Resume from '../src/images/BloomingtonResume.pdf';
import Car from '../src/images/car.jpg'

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          } else {
              entry.target.classList.remove('show');
          }
      }); 
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  // useEffect(() => {
  //   function sleep(ms) {
  //     return new Promise((resolve) => setTimeout(resolve, ms));
  //   }
    
  //   const phrases = ['developer', 'skater', 'math geek'];
  //   const el = document.getElementById("typewriter");
    
  //   // let sleepTime = 100;
    
  //   let curPhraseIndex = 0;
    
  //   const writeLoop = async () => {
  //     while (true) {
  //       let curWord = phrases[curPhraseIndex];
  //       console.log(curWord);
    
  //       const typingSpeed = 100;
  //       const waitTime = 1000;
  //       const deletingSpeed = 100;
    
  //       for (let i = 0; i < curWord.length; i++) {
  //         el.innerText = curWord.substring(0, i + 1);
  //         await sleep(typingSpeed);
  //       }
    
  //       await sleep(waitTime);
    
  //       for (let i = curWord.length; i > 0; i--) {
  //         el.innerText = curWord.substring(0, i - 1);
  //         await sleep(deletingSpeed);
  //       }
    
  //       await sleep(waitTime);
    
  //       if (curPhraseIndex === phrases.length - 1) {
  //         curPhraseIndex = 0;
  //       } else {
  //         curPhraseIndex++;
  //       }
  //     }
  //   };
    
  //   writeLoop();
  // }, []);

  useEffect(() => {
    const typewriter_text = document.getElementById("typing_text");
    const open_menu_icon = document.getElementById('open_menu');
    const close_menu_icon = document.getElementById('close_menu');
    const home_li = document.getElementById('home_li');
    const about_li = document.getElementById('about_li');
    const work_li = document.getElementById('work_li');
    const portfolio_li = document.getElementById('portfolio_li');

    let open_menu = async () => {
      typewriter_text.style.display = 'none';
    }

    let close_menu = async () => {
      typewriter_text.style.display = 'flex';
    }

    open_menu_icon.addEventListener('click', open_menu);
    close_menu_icon.addEventListener('click', close_menu);
    home_li.addEventListener('click', close_menu);
    about_li.addEventListener('click', close_menu);
    work_li.addEventListener('click', close_menu);
    portfolio_li.addEventListener('click', close_menu);
  }, []);


  useEffect(() => {
    const checked_thing = document.getElementById('check');
    const home_li = document.getElementById('home_li');
    const about_li = document.getElementById('about_li');
    const work_li = document.getElementById('work_li');
    const portfolio_li = document.getElementById('portfolio_li');

    let close_menu = async () => {
      checked_thing.checked = false;
    }

    home_li.addEventListener('click', close_menu);
    about_li.addEventListener('click', close_menu);
    work_li.addEventListener('click', close_menu);
    portfolio_li.addEventListener('click', close_menu);
  }, []);

  return (
    
      <div className="App">
        
        <div className='home' id='home'>

          <picture>
            <source media='(orientation: landscape)' srcSet={roof}></source>
            <source media='(orientation: portrait)' srcSet={portrait}></source>

            <img className='roof_pic' src={roof} alt='roof' height="auto"></img>
          </picture>

          {/* <div className='pic_text_wrapper' id='typing_text'>
            <h1>Hey, I'm Tyler<br /> I'm a <span id="typewriter"></span><span id="cursor">|</span>  </h1>
          </div> */}
          <div className='pic_text_wrapper' id='typing_text'>
            <h1>Hey, I'm Tyler <br /> I'm a <span className='typed'></span></h1>
            {/* <P5Sketch className="test_style" /> */}
          </div>


          

        </div>
        
        <div className='color_setter'>

          <section className='hidden'>

            <div className='about' id='about'>

              <div className='header_styler'>
                <h1 className='stroke_text'>/About me</h1>
              </div>


              <div className='wrappingimage'>
                <img src={Car} alt='abt_pic' className='abt_picture'></img>
              </div>
              <p className='abt_text'>I am currently an Undergraduate Research Assistant at the Illinois Geometry Lab, working with Radu's Algorithm as it relates to combinatorics. At the same time, I am pursuing a full-time Bachelor's of Science in Computer Science and Mathematics at the University of Illinois at Urbana-Champaign.

              Here are some technologies I have been working with:
              <ul>
                <li className='about_bullets'>Javascript ES6+</li>
                <li className='about_bullets'>Python</li>
                <li className='about_bullets'>React.js</li>
                <li className='about_bullets'>Java</li>
                <li className='about_bullets'>Node.js</li>
                <li className='about_bullets'>HTML & CSS</li>
              </ul>
              
  Outside of school, I'm interested in following the developments of science, and reading a lot of comics. You might also find me filling up my Github with personal projects</p>
            </div>
          </section>


          <section className='hidden'>
            <div className='skills' id='skills'>
              <h1 className='stroke_text'>/Work</h1>

              {/* <div className='swiper_wrapper' style={{ height: "50vh", position: "relative" }}>


                <Swiper
                  navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled"
                  }}
                  pagination={{ clickable: true }}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                >
                    <div className="swiper-button image-swiper-button-next">
                      <IoIosArrowForward />
                    </div>
                    <div className="swiper-button image-swiper-button-prev">
                      <IoIosArrowBack />
                    </div>
                  <SwiperSlide className="swiper_slide">
                    <div className='slide'>
                      <h1 className='tester_header'>CS 128 Course Assistant</h1>
                      <ul className='first_list_header'>
                        <li className='first_bullet_point'>Developed a grade management system with JavaScript that calculated class grades for the entire course</li>
                        <li className='first_bullet_point'>Helped to develop and draft the prompts for course material that explained foundational CS concepts</li>
                        <li className='first_bullet_point'>Hosted and coordinated multiple office hours every week</li>
                      </ul>
                    </div>

                  </SwiperSlide>
                  <SwiperSlide className="swiper_slide">
                    <div className='slide'>
                      <h1 className='tester_header'>CS 173 Course Assistant</h1>
                      <ul className='second_list_header'>
                        <li className='second_bullet_point'>Created tutoring approach that best fit each students' learning style</li>
                        <li className='second_bullet_point'>Assess and troubleshoot conceptual misunderstandings brought by students</li>
                        <li className='second_bullet_point'>Led large gatherings of the class where new material was learned and practiced</li>
                        <li className='second_bullet_point'>Developed content that was used by the entire class</li>
                      </ul>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div> */}

              <div id='desktop_tabs'>
                <BasicTabs />
              </div>

              <div id='mobile_tabs'>
                <MobileTabs />
              </div>

            </div>
          </section>

          <section className='hidden'>
            <div className='portfolio' id='portfolio'>

              <h1 className='stroke_text' id='portfolio_text'>/Portfolio</h1>

              <div className='desktop_card_wrapper'>
                <Card image_test={collatz} title="Collatz Visualization" description="A matplotlib recreation of the visualization developed by Edmund-Harris to model the Collatz Conjecture" languages="Python, Matplotlib, Numpy, PySimpleGUI" github="https://github.com/zuyouchen/225-final-proj" image_link="https://imgur.com/a/Oi5BALj"/>
                <Card image_test={elden} title="Elden Ring Speedrun Optimizer" description="A modified implementation of Djikstra's to calculate the fastest route through the popular game Elden Ring" languages="Python, C++, numpy, Matplotlib" github="https://github.com/zuyouchen/225-final-proj" image_link="https://imgur.com/ie9yTYX" />
                <Card image_test={handdrawn} title="Handwritten Digit Recognition" description="A modified implementation of Djikstra's to calculate the fastest route through the popular game Elden Ring" languages="Python, C++, numpy, Matplotlib" github="https://github.com/zuyouchen/225-final-proj" image_link="https://imgur.com/vsed9tE" />
              </div>

            </div>
          </section>

          <div className='wrapper'>

            <a href='#about'>
              <div className='button' id='about_button'>
                <a href='#about'><div className='icon'><FontAwesomeIcon icon={faUser} /></div></a>
                <span>About</span>
              </div>
            </a>

            <a href='#skills'>
              <div className='button' id='skills_button'>
                <a href='#skills'><div className='icon'><FontAwesomeIcon icon={faClipboard} /></div></a>
                <span>Work</span>
              </div>
            </a>

            <a href='#portfolio'>
              <div className='button'>
                <a href='#portfolio'><div className='icon'><FontAwesomeIcon icon={faLaptopFile} /></div></a>
                <span>Projects</span>
              </div>
            </a>

            <a href = {Resume} target='_blank' rel="noreferrer">
              <div className='button'>
                <a href = {Resume} rel="noreferrer"><div className='icon'><FontAwesomeIcon icon={faFilePdf} /></div></a>
                <span>Resume</span>
              </div>
            </a>

          </div>
            
          <footer className='bottom_thing'>
            <a href='#home'><button className='footer_button'>Top</button></a>
          </footer>
        </div>

        <div className='mobile_nav' id='menu_nav'>
          <nav>
            <ul class="nav-bar">
                <input type="checkbox" id="check"></input>
                <span class="menu">
                    <li className='hamburger_point' id='home_li'><a href="#home">Home</a></li>
                    <li className='hamburger_point' id='about_li'><a href='#about'>About</a></li>
                    <li className='hamburger_point' id='work_li'><a href='#skills'>Work</a></li>
                    <li className='hamburger_point' id='portfolio_li'><a href='#portfolio'>Portfolio</a></li>
                    <li className='hamburger_point'><a href={Resume} target='_blank' rel="noreferrer">Resume</a></li>
                    <label for="check" class="close-menu" id='close_menu'><FontAwesomeIcon icon={faX} className='close_icon' /></label>
                </span>
                <label for="check" class="open-menu" id='open_menu'><FontAwesomeIcon icon={faBars} className='open_icon' /></label>
            </ul>
          </nav>
        </div>



      </div>
  );
}

export default App;
