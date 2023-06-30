export function SecondaryButton({content}) {
    return (
        <div className="w-[120px] px-4 py-2 justify-center items-center inline-flex rounded border border-sky-500 gap-2.5 text-center text-sky-500 text-[14px] font-normal leading-normal">{content}</div>
    )
}

export function PrimaryButton({content}) {
    return (
        <div className="px-4 py-2  bg-sky-500 rounded justify-center items-center gap-2.5">
            <div className="text-center text-white text-[14px] font-normal leading-normal">{content}</div>
          </div>
    )
}
