export default function NavBar({ content }) {
  return (
    <nav className="bg-white border border-slate-100 flex justify-between px-2">
      <div className="text-left text-sky-500 text-[20px] font-black leading-loose">FW</div>
      <img src="/assets/material-symbols_menu-rounded.svg" alt="burger menu" />
    </nav>
  )
}
