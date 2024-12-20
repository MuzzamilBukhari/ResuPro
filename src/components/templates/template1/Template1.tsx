import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Projects } from "./Projects";
import { Certificates } from "./Certificates";

export default function Template1() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 border-2 border-cyan-600 rounded-xl">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <header className=" text-sky-600 p-6">
          <h1 className="text-lg sm:text-xl text-center font-bold">
            MUHAMMAD MUZZAMIL BUKHARI
          </h1>
          <div className=" text-center text-black text-xs sm:text-sm">
            <a
              href="mailto:muhammadmuzzamilbukhari@gmail.com"
              className=" hover:underline"
            >
              muhammadmuzzamilbukhari@gmail.com
            </a>
            <span className="mx-2">|</span>
            <span>+92 3111091341</span>
          </div>
          <div className="mt-4 flex justify-between text-black">
            <a
              href="https://github.com/muzzamilbukhari"
              className="flex items-center text-sm hover:underline"
            >
              <FaGithub className="mr-1" />
              @muzzamilbukhari
            </a>
            <a
              href="https://linkedin.com/in/muzzamilbukhari"
              className="flex items-center text-sm hover:underline"
            >
              <FaLinkedin className="mr-1" />
              /muzzamilbukhari
            </a>
          </div>
        </header>

        <main className="py-6 px-3">
          <Skills />
          <Education />
          <Projects />
          <Certificates />
        </main>
      </div>
    </div>
  );
}
