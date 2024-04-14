import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
