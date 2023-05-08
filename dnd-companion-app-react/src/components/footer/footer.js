import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <Link href="/">Home</Link>
        <p>
          Go <Link href="./next">here</Link> for next js docs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
