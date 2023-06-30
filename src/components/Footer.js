export default function Footer() {
  return (
    <div className="flex flex-col px-4 py-8 bg-slate-100 justify-start items-center gap-5">
      <div className="justify-start items-center gap-5 inline-flex">
        <div className="w-8 h-8 relative">
          <img className="w-8 h-8 left-0 top-0 absolute bg-sky-500 rounded-full" src="/assets/email-icon.svg" alt="email"/>
        </div>
        <div className="w-8 h-8 relative">
          <img className="w-8 h-8 left-0 top-0 absolute bg-sky-500 rounded-full" src="/assets/linkedin-icon.svg" alt="linkedin"/>
        </div>
        <div className="w-[32.24px] h-[32.24px] relative">
          <img className="w-[32.24px] h-[32.24px] left-0 top-0 absolute bg-sky-500 rounded-[100px]" src="/assets/github-icon.svg" alt="github"/>
        </div>
      </div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="text-center text-slate-400 text-[14px] font-light leading-normal">Farid Wajdi 2023. All Rights Reserved.</div>
      </div>
    </div>
  )
}
