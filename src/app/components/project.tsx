import Image from "next/image";
import Link from "next/link";
import React from "react";
import atm from "../../../public/pictures/atm.webp";
import calculatorR from "../../../public/pictures/calculatorR.png";

import ticTacToe from "../../../public/pictures/tic-tac-toe.jpg";
import todoList from "../../../public/pictures/todo-list.png";
import blog from "../../../public/pictures/blog.jpg";
import currencyConverter from "../../../public/pictures/currency-converter.png";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font bg-cover bg-center custom-image bg-fixed">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-black">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
              My work in front-end development is all about crafting seamless,
              responsive, and interactive user interfaces. Each project reflects
              my commitment to clean code, efficient design practices, and the
              latest front-end technologies. Take a look to see how I turn
              concepts into polished, functional web experiences
            </p>
          </div>
          <div className="flex flex-wrap -m-5 -mt-12 ">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative ">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={atm}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Dynamic Countries
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Dynamic countries Data fetch
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    each dynamic Countries Data fetch mini project which is
                    Using the Next js and tailwind css.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/Hamzasheikh8669/atm-project"}
                  >
                    <p className="leading-relaxed text-blue-600 hover:underline">
                      Veiw Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2nd */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative ">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={calculatorR}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Dynamic Countries
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Dynamic countries Data fetch
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    each dynamic Countries Data fetch mini project which is
                    Using the Next js and tailwind css.
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://github.com/Hamzasheikh8669/simple-calculator"
                    }
                  >
                    <p className="leading-relaxed text-blue-600 hover:underline">
                      Veiw Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3rd */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative ">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={todoList}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Dynamic Countries
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Dynamic countries Data fetch
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    each dynamic Countries Data fetch mini project which is
                    Using the Next js and tailwind css.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/Hamzasheikh8669/to_do_list"}
                  >
                    <p className="leading-relaxed text-blue-600 hover:underline">
                      Veiw Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4th */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative ">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={currencyConverter}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Dynamic Countries
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Dynamic countries Data fetch
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    each dynamic Countries Data fetch mini project which is
                    Using the Next js and tailwind css.
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://github.com/Hamzasheikh8669/currency_converter-"
                    }
                  >
                    <p className="leading-relaxed text-blue-600 hover:underline">
                      Veiw Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* 5th */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={ticTacToe}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Dynamic Countries
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Dynamic countries Data fetch
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    each dynamic Countries Data fetch mini project which is
                    Using the Next js and tailwind css.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/Hamzasheikh8669/Tic_Tac_Toe-Game"}
                  >
                    <p className="leading-relaxed text-blue-600 hover:underline">
                      Veiw Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* 6th */}

            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={blog}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Dynamic Countries
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Dynamic countries Data fetch
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    each dynamic Countries Data fetch mini project which is
                    Using the Next js and tailwind css.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/Hamzasheikh8669/Next_js_Blog"}
                  >
                    <p className="leading-relaxed text-blue-600 hover:underline">
                      Veiw Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
