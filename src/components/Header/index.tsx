"use client";

import { leftMenu, rightMenu } from "@/constants/menulist";
import { useEffect, useState } from "react";
import Logo from "../Logo";



export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={` text-4xl z-50 fixed py-9 px-5 top-0 left-0 w-full  transition ease-in-out  ${scrolled ? "bg-white" : "bg-transparent  "}`}>
  <section className=" flex justify-center items-center max-w-[1920px] m-auto">
  <ul className="flex justify-center flex-1  ">
        {
          rightMenu.map((menu:string)=><li className="text-base mx-2" key={menu}>{menu}</li>)
        }
      </ul>
<Logo/>
      <ul className="flex justify-center  flex-1 ">
        {
          leftMenu.map((menu:string)=><li className="text-base mx-2" key={menu}>{menu}</li>)
        }
      </ul>
  </section>
    </div>
  );
}
