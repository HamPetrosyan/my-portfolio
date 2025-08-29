import { HiArrowNarrowRight, HiDownload } from "react-icons/hi";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 font-open-sans max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 text-gray">
      <div className="w-32 h-32 relative">
        <Image
          src={assets.profile_img}
          alt="Profile image"
          fill
          className="rounded-full object-cover"
        />
      </div>

      <h3 className="flex items-end gap-2 text-xl md:text-3xl mb-3 uppercase text-green font-bold">
        <span className="border w-5 self-center"></span> I'm Hamlet Petrosyan
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-extrabold">
        Junior Front-End Developer.
      </h1>

      <p className="max-w-2xl font-poppins mx-auto">
        Front-End Developer from Yerevan, Armenia — I love turning ideas into
        interactive, accessible web interfaces using React and modern web tools.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
        <a
          href="#contact"
          className="group px-8 py-3 rounded-full flex items-center gap-2 font-medium shadow-green/50 transition duration-150 shadow-sm text-white bg-green hover:bg-green/80"
        >
          contact me
          <HiArrowNarrowRight
            size={20}
            className="transition-transform duration-150 group-hover:translate-x-1"
          />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="group px-8 py-3 rounded-full flex items-center gap-2 font-medium shadow-green/50 transition duration-150 shadow-sm text-green border border-green bg-white hover:bg-green hover:text-white"
        >
          my resume
          <HiDownload
            size={20}
            className="transition-transform duration-150 group-hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
