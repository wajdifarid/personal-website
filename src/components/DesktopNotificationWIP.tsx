import React from "react";
import { useState } from "react";

export default function DesktopNotificationWIP() {
    const [isShown, setShown] = useState(true);

    function handleClick() {
        if (isShown) {
            setShown(false);
        }
    }

    return (isShown ?
        <div className="hidden sm:flex my-2">
            <div className="mx-auto h-20 p-4 bg-sky-100 rounded justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                    <div className="self-stretch text-zinc-700 text-[14px] font-normal leading-normal">
                        👋 Hey there! My site is still a work in progress, but your feedback is super valuable! For best experience please use mobile view. Thanks for your understanding and patience.
                    </div>
                </div>
                <img className="w-4 h-4 relative" src="/assets/close-icon.svg" alt="close-icon" onClick={handleClick} />
            </div>
        </div> : <></>
    );
}
