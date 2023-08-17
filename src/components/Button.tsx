import React from "react"

type Props = {
    children: React.ReactNode
}

export function SecondaryButton({ children }: Props) {
    return (
        <div className="select-none min-w-32 h-10 px-4 py-2 justify-center items-center inline-flex rounded border font-normal leading-normal border-sky-500 gap-2.5 text-center text-sky-500 hover:text-white text-[14px] hover:bg-sky-500 hover:cursor-pointer active:bg-sky-700">{children}</div>
    )
}

export function PrimaryButton({ children }: Props) {
    return (
        <div className="select-none w-32 h-10 px-4 py-2  bg-sky-500 rounded border border-sky-500 justify-center items-center gap-2.5 text-center text-white text-[14px] font-normal leading-normal hover:bg-sky-700 hover:cursor-pointer active:bg-sky-800">
            {children}
        </div>
    )
}
