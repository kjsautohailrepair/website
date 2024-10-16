// import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import compVidHero from "../../assets/comp_vid_hero.webm";
import compVidHeroTwo from "../../assets/comp_vid_hero_two.mp4";
import heroHome from "../../assets/hero_home.webp";
import { useEffect, useRef } from "react";

const Hero = () => {
  // const videoRef = useRef();

  // useEffect(() => {
  //   videoRef.current.play();
  // }, []);

  // return (
  //     <>
  //         <div className="relative  bg-hero_bg min-h-[700px] bg-cover rounded-br-[30%] bg-center">
  //             <NavBar />

  //             <div className="w-11/12 mx-auto px-3 h-[600px] text-white  flex justify-center items-start flex-col max-w-[1700px] ">
  //                 <h1 className="text-7xl text-center font-semibold sm:text-6xl xsm:text-5xl">KJS Auto Hail Repair
  //                 </h1>
  //                 <h2 className="text-4xl text-center mt-6 xsm:text-3xl">

  //                     Your Trusted Source for Hail Damage Solutions
  //                 </h2>

  //                 <Link to={"https://calendar.app.google/Kvq2tb5sNKmrq6su9"} className="w-56 call_to_action h-12 md:mx-auto flex justify-center items-center  mt-5 rounded-lg bg-[#f79f24] font-semibold text-white">Call us Today!!</Link>
  //             </div>

  //         </div>
  //     </>
  // )
  return (
    <div className="relative bg-black min-h-[700px] bg-cover bg-center rounded-br-[30%]">
      {/* Video Background */}
      {/* <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover bg-cover bg-center rounded-br-[30%]" playsInline autoPlay muted>
            <source src={compVidHero} type="video/webm" />
            <source src={compVidHeroTwo} type="video/mp4" />
          </video> */}

      <img
        src={heroHome}
        alt="Hail repair in progress"
        className="absolute top-0 left-0 w-full h-full object-cover bg-cover bg-center rounded-br-[30%] bg-opacity-75"
        loading="lazy"
      />

      {/* Content Overlay */}
      <div className="relative z-10 text-white">
        {/* Navigation Bar */}
        <NavBar />

        <div className="container mx-auto p-4 h-[600px] flex flex-col justify-center items-center">
          <h1 className="text-7xl text-center font-semibold sm:text-6xl xsm:text-5xl">
            KJS Auto Hail Repair
          </h1>
          <h2 className="text-4xl text-center mt-6 xsm:text-3xl">
            Your Trusted Source for Auto Hail Repair Solutions
          </h2>
          <div className="mt-10 flex justify-center items-center">
          <button
            className="flex justify-center items-center w-56 call_to_action h-12 mt-5 rounded-lg bg-[#f79f24] font-semibold text-white"
            onClick={() => window.location.href = 'tel:720-928-6680'}
          >
            Call us Today!
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
