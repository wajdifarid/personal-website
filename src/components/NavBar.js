import { useState } from "react";

export default function NavBar() {
  return (
    <nav className="py-4 bg-white border border-slate-100 flex justify-between px-2 sticky top-0 z-50">
      <div className="text-left text-sky-500 text-[20px] font-black leading-loose inline">
        FW
      </div>
      <div className="w-full p-2 hidden sm:block">
        <div className="flex justify-center gap-8 ">
          <a href="#experiences">Experiences</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
      <HamburgerMenu />
    </nav>
  )
}

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="sm:hidden">
        <div className={"fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-20 " + (isOpen ? "" : "hidden")} onClick={toggleMenu}>
        </div>
        <div className={"fixed shadow-2xl top-0 right-0 w-4/6 h-screen bg-white z-20 transition-transform duration-500 transform " + (isOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="w-full p-4 border border-zinc-200 justify-between items-center gap-2.5 inline-flex">
            <div className="text-center text-sky-500 text-[20px] font-black leading-loose">FW</div>
            <button className="h-6" onClick={toggleMenu}><img src="/assets/close-icon.svg" alt="close-icon" /></button>
          </div>
          <div className="flex flex-col justify-start items-start w-full">
            <a className="p-2 w-full text-zinc-700 text-[14px] font-normal leading-normal hover:bg-sky-500 hover:text-white" href="#experiences" onClick={toggleMenu}><button className="h-6">Experiences</button></a>
            <a className="p-2 w-full text-zinc-700 text-[14px] font-normal leading-normal hover:bg-sky-500 hover:text-white" href="#skills" onClick={toggleMenu}><button className="h-6">Skills</button></a>
            <a className="p-2 w-full text-zinc-700 text-[14px] font-normal leading-normal hover:bg-sky-500 hover:text-white" href="#portfolio" onClick={toggleMenu}><button className="h-6">Portfolio</button></a>
            <a className="p-2 w-full text-zinc-700 text-[14px] font-normal leading-normal hover:bg-sky-500 hover:text-white" href="#blogs" onClick={toggleMenu}><button className="h-6">Blogs</button></a>
            <a className="p-2 w-full text-zinc-700 text-[14px] font-normal leading-normal hover:bg-sky-500 hover:text-white" href="#contact" onClick={toggleMenu}><button className="h-6">Contact Me</button></a>
          </div>
        </div>
      </div>
      <div className="p-2 sm:hidden" onClick={toggleMenu}>
        <img src="/assets/hamburger-menu-icon.svg" alt="hamburger menu" />
      </div>
    </>
  );
}
