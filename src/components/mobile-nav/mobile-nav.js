import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);

  return (
    <div
      className="absolute inset-y-0 left-0 flex items-center sm:hidden text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      onClick={toggleMenu}
    >
      <span className="sr-only">Open main menu</span>
      {isMenuOpen ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      )}
    </div>
  );
};

export default MobileNav;
