import { Link } from "react-router-dom";
import { useEffect } from 'react';
import NavBar from "../../Components/NavBar/NavBar";

import { IoLocationSharp } from "react-icons/io5";
import { BsMailbox2, BsTelephoneFill } from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaTwitter, FaMapMarkedAlt } from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    window.gtag('event', 'ads_conversion_Contact_Us_Page_1');
  }, []);
  return (
    <>
      <NavBar />
      <div className=" pb-10  flex justify-center items-center flex-col">
        <div className="bg-contact_bg min-h-[400px] w-full flex justify-center items-center bg-cover bg-center">
          <h1 className="text-center text-4xl text-white">Contact Us</h1>
        </div>
        <div className="w-full md:w-11/12  md:flex-col mx-auto  flex justify-center min-h-[400px] my-6 mt-20 max-w-[1700px] rounded-lg">
          <div className="w-5/12 bg-[#f79f24] rounded-lg sm:w-full min-h-full flex flex-col gap-y-14 justify-center pl-7 p-7 pr-2 md:w-full md:py-10 md:gap-y-9">
            <div className="flex  items-center gap-x-2 w-full flex-wrap ">
              <span className="w-12 h-12 sm:w-10 sm:h-10  rounded-full flex justify-center items-center bg-[rgba(255_,255_,255_,0.2)]">
                <IoLocationSharp className="text-xl sm:text-base text-white" />
              </span>
              <span className="font-semibold text-white">Springs: </span>
              <span className="text-white">
                1670 Paonia St Suite 120, Colorado Springs, CO 80915
              </span>
              &nbsp;
              <span>
                  <a href="https://maps.app.goo.gl/V9e4i9mBBJT2ZiPW8" className=" text-xl " target="_blank" rel="noopener noreferrer">
                      <FaMapMarkedAlt className="text-xl sm:text-base text-white" />
                  </a>
              </span>
            </div>
            <div className="flex  items-center gap-x-2 w-full flex-wrap ">
              <span className="w-12 h-12 sm:w-10 sm:h-10  rounded-full flex justify-center items-center bg-[rgba(255_,255_,255_,0.2)]">
                <IoLocationSharp className="text-xl sm:text-base text-white" />
              </span>
              <span className="font-semibold text-white">College Station: </span>
              <span className="text-white">
                4091 Ashley Ln #200, College Station, TX 77845
              </span>
              &nbsp;
              <span>
                  <a href="https://maps.app.goo.gl/hfdjLpEWgKgkjtE28" className=" text-xl " target="_blank" rel="noopener noreferrer">
                      <FaMapMarkedAlt className="text-xl sm:text-base text-white" />
                  </a>
              </span>
            </div>
            <div className="flex  items-center gap-x-2 w-full flex-wrap ">
              <span className="w-12 h-12 sm:w-10 sm:h-10  rounded-full flex justify-center items-center bg-[rgba(255_,255_,255_,0.2)]">
                <IoLocationSharp className="text-xl sm:text-base text-white" />
              </span>
              <span className="font-semibold text-white">Midland: </span>
              <span className="text-white">
                3107 Antelope Trail Unit 4, Midland, TX, 79706
              </span>
              &nbsp;
              <span>
                  <a href="https://maps.app.goo.gl/sdWnHEA7R4p1xrxd9" className=" text-xl " target="_blank" rel="noopener noreferrer">
                      <FaMapMarkedAlt className="text-xl sm:text-base text-white" />
                  </a>
              </span>
            </div>
            <div className="flex  items-center gap-x-2 w-full flex-wrap ">
              <span className="w-12 h-12 sm:w-10 sm:h-10  rounded-full flex justify-center items-center bg-[rgba(255_,255_,255_,0.2)]">
                <IoLocationSharp className="text-xl sm:text-base text-white" />
              </span>
              <span className="font-semibold text-white">San Angelo: </span>
              <span className="text-white">
                6566 US-67 Suite 99, San Angelo, TX 76901
              </span>
            </div>
            {/* <div className="flex  items-center gap-x-2 w-full flex-wrap">
              <span className="w-12 h-12 sm:w-10 sm:h-10  rounded-full flex justify-center items-center bg-[rgba(255_,255_,255_,0.2)]">
                <BsTelephoneFill className="text-xl sm:text-base text-white" />
              </span>
              <span className="font-semibold text-white">New Customers:</span>
              <a className="text-white" href="tel:214-766-6176">
                (720) 928-6680
              </a>
            </div> */}
            <div className="flex  items-center gap-x-2 w-full flex-wrap">
              <span className="w-12 h-12 sm:w-10 sm:h-10  rounded-full flex justify-center items-center bg-[rgba(255_,255_,255_,0.2)]">
                <BsTelephoneFill className="text-xl sm:text-base text-white" />
              </span>
              <span className="font-semibold text-white">Shop:</span>
              <a className="text-white" href="tel:214-766-6176">
                (214) 766-6176
              </a>
            </div>
            <div className="flex  items-center gap-x-2 w-full flex-wrap">
              <span className="w-12 h-12 sm:w-10 sm:h-10  rounded-full flex justify-center items-center bg-[rgba(255_,255_,255_,0.2)]">
                <MdEmail className="text-xl sm:text-base text-white" />
              </span>
              <span className="font-semibold text-white">Email:</span>
              <a
                className="text-white"
                href="mailto:contact@kjsautohailrepair.com"
              >
                contact@kjsautohailrepair.com
              </a>
            </div>
            <div className="flex  items-center gap-x-2 w-full flex-wrap">
              <span className="w-12 h-12 sm:w-10 sm:h-10  rounded-full flex justify-center items-center bg-[rgba(255_,255_,255_,0.2)]">
                <BiSolidTimeFive className="text-xl sm:text-base text-white" />
              </span>
              <span className="font-semibold text-white">Hours:</span>
              <span className="text-white"> Mon - Fri 9:00 - 5:00</span>
              <br />
            </div>
            <div className="flex  items-center gap-x-2 w-full flex-wrap">
              <span className="text-white">
                <i>* Available Saturdays by Appointment</i>
                <br/>
                <i>* New Customer Line Open 7 Days</i>
              </span>
            </div>
          </div>
          <div className="w-5/12 h-full p-3 md:w-full px-9">
            <h2 className="text-2xl py-7">Get In Touch</h2>
            <div className="">
              <form
                name="contact"
                action="/contact"
                method="post"
                netlify="true"
                className="flex flex-col gap-y-4"
                id="contact"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="flex gap-x-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full pl-2 py-2 outline-none  rounded-md border border-gray-300 "
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="w-full pl-2 py-2 outline-none  rounded-md border border-gray-300 "
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full pl-2 py-2 outline-none  rounded-md border border-gray-300 "
                    required
                  />
                </div>
                <div className="">
                  <select
                    title="Referred by..."
                    name="referred-by"
                    placeholder="Referred by..."
                    required
                    className="w-full pl-2 py-2 outline-none  rounded-md border border-gray-300 custom-select"
                    defaultValue="referred-by"
                  >
                    <option disabled value="referred-by" className="">
                      Referred by...
                    </option>
                    <option value="Google">Google</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Jason">Jason</option>
                    <option value="Shandra">Shandra</option>
                    <option value="Chris">Chris</option>
                    <option value="Adam">Adam</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    className="w-full pl-2 py-2 outline-none  rounded-md border border-gray-300 "
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button className="w-40 h-12  mt-1 rounded-lg bg-[#f79f24] font-semibold text-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* Just a pic <div className="w-3/6 flex justify-center md:w-full">
                        <img src="/src/assets/contact.webp" className=" rounded-lg w-9/12 lg:w-11/12 md:w-8/12 h-6/6" alt="" loading='lazy'/>
                    </div> */}
        </div>

        {/* <!-- Google Calendar Appointment Scheduling begin --> */}
        <iframe 
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ34DqP7HuJwOktjCO724Df8si2bqCvv8alOV4pTn3kRBHheik7ThKGXIwhXJs2b2It2hn5ZxyNu?gv=true" 
          style={{ border: '0', width: '100%', height: '1000px' }} 
          title="Google Calendar Appointment Scheduling"
        ></iframe>
        {/* <!-- end Google Calendar Appointment Scheduling --> */}


        {/* <div className="mt-10 flex justify-center items-center">
          <button
            className="flex justify-center items-center w-56 call_to_action h-12 mt-5 rounded-lg bg-[#f79f24] font-semibold text-white"
            onClick={() => window.location.href = 'tel:720-928-6680'}
          >
            Call us Today!
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ContactUs;
