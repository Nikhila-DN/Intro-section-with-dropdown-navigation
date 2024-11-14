import { useState, } from "react";
import desktop from "./images/image-hero-desktop.png";
import mobile from "./images/image-hero-mobile.png";
import audiophile from "./images/client-audiophile.svg";
import databiz from "./images/client-databiz.svg";
import maker from "./images/client-maker.svg";
import meet from "./images/client-meet.svg";
import logo from "./images/logo.svg";
import chevronDown from "./images/icon-arrow-down.svg";
import chevronUp from "./images/icon-arrow-up.svg";
import menuOpen from "./images/icon-menu.svg";
import closeMenu from "./images/icon-close-menu.svg";
import todo from "./images/icon-todo.svg";
import calendar from "./images/icon-calendar.svg";
import reminder from "./images/icon-reminders.svg";
import planning from "./images/icon-planning.svg";



function App() {
  const [openFeatures, setOpenFeatures]= useState(false);
  const [openCompany, setOpenCompany]= useState(false);

  const handleOpenMenu=() =>{
    const navbar=document.querySelector(".navbar");
    const menuButton=document.querySelector(".menu-button");
    navbar.classList.toggle("open");
    if(navbar.classList.contains("open")){
      menuButton.src=closeMenu;
    } else{
      menuButton.src=menuOpen;
    }
  }

  return (
    <>
      <header className="p-5 flex items-center justify-between">
        <div className="lg:flex lg:items-start lg:justify-start block">
          <img src={logo} alt="Logo" className="lg:mr-5"/>
          <nav className="navbar">
            <div>
              <button 
                onClick={()=> setOpenFeatures(!openFeatures)} 
                className="flex items-center justify-start">
                Features {" "}
                {openFeatures ? (
                  <img src={chevronUp} alt="" className="ml-2" />
                ) : (
                  <img src={chevronDown} alt="" className="ml-2" />
                )}
              </button>
              {openFeatures && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2text-sm mb-2">
                    <img src={todo} alt="icon-todo" className="mr-3"/>Todo List
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={calendar} alt="icon-calendar"className="mr-3"/>Calender
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={reminder} alt="icon-reminder"className="mr-3"/>Reminders
                  </li> 
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={planning} alt="icon-planning"className="mr-3"/>Planning
                  </li>
                </ul>
              )}
            </div>

            <div>
              <button 
                onClick={()=> setOpenCompany(!openCompany)} 
                className="flex items-center justify-start">
                Company {" "}
                {openCompany ? (
                  <img src={chevronUp} alt="" className="ml-2" />
                ) : (
                  <img src={chevronDown} alt="" className="ml-2" />
                )}
              </button>
              {openCompany &&  (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow"> 
                  <li className="flex items-center justify-start text-sm mb-2text-sm mb-2">
                    History
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Our Team
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Blog
                  </li> 
                </ul>
              )}
      
            </div>

            <div className="mb lg:mb-0"> 
              <button>Careers</button>
            </div>
            <div className="mb-2 lg:mb-0">
              <button>About</button>
            </div>

            <div className="lg:hidden block text-center ">
              <button className="mb-2 opacity-75">Login</button><br />
              <button className="border-2 w-full border-black opacity-75 px-6 py-2 rounded-2xl">Register</button>
            </div>

          </nav>
          

        </div>

        <div className="lg:hidden"> 
          <button onClick={handleOpenMenu}>
            <img src={menuOpen} alt="menu" className="menu-button"/>
          </button>
        </div>

        <div className="hidden lg:block ">
          <button className="mr-10 opacity-75">Login</button>
          <button className="border-2 border-black opacity-75 px-6 py-2 rounded-2xl">Register</button>
        </div>
      </header>

      <section className="flex flex-col-reverse py-20 md:grid grid-cols-1 md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto">

        <article className="text-center md:text-left px-5 lg:px-0 mt-10 md:mt-0">

          <h1 className="font-bold text-4xl lg:text-6xl mb-5 xl:text-7xl">Make remote work</h1>

          <p className="mb-5">
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
          </p>

          <button className="bg-black rounded-lg shadow text-white font-bold hover:opacity-75 hover:text-black hover:bg-white hover:border-black hover:border-2  transition-all duration-150 pt-3 pb-2 py-2 px-6 cursor-pointer">Learn More</button>

          <ul className="grid grid-cols-4 gap-1 mt-10 place-items-center md:place-items-starts">
            <li>
              <img src={databiz} alt="client-databitz" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={audiophile} alt="client-audiophile" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={meet} alt="client-neet" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={maker} alt="client-maker" className="w-16 md:w-24" />
            </li>
          </ul>

        </article>

        <article>
          <picture>
            <source media="(max-width:768px)" srcSet={desktop}/>
            <img src={mobile} alt="" className="w-full" />
            <source media="(max-width:480px)" srcSet={mobile}/>
          </picture>
        </article>

      </section>

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="">Nikhila</a>.
      </div>
    </>
  );
}

export default App;
