function Navbar() {
  return (
    <div className="p-5 flex justify-between align-center md:p-8">
      <div>
        <h1 className="font-black text-2xl">
          Identify <span className="text-[#FF70A6]">Me</span>
        </h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center gap-10">
          <a href="/" className="hover:border-b-2 hover:border-black">
            Home
          </a>
          <a className="hover:border-b-2 hover:border-black">Contact</a>
          <a href="/login" className="hover:border-b-2 hover:border-black">
            Log in
          </a>
          <a
            href="/signup"
            className="btn btn-outline btn-sm rounded-none border-2 border-[#FF70A6] text-[#FF70A6] hover:bg-[#FF70A6] hover:border-[#FF70A6]"
          >
            Sign Up
          </a>
        </ul>
      </div>
      <label className="btn btn-circle swap swap-rotate bg-transparent border-none md:hidden">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        {/* hamburger icon */}
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* close icon */}
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </div>
  );
}

export default Navbar;
