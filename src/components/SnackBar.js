export default function SnackBar({ children }) {
    return (
        <div className="fixed top-1 h-8 p-2 bg-zinc-700 rounded justify-between items-center z-50">
            <div className="justify-start items-center gap-2 flex">
                <img className="w-4 h-4 relative" src="/assets/success-snackbar-icon.svg" alt="success"/>
                <div className="text-white text-[12px] font-normal leading-none">Send message success!</div>
            </div>
        </div>
    )
}
