import Image from "next/image";
import { useSelector } from "react-redux";
import logo from "/public/images/logo.png";

import MobileNav from "../mobile-nav/mobile-nav";

const NewHeader = () => {
  const pages = useSelector((state) => state.app.pages);
  console.log("pages", pages);

  Object.keys(pages).forEach((key) => {
    console.log("key", key);
    console.log("pages[key]", pages[key]);
  });

  return (
    <div role="navigation" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <MobileNav />
          <div>
            <Image className="block h-8 w-auto " src={logo} alt="D&D"></Image>
          </div>
          <div className="the-pages">
            {Object.keys(pages).forEach((key) => {
              console.log("key", key);
              <a
                key={key}
                href={key}
                className={
                  pages[key].current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                }
              >
                {key}
              </a>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
