import Menu from "@/svg/Menu";
import Logo from "./Logo";
import Close from "@/svg/close";
import { useState } from "react";

const navItems = ["About", "Experience", "Work", "Contact"];

const Header = () => {

  const [visibleMobileNav,setVisibleMobileNav] = useState(false);

  const toggleMobileNav = () =>{
    setVisibleMobileNav((prev)=>!prev)
  }

  return (
    <header className="flex justify-between w-full p-7 bg-primaryLight items-center">
      <Logo />
      <Menu height={25} width={25} className="fill-highlight md:hidden" onClick={toggleMobileNav} />
      <aside className={` ${visibleMobileNav?'':'max-md:hidden'} w-[18rem] bg-primary absolute right-0 top-0 bottom-0 items-center flex flex-col justify-center md:static md:w-max md:bg-inherit`}>
        <Close height={25} width={25} className="fill-highlight absolute right-7 top-9 md:hidden" onClick={toggleMobileNav} />
        <nav className="flex flex-col gap-10 items-center md:flex-row">
          <ol className="nav-item-wrap flex flex-col gap-10 md:flex-row">
            {navItems.map((eachItem) => (
              <li key={eachItem} className="nav-item w-min md:w-max text-fontSecondary">
                <a href="">{eachItem}</a>
              </li>
            ))}
          </ol>
          <a
            className="border border-highlight px-9 py-3 rounded-md text-sm text-highlight"
            href=""
          >
            Resume
          </a>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
