import Layout from "../components/Layout";
//import { useState, useEffect } from "react";

function Home() {
  // const [backendData, setBackendData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api")
  //     .then((res) => res.json())
  //     .then((data) => setBackendData(data));
  // }, []);
  return (
    <Layout>
      <div className="flex flex-col-reverse items-center md:ml-10 md:flex-row w-full md:justify-between md:mt-10">
        <div className=" p-5 w-full md:w-3/5">
          <div>
            <p className="font-bold text-2xl md:text-4xl md:tracking-wide">
              Let's
              <span className="text-[#FF70A6] tracking-wide py-2">
                {" "}
                identify
              </span>{" "}
              together.
            </p>
            <p className="font-bold text-lg">
              Everyone needs an
              <span className="text-[#FF70A6]"> identity.......</span>
            </p>
            <p className="my-3 md:my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis omnis nisi ut non libero eveniet deserunt iste nobis
              vitae corrupti.
            </p>
          </div>
          <div className="flex flex-col gap-5 content-center md:flex-row md:content-start">
            <a
              className="btn bg-[#FF70A6] px-12 text-white rounded-none hover:text-[#FF70A6] hover:border-[#FF70A6] hover:bg-transparent"
              href="/Login"
            >
              Log In
            </a>
            <a
              className="btn btn-ghost text-[#FF70A6] hover:border-[#FF70A6] hover:bg-transparent rounded-none py-2"
              href="/Signup"
            >
              Sign Up
            </a>
          </div>
        </div>
        <div className="w-56 md:w-2/5">
          <img src="./hero.png" />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
