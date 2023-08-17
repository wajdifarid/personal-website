import React from "react";

type Props = {
    children: React.ReactNode
}

export default function SnackBar({ children }: Props) {
    return (
        <div className="fixed top-1 h-8 p-2 bg-zinc-700 rounded justify-between items-center">
            <div className="justify-start items-center gap-2 flex">
                <img className="w-4 h-4 relative" src="/assets/success-snackbar-icon.svg" alt="success" />
                <div className="text-white text-[12px] font-normal leading-none">Send message success!</div>
            </div>
        </div>
    )
}
