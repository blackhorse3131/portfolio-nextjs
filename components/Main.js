import React from "react";
import Link from "next/link";
import Vanta from "./Vanta";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
	const varients = {
		hidden: {
			scale: 0.8,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.4,
			},
		},
	};

	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="hidden md:flex">
				<Vanta />
			</div>
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<motion.div initial="hidden" animate="visible" variants={varients}>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						Let&apos;s Build Something Together
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I&apos;m <span className="text-[#1E90FF]">Koby</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Javascript Expert</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						Mainly, I am focusing JS frameworks and libraries such as React, 
						Three.js, D3.js and so on.
					</p>
					<div className="flex justify-between items-center max-w-[330px] m-auto py-4">
						<a
							href="https://github.com/breadhead313/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaGithub />
							</div>
						</a>
						<Link href="/#contact">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<AiOutlineMail />
							</div>
						</Link>
						<a target="_blank" href="/resume.pdf">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<BsPersonLinesFill />
							</div>
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Main;
