import { useState } from "react";
import SnackBar from "./SnackBar";
import { PrimaryButton } from './Button'


export default function ContactForm() {
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);

    function handleSubmit(e) {
        setIsFormSubmitting(true)
        e.preventDefault();
        const formData = new URLSearchParams(new FormData(e.target));

        fetch("https://script.google.com/macros/s/AKfycbw8L2GYlMhT2Pz4dPupnjiAkof7W_jVcDqbw7AHCKbXtOLkz27P5d4WMnxSznTJS6U/exec", {
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "body": formData,
            "method": "POST",
            "mode": "no-cors",
            "credentials": "include"
        }).then(() => setIsFormSubmitting(false)).then(() => {
            setShowSnackbar(true);
            setTimeout(() => {
                setShowSnackbar(false);
            }, 3000)
        }).then(() => e.target.reset());
    }
    
    return (
        <div className="flex flex-col my-12">
            <div className="mx-auto flex-col justify-start items-center gap-1 inline-flex my-2">
                <div className="text-zinc-700 text-[20px] font-bold leading-loose">Contact Me</div>
                <div className="w-60 text-center text-zinc-700 text-[14px] font-normal leading-normal">I’m available for consultations, collaborations, and coffee! ☕</div>
            </div>
            <div className="left-[40px]  flex-col justify-start items-center gap-4 inline-flex my-2">
                {isFormSubmitting === 'success' && (
                    <div>Form submitted successfully!</div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="my-2">
                        <div className="text-left text-zinc-700 text-[14px] font-normal leading-normal">Full Name</div>
                        <input className="my-2 w-60 px-3 py-2 bg-white rounded border border-slate-100 justify-start items-center gap-2.5 inline-flextext-center text-[14px] font-normal leading-normal focus:outline-sky-500" placeholder="Full name" name="name" required />
                    </div>
                    <div className="my-2">
                        <div className="text-left text-zinc-700 text-[14px] font-normal leading-normal">Email</div>
                        <input className="my-2 w-60 px-3 py-2 bg-white rounded border border-slate-100 justify-start items-center gap-2.5 inline-flextext-center text-[14px] font-normal leading-normal focus:outline-sky-500" placeholder="Email" type="email" name="email" required />
                    </div>
                    <div className="my-2">
                        <div className="text-left text-zinc-700 text-[14px] font-normal leading-normal">Subject</div>
                        <input className="my-2 w-60 px-3 py-2 bg-white rounded border border-slate-100 justify-start items-center gap-2.5 inline-flextext-center text-[14px] font-normal leading-normal focus:outline-sky-500" placeholder="Subject" name="subject" required />
                    </div>
                    <div className="my-2">
                        <div className="text-left text-zinc-700 text-[14px] font-normal leading-normal">Message</div>
                        <textarea className="my-2 w-60 h-20 px-3 py-2 bg-white rounded border border-slate-100 justify-start items-start gap-2.5 inline-flex text-left text-[14px] font-normal leading-normal focus:outline-sky-500" placeholder="Message" name="message"
                            rows="5" cols="33" required>
                        </textarea>
                    </div>
                    <div className="mx-auto px-10">

                        {isFormSubmitting ? (<PrimaryButton content={<div className="flex items-center justify-center animate-pulse">
                            <div className="w-3 h-3 m-1 bg-slate-100 opacity-25 rounded-full"></div>
                            <div className="w-3 h-3 m-1 bg-slate-100 opacity-25 rounded-full"></div>
                            <div className="w-3 h-3 m-1 bg-slate-100 opacity-25 rounded-full"></div>
                        </div>} />) : (<button type="submit"><PrimaryButton content="Send Message" /></button>)}

                        {showSnackbar && (<SnackBar />)}
                    </div>
                </form>
            </div>
        </div>
    )
}
