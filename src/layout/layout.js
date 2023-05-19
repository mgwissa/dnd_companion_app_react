import NewHeader from "@/components/header/new-header";
import Footer from "@/components/footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <NewHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
