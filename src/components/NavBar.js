export default function NavBar() {
  return (
    <nav className="bg-white border border-slate-100 flex justify-between px-2">
      <div className="text-left text-sky-500 text-[20px] font-black leading-loose">FW</div>
      <div className="hamburger-menu z-20">
        <input className="opacity-0" id="menu__toggle" type="checkbox" />
        <label className="fixed justify-end right-2 top-5 w-6 h-6 z-30 cursor-pointer menu__btn" htmlFor="menu__toggle">
          <span className="before:-top-2 before:content-[''] after:content-[''] after:top-2 before:block after:block block before:absolute after:absolute absolute before:w-full after:w-full w-full"></span>
        </label>

        <ul className="menu__box">
          <li><a className="menu__item hover:bg-sky-500 block py-3 px-6" href="#experiences">Experiences</a></li>
          <li><a className="menu__item hover:bg-sky-500 block py-3 px-6" href="#skills">Skills</a></li>
          <li><a className="menu__item hover:bg-sky-500 block py-3 px-6" href="#portfolio">Portfolio</a></li>
          <li><a className="menu__item hover:bg-sky-500 block py-3 px-6" href="#blogs">Blog</a></li>
          <li><a className="menu__item hover:bg-sky-500 block py-3 px-6" href="#contact">Contact Me</a></li>
        </ul>
      </div>
    </nav>
  )
}
