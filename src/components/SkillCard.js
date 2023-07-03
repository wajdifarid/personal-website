export default function SkillCard({img, title, content}) {
    return (
        <div className="w-60 h-20 px-4 py-3 rounded-lg border border-slate-100 flex-col justify-center items-center gap-1 flex">
            <div className="justify-center items-center gap-1 inline-flex">
                <img className="w-4 h-4 relative" src={img} alt="skill-icon"/>
                <div className="text-center text-zinc-700 text-[14px] font-bold leading-normal">{title}</div>
            </div>
            <div className="text-center text-slate-500 text-[12px] font-normal leading-none">{content}</div>
        </div>
    )
}
