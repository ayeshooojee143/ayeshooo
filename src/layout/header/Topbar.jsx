import {
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-transparent text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row
        justify-between items-center px-4 py-3 gap-3">

        {/* Left */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <span className="flex items-center gap-2 group cursor-pointer">
            <EnvelopeIcon className="h-5 w-5 text-orange-500" />
            <span className="group-hover:text-orange-500">
              info@webmail.com
            </span>
          </span>

          <span className="flex items-center gap-2 group cursor-pointer">
            <MapPinIcon className="h-5 w-5 text-orange-500" />
            <span className="group-hover:text-orange-500">
              15/A, Nest Tower, NYC
            </span>
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer" />
            <GlobeAltIcon className="h-5 w-5 hover:text-orange-500 cursor-pointer" />
          </div>
          <button className="relative flex items-center gap-2 px-5 py-2 mx-auto md:float-end rounded-xl font-semibold bg-orange-600 text-white overflow-hidden group">

            {/* Hover Background */}
            <span className="absolute inset-0 bg-blue-950 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

            {/* Button Content */}
            <span className="relative z-10  group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                Add Listing 
            </span>

          </button>
         
        </div>
      </div>
    </div>
  );
};

export default TopBar;
