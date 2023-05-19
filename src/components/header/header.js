import logo from "/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between bg-black">
      <div className="header-logo">
        <Image src={logo} alt="logo" />
      </div>
      <div className="header-links text-white w-1/2 flex justify-around">
        <Link className="self-center" href="/">
          Home
        </Link>
        <Link className="self-center" href="/notes">
          Notes
        </Link>
        <Link className="self-center" href="/contact">
          Character Sheet
        </Link>
        <Link className="self-center" href="/contact">
          Class
        </Link>
        <Link className="self-center" href="/">
          Backstory
        </Link>
        <Link className="self-center" href="/">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
