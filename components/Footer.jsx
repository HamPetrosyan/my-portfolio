import { IoIosMail, IoMdCall } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-25 text-gray">
      <h1 className="mb-5 text-6xl font-extrabold text-center text-green select-none">
        Ham.
      </h1>

      <div className="w-max flex items-center gap-2 mx-auto">
        <IoIosMail size={25} className="text-green" />
        hampetrosyan007@gmail.com
      </div>

      <div className="w-max flex items-center gap-2 mx-auto">
        <IoMdCall size={25} className="text-green" />
        +374 77 45 19 29
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-green mx-[10%] mt-12 py-6">
        <p> © {currentYear} Hamlet Petrosyan. All rights reserved.</p>

        <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
          <li className="hover:text-green duration-150">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/HamPetrosyan"
            >
              GitHub
            </a>
          </li>
          <li className="hover:text-green duration-150">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ham-petrosyan777"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
