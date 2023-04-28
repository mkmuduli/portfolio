import Menu from "@/svg/Menu";
import Logo from "./Logo";
import Close from "@/svg/close";
import { useEffect, useRef, useState } from "react";

const navItems = ["About", "Project", "Contact"];

const Header = () => {
  const [visibleMobileNav, setVisibleMobileNav] = useState(false);
  const headerRef = useRef();

  const toggleMobileNav = () => {
    setVisibleMobileNav((prev) => !prev);
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const listener = () =>{
      var currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        headerRef.current.style.top = "0";
      } else {
        headerRef.current.style.top = "-400px";
      }
      prevScrollPos = currentScrollPos;
    }
    window.addEventListener("scroll",listener)
    return ()=>{
      window.removeEventListener("scroll",listener)
    }
  }, []);

  return (
    <header ref={headerRef} className=" fixed flex justify-between w-full py-6 px-10 lg:px-12 bg-primaryLight items-center transition-all delay-300">
      <Logo />
      <Menu
        height={25}
        width={25}
        className="fill-highlight md:hidden"
        onClick={toggleMobileNav}
      />
      <aside
        className={` ${
          visibleMobileNav ? "" : "max-md:hidden"
        } w-[18rem] bg-primary absolute right-0 top-0 bottom-0 items-center flex flex-col justify-center md:static md:w-max md:bg-inherit max-sm:h-screen`}
      >
        <Close
          height={25}
          width={25}
          className="fill-highlight absolute right-7 top-9 md:hidden"
          onClick={toggleMobileNav}
        />
        <nav className="flex flex-col gap-10 items-center md:flex-row">
          <ol className="nav-item-wrap flex flex-col gap-10 md:flex-row">
            {navItems.map((eachItem) => (
              <li
                key={eachItem}
                className="nav-item w-min md:w-max text-fontSecondary"
              >
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
