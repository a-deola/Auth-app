import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
