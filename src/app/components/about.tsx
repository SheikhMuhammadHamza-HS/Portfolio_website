import Image from "next/image";
import Link from "next/link";
import myy from  "../../../public/pictures/myy.jpeg" 

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-400 bg-gray-900 body-font bg-cover bg-center custom-image bg-fixed">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <Image
              className="object-cover object-center rounded mx-auto w-[350px] h-[500px]"
              alt="hero"
              width={200}
              height={300}
              src={myy}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              I’m passionate about using technology to create innovative and
              impactful solutions! Currently, I’m diving deep into Front end
              Development and exploring the potential of Agentic AI. My goal is
              to develop smart and user-friendly applications that solve
              problems and make a positive impact. 🌟 What inspires me? Working
              on new and creative ideas Combining AI with web development to
              discover new possibilities Collaborating with people who love
              exploring fresh concepts If you share the vision of making
              technology smarter and simpler, let’s connect and create something
              amazing together!
            </p>
            <div className="flex justify-center">
              <Link href="/cv/NEW CV (4).pdf">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Veiw CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
