"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="text-white body-font bg-cover bg-center custom-image bg-fixed bg-gray-900">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              I Am
              <br />
              Hamza Sheikh
              
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Front-end Developer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-blue-700 mb-4"></div>
            <p className="mb-8 leading-relaxed text-white text-xl">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
             <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact Me
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2">
            <Image
              className="object-cover object-center rounded mx-auto w-[20rem]"
              alt="hero"
              height={500}
              width={500}
              src="/pictures/hamza.png" // Adjusted to absolute path for clarity
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
