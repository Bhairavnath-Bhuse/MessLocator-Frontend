import React from 'react'
import {  FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import logo from "../../assests/logoFinal.png"
import { Link } from 'react-router-dom';


export default function Footer() {
    
    return (
        <footer className=" bg-richblack-700  text-white bottom-0 ">
            <div className="container flex flex-col p-5 items-center mx-auto px-4">
                <div className="flex flex-col md:flex-row  w-10/12 overflow-hidden justify-between">

                    <div className="w-full flex flex-col items-center md:w-1/3 mb-8 md:mb-0">
                    <Link to="/" className="  "> <img src = {logo} alt="Logo" className="rounded-[0.4rem]" width = {160} height = {32} loading = "lazy"/> </Link> 
                        <p className=" mt-4 text-gray-400">Connect individuals with the best Mess food options 
                            available, providing comprehensive Information, Reviews, and Recommendations to make 
                            informed food choices.</p>
                    </div>

                    {/* Pages  */}
                    <div className="flex flex-col items-center mb-8 md:gap-y-3 md:mb-0">
                        <h2 className="text-xl items-center font-bold mb-4">Pages</h2>
                        <ul className="list-none gap-y-2">
                            <Link to="/" ><li>Home</li></Link>
                            <Link to="/about" ><li>About</li></Link>
                            <Link to="/contact" ><li>Contact</li></Link>
                        </ul>
                    </div>

                    {/* Contact Info and Social Media Links */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-bold mb-4">Contact</h2>
                        <p className="text-gray-400 flex justify-center flex-wrap mb-2">Email : <a href="mailto:bhairavnathbhuse@gmail.com" className="text-gray-400  hover:text-blue-200 hover:underline"> bhairavnathbhuse@gmail.com</a></p>
                        <p className="text-gray-400 mb-2">Phone: <a href="tel:+91736976" className="text-gray-400 hover:text-blue-200">+91 73XX XX 6976</a></p>
                        <div className="flex space-x-4 flex-wrap gap-y-2 mt-4 justify-center">
                            <a href='https://www.geeksforgeeks.org/user/bhairavnath_bhuse/' target='_blank' rel="noreferrer" className="text-gray-400 hover:text-white">
                                <SiLeetcode size={24} />
                            </a>
                            <a href='https://github.com/Bhairavnath-Bhuse' target='_blank' rel="noreferrer" className="text-gray-400 hover:text-white">
                                <FaGithub size={24} />
                            </a>
                            <a href='https://www.linkedin.com/in/bhairavnath-bhuse-740266231/' target='_blank' rel="noreferrer" className="text-gray-400 hover:text-white">
                                <FaLinkedin size={24} />
                            </a>
                            
                            <a href='https://www.instagram.com/_bhairu__20/' target='_blank' rel="noreferrer" className="text-gray-400 hover:text-white">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="text-center text-gray-400 mt-10">
                    <p>&copy; 2024 Mess Locator. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}