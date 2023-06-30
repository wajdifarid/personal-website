import { useState } from "react";

export default function NavBar() {
  return (
    <nav className="py-4 bg-white border border-slate-100 flex justify-between px-2">
      <div className="text-left text-sky-500 text-[20px] font-black leading-loose">FW</div>
      <HamburgerMenu />
    </nav>
  )
}

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu()  {
    setIsOpen(!isOpen);
  };

  return <>
    <div className="p-2" onClick={toggleMenu}>
      <img src="/assets/hamburger-menu-icon.svg" alt="hamburger menu" />
    </div>
    {isOpen && (
      <div>
        <div className="w-2/6 h-screen bg-black bg-opacity-80 top-0 left-0 fixed z-20">

        </div>
        <div className="flex flex-col w-4/6 bg-white justify-start items-start fixed right-0 top-0 h-screen z-20">
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
    )}
  </>
    ;
};
