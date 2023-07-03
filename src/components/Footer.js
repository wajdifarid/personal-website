export default function Footer() {
  return (
    <div className="flex flex-col px-4 py-8 bg-slate-100 items-center gap-5">
      <div className="flex w-64 gap-6 items-center justify-center">
        <a className="text-slate-500 text-[0.875rem] font-medium" href="mailto:faridwajdi05@gmail.com" target="_blank" rel="noreferrer">
          Email
        </a>
        <a className="text-slate-500 text-[0.875rem] font-medium" href="https://www.linkedin.com/in/wajdifarid/" target="_blank" rel="noreferrer">
          Linkedin
        </a>
        <a className="text-slate-500 text-[0.875rem] font-medium" href="https://github.com/wajdifarid" target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
      <div className="justify-start items-center gap-2 inline-flex">
        <img src="/assets/copyright-icon.svg" alt="copyright" />
        <div className="text-center text-slate-400 text-[14px] font-light leading-normal">Farid Wajdi 2023. All Rights Reserved.</div>
      </div>
    </div>
  )
}
