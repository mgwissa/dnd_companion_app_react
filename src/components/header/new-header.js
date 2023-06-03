import Image from "next/image";
import { useSelector } from "react-redux";
import logo from "/public/images/logo.png";

import MobileNav from "../mobile-nav/mobile-nav";

const NewHeader = () => {
  const pages = useSelector((state) => state.app.pages);
  console.log("pages", pages);

  return (
    <div role="navigation" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <MobileNav />
          <div>
            <Image className="block h-8 w-auto " src={logo} alt="D&D"></Image>
          </div>
          <div className="the-pages">
            {pages.map((item) => {
              return (
                <a
                  key={item.name}
                  href={item.path}
                  className={
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
