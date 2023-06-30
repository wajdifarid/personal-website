export default function SkillCard({title, content}) {
    return (
        <div className="px-4 py-3 rounded-lg border border border border border-slate-100 flex-col justify-center items-center gap-1 flex">
            <div className="justify-center items-center gap-1 inline-flex">
                <div className="w-4 h-4 relative" />
                <div className="text-center text-zinc-700 text-[14px] font-bold leading-normal">{title}</div>
            </div>
            <div className="w-[200px] text-center text-zinc-700 text-[12px] font-normal leading-none">{content}</div>
        </div>
    )
}
