export default function BlogCard({title, publishDate}) {
    return (
        <div className="p-4 rounded-lg border border-slate-100 flex-col justify-start items-start gap-1 flex">
          <div className="w-[248px] text-sky-500 text-[14px] font-medium leading-normal">{title}</div>
          <div className="text-slate-400 text-[12px] font-normal leading-none">{publishDate}</div>
        </div>
    )
}
