import Image from "next/image";
import logo from "/public/images/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NewHeader = () => {
  return (
    <div role="navigation" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* This is the hamburger menu */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Open main menu</span>
            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <Image className="block h-8 w-auto " src={logo} alt="D&D"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
