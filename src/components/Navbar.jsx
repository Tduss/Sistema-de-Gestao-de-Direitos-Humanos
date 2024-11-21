import { GiHumanPyramid } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-pink-100">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center gap-2">
            <GiHumanPyramid size={40} className="text-gray-800" />
            <span className="self-center flex flex-col flex-wrap text-sm font-semibold whitespace-nowrap dark:text-gray-800 md:text-xl">
              Promovendo <span> Direitos Humanos</span>
            </span>
          </a>
          <div className="flex md:order-2">
            <Link to="/contact">
              <button
                type="button"
                className="text-white bg-pink-300 hover:bg-pink-400 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-pink-500 dark:hover:bg-pink-400 dark:focus:ring-pink-800"
              >
                Denuncie
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
