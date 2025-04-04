import { BsFacebook, BsMailbox2 } from "react-icons/bs";
import Logo from "../../assets/FooterLogo.webp";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaInstagram, FaTwitter, FaMapMarkedAlt } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import { MdEmail } from 'react-icons/md';
const Footer = () => {
    return (
        <>

            <footer className="bg-gray-200 py-5 ">
                <div className="flex justify-evenly items-start gap-x-4 mx-auto  flex-wrap px-3 sm:flex-col sm:items-start max-w-[1700px]">
                    <div className="flex justify-center flex-col sm:items-start">

                        <img src={Logo} alt="Footer logo" className="w-4/12 h-20  object-contain" loading='lazy'/>
                        <p className="w-[300px] sm:w-9/12">Your Trusted Source for Hail Damage Solutions.</p>
                    </div>
                    <div className="pt-4">
                        <h4 className=" font-semibold mb-4">Helpful Links</h4>
                        <ul className="flex flex-col gap-y-3">
                            <li>
                                <Link to={"/"}>- Home</Link>
                            </li>
                            <li>
                                <Link to={"/Contact"}>- Contact</Link>
                            </li>
                            <li>
                                <Link to={"/Service"}>- Services</Link>
                            </li>
                            <li>
                                <Link to={"/Blog"}>- Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-4">
                        <h4 className=" font-semibold mb-4 sm:mb-3">Contact Details</h4>
                        <div className=" flex flex-col gap-y-3 justify-center  md:w-full md:py-2 md:gap-y-3 text-black">
                            <div className="flex  items-center gap-x-2 w-full flex-wrap ">

                                <span className="">
                                    <IoLocationSharp className="text-xl " />
                                </span>
                                <span className="font-semibold ">Springs: </span>
                                <span className="">1670 Paonia St Suite 120 Colorado Springs, CO 80915</span>
                                &nbsp;
                                <span>
                                    <a href="https://maps.app.goo.gl/V9e4i9mBBJT2ZiPW8" className=" text-xl " target="_blank" rel="noopener noreferrer">
                                        <FaMapMarkedAlt />
                                    </a>
                                </span>

                            </div>
                                <div className="flex  items-center gap-x-2 w-full flex-wrap ">
                                <span className="">
                                    <IoLocationSharp className="text-xl " />
                                </span>
                                <span className="font-semibold ">College Station: </span>
                                <span className="">4091 Ashley Ln #200, College Station, TX 77845</span>
                                &nbsp;
                                <span>
                                    <a href="https://maps.app.goo.gl/hfdjLpEWgKgkjtE28" className=" text-xl " target="_blank" rel="noopener noreferrer">
                                        <FaMapMarkedAlt />
                                    </a>
                                </span>

                            </div>
                            <div className="flex  items-center gap-x-2 w-full flex-wrap ">

                            <span className="">
                                <IoLocationSharp className="text-xl " />
                            </span>
                            <span className="font-semibold ">Midland: </span>
                            <span className="">3107 Antelope Trail Unit 4, Midland, TX, 79706</span>
                            &nbsp;
                            <span>
                                <a href="https://maps.app.goo.gl/sdWnHEA7R4p1xrxd9" className=" text-xl " target="_blank" rel="noopener noreferrer">
                                    <FaMapMarkedAlt />
                                </a>
                            </span>

                            </div>
                            <div className="flex  items-center gap-x-2 w-full flex-wrap ">

                                <span className="">
                                    <IoLocationSharp className="text-xl " />
                                </span>
                                <span className="font-semibold ">San Angelo: </span>
                                <span className="">6566 US-67 Suite 99, San Angelo, TX 76901</span>

                            </div>
                            {/* <div className="flex  items-center gap-x-2 w-full flex-wrap">
                                <span className="">

                                    <BsTelephoneFill className="text-xl " />
                                </span>
                                <span className="font-semibold ">New Customers:</span>
                                <a className="" href="tel:720-928-6680">(720) 928-6680</a>
                            </div> */}
                            <div className="flex  items-center gap-x-2 w-full flex-wrap">
                                <span className="">

                                    <BsTelephoneFill className="text-xl " />
                                </span>
                                <span className="font-semibold ">Shop:</span>
                                <a className="" href="tel:214-766-6176">(214) 766-6176</a>
                            </div>
                            <div className="flex  items-center gap-x-2 w-full flex-wrap">
                                <span className="">
                                    <MdEmail className="text-xl " />
                                </span>
                                <span className="font-semibold ">Email:</span>
                                <a className="" href='mailto:contact@kjsautohailrepair.com'>contact@kjsautohailrepair.com</a>
                            </div>
                            {/* <div className="flex  items-center gap-x-2 w-full flex-wrap">
                                <span className="">

                                    <BiSolidTimeFive className="text-xl " />
                                </span>
                                <span className="font-semibold ">Timing</span>
                                <span className=""> Mon - Fri 8:00 - 5:00</span>
                            </div> */}

                        </div>
                    </div>

                    <div className="pt-4">

                        <h4 className="font-semibold mb-3 sm:mb-5">Social Links</h4>
                        <div className=" flex items-center gap-x-3">

                            <a href="https://www.facebook.com/kjsautohailrepair" className="text-2xl text-[#1877F2]" target="_blank" rel="noopener noreferrer">
                                <BsFacebook />
                            </a>
                            {/* <a href="" className="text-2xl text-[#1877F2]">
                                <FaTwitter />
                            </a> */}
                            <a href="https://www.instagram.com/kjsautohailrepair" className="text-2xl text-[#1877F2]" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.tiktok.com/@kjsautohailrepair" className="text-2xl text-[#1877F2]" target="_blank" rel="noopener noreferrer">
                                <PiTiktokLogo />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <p className="flex justify-center items-center px-4 sm:text-base sm:text-center bg-gray-200 py-2">
                Copyright &copy; {new Date().getFullYear()} All rights reserved by KJS Auto Hail Repair
            </p> */}
            {/* <p className="flex justify-center items-center px-4 sm:text-base sm:text-center bg-emerald-950 py-2 text-white	">
                developed and designed by &nbsp;<a href='http://www.envysionwithawhy.com' className='underline'>envysion digital marketing</a>
            </p> */}
        </>
    )
}

export default Footer