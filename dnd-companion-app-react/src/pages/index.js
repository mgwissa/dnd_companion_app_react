import Image from "next/image";
import Link from "next/link";

import CharacterImg from "/public/images/earth_genasi.png";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <div className="flex place-items-center justify-center">
        <Image src={CharacterImg} alt="Earth Genasi" width={400} />
      </div>
    </>
  );
};

export default HomePage;
