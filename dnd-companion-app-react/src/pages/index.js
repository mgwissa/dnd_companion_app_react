import Image from "next/image";
import Link from "next/link";

import CharacterImg from "/public/images/earth_genasi.png";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Image src={CharacterImg} />
    </div>
  );
};

export default HomePage;
