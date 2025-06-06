import React from "react";

const Contact = () => {
  return (
    <div id="Contact">
      <section className="text-gray-600 bg-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative bg-gray-600">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48338.523096406425!2d67.12094155951029!3d24.87295351913192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3399d42aef5f1%3A0xa5813c4e620196a7!2sShah%20Faisal%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e1!3m2!1sen!2s!4v1730881848124!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.4)" }}
            />
            <div className="text-white relative flex flex-wrap py-6 rounded shadow-md bg-gray-950">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font text-white font-semibold tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">Shah Faisal Colony, Karachi</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:Sheikhmhamza37@gmail.com"
                  className="text-blue-300 leading-relaxed"
                >
                  Sheikhmhamza37@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">03181159866</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-gray-600 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mx-auto">
              Contact
            </h2>
            <p className="leading-relaxed text-white mb-1 mt-3">
              Feel free to reach out for collaborations, inquiries, or just to
              say hello. I&apos;m here to help bring your ideas to life!
            </p>

            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-white text-xl">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full cursor-pointer rounded border focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-white text-xl">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full cursor-pointer bg-white mt-1 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-white text-xl">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border mt-1 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white mt-1 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-xl">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
