import logo from "/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex">
      <div className="header__logo">
        <Image src={logo} alt="logo" />
      </div>
      <div className="header__links">
        <Link href="/">Home</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/contact">Character Sheet</Link>
        <Link href="/contact">Class</Link>
        <Link href="/">Backstory</Link>
        <Link href="/">Sign In</Link>
      </div>
    </div>
  );
};

export default Header;
