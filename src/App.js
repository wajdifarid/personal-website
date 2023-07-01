import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton } from './components/Button'

import NavBar from './components/NavBar'
import SkillCard from './components/SkillCard'
import Footer from './components/Footer'
import BlogCard from './components/BlogCard'
import PortfolioCard from "./components/PortfolioCard"

export default function HomePage() {
  const [formStatus, setFormStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new URLSearchParams(new FormData(e.target));

    fetch("https://script.google.com/macros/s/AKfycbySY6JJJxwHF-rOd85QE4xkn2UjM3rovC3UR3_IKEA_F6FqObFMSyl9tFAgYwEKIWBN/exec", {
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
      },
      "body": formData,
      "method": "POST",
      "mode": "no-cors",
      "credentials": "include"
    });
  }

  return (
    <div className="bg-white">
      <NavBar />
      <section className="flex flex-col my-4">
        <img className="mx-auto min-h-[200px]" src="https://via.placeholder.com/148x200" alt="Farid" />
        <div className="mx-auto text-zinc-700 text-[20px] font-bold leading-loose">Hi, I’m Farid Wajdi</div>
        <div className="mx-auto text-zinc-700 text-[14px] font-normal leading-normal">Full-stack Software Engineer</div>
        <div className="mx-auto my-2 w-60 left-[40px] text-center text-slate-400 text-[14px] font-normal leading-normal">I like to solve problem and build product which leaves an impact on people lives. Based in Jakarta 🇮🇩</div>
        <div className="flex mx-auto my-2">
          <div className="mx-2">
            <a href="#portfolio">
              <SecondaryButton content="See Portfolio" />
            </a>
          </div>
          <div className="mx-2">
            <a href="#contact">
              <PrimaryButton content="Contact Me" />
            </a>
          </div>
        </div>
      </section>
      <section id="experiences" className="flex flex-col">
        <div className="mx-auto text-zinc-700 text-[20px] font-semibold leading-loose">Experiences</div>

        <div className="mx-auto w-full h-full">
          <div className="relative">
            <div className="w-1 absolute bg-zinc-200 h-full border left-[49.75%]"></div>
            {/* <!-- right timeline --> */}
            <div className="flex justify-between items-center w-full right-timeline">
              <div className="w-5/12"></div>
              <div className="relative z-10 flex items-center bg-sky-500 w-3 h-3 rounded-full">
              </div>
              <div className="w-5/12">
                <div className="flex flex-col justify-start items-start">
                  <img className="w-6 h-6 rounded-sm" src="/assets/lumina.png" alt="lumina" />
                  <div className="flex flex-col justify-start items-start">
                    <div className="text-zinc-700 text-[12px] font-bold leading-none">Software Engineer</div>
                    <div className="text-left text-zinc-700 text-[12px] font-normal leading-none">Lumina</div>
                    <div className="text-left text-slate-400 text-[12px] font-normal leading-none">Feb 2022 - May 2023</div>
                    <div className="text-left text-zinc-700 text-[12px] font-normal leading-none">Job Platform</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- left timeline --> */}
            <div className="flex justify-between flex-row-reverse items-center w-full">
              <div className="w-5/12"></div>
              <div className="relative z-10 flex items-center bg-sky-500 w-3 h-3 rounded-full">
              </div>
              <div className="w-5/12">
                <div className="flex flex-col justify-end items-end">
                  <img className="w-6 h-6 rounded-sm" src="/assets/shopee.png" alt="shopee" />
                  <div className="flex flex-col justify-end items-end">
                    <div className="text-right text-zinc-700 text-[12px] font-bold leading-none">Software Engineer</div>
                    <div className="text-right text-zinc-700 text-[12px] font-normal leading-none">Shopee</div>
                    <div className="text-right text-slate-400 text-[12px] font-normal leading-none">Sep 2020 - Jan 2022</div>
                    <div className="text-right text-zinc-700 text-[12px] font-normal leading-none">Ecommerce</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- right timeline --> */}
            <div className="flex justify-between items-center w-full right-timeline">
              <div className="w-5/12"></div>
              <div className="relative z-10 flex items-center bg-sky-500 w-3 h-3 rounded-full">
              </div>
              <div className="w-5/12">
                <div className="flex flex-col justify-start items-start">
                  <img className="w-6 h-6 rounded-sm" src="/assets/stoqo.png" alt="stoqo" />
                  <div className="flex flex-col justify-start items-start">
                    <div className="text-zinc-700 text-[12px] font-bold leading-none">Software Engineer Intern</div>
                    <div className="text-left text-zinc-700 text-[12px] font-normal leading-none">Stoqo</div>
                    <div className="text-left text-slate-400 text-[12px] font-normal leading-none">Jun 2019 - Aug 2019</div>
                    <div className="text-left text-zinc-700 text-[12px] font-normal leading-none">Logistics</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- left timeline --> */}
            <div className="flex justify-between flex-row-reverse items-center w-full">
              <div className="w-5/12"></div>
              <div className="relative z-10 flex items-center bg-sky-500 w-3 h-3 rounded-full">
              </div>
              <div className="w-5/12">
                <div className="flex flex-col justify-end items-end">
                  <img className="w-6 h-6 rounded-sm" src="/assets/gojek.png" alt="gojek" />
                  <div className="flex flex-col justify-end items-end">
                    <div className="text-right text-zinc-700 text-[12px] font-bold leading-none">Full Stack Engineer Intern</div>
                    <div className="text-right text-zinc-700 text-[12px] font-normal leading-none">Gojek</div>
                    <div className="text-right text-slate-400 text-[12px] font-normal leading-none">Jun 2018 - Aug 2018</div>
                    <div className="text-right text-zinc-700 text-[12px] font-normal leading-none">Transport</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="skills" className="flex flex-col">
        <div className="mx-auto text-zinc-700 text-[20px] font-semibold leading-loose">Skills</div>
        <div className="mx-auto">
          <div className="my-2">
            <SkillCard img="/assets/fe-icon.svg" title="Front-End Engineer" content="Javascript, React, CSS" />
          </div>
          <div className="my-2">
            <SkillCard img="/assets/be-icon.svg" title="Back-End Engineer" content="Golang, Java, PHP" />
          </div>
        </div>
      </section>

      <section id="portfolio" className="flex flex-col">
        <div className="mx-auto text-zinc-700 text-[20px] font-semibold leading-loose">Portfolio</div>
        <div className="left-[20px]  flex-col justify-start items-center gap-4 inline-flex">
          <PortfolioCard title="Shopee Barokah" details="Shopee Barokah provides halal-certified products. Help product sales to grow by 200%." />
          <PortfolioCard title="Cari Kerja" details="Lumina helps companies find the best talent. Help grow business partner by 200%." />
          <PortfolioCard title="Gopay Insurance" details="Gopay is the safest payment method. Help companies acquire and retain customer by 200% " />
          <a href="https://github.com/wajdifarid" target="_blank" rel="noreferrer">
            <SecondaryButton content="See Github" />
          </a>
        </div>
      </section>

      <section id="blogs" className="flex flex-col">
        <div className="mx-auto text-zinc-700 text-[20px] font-semibold leading-loose">Blog</div>
        <div className="left-[20px]  flex-col justify-start items-center gap-4 inline-flex">
          <BlogCard title="An algorithm for checking palindrome numbers" publishDate="29 June 2023" />
          <BlogCard title="The Benefits of Automated Data Capture" publishDate="13 June 2023" />
          <BlogCard title="Data Transformation 101" publishDate="29 June 2023" />
          <a href="https://wajdifarid.substack.com/" target="_blank" rel="noreferrer">
            <SecondaryButton content="Visit Blog" />
          </a>
        </div>
      </section>

      <section id="contact" className="flex flex-col">
        <div className="mx-auto flex-col justify-start items-center gap-1 inline-flex my-2">
          <div className="text-zinc-700 text-[20px] font-semibold leading-loose">Contact Me</div>
          <div className="w-60 text-center text-zinc-700 text-[14px] font-normal leading-normal">I’m available for consultations, collaborations, and coffee! ☕</div>
        </div>
        <div className="left-[40px]  flex-col justify-start items-center gap-4 inline-flex my-2">
          {formStatus === 'success' && (
            <div>Form submitted successfully!</div>
          )}

          <form onSubmit={handleSubmit}>
            <div>
              <div className="text-left text-zinc-700 text-[14px] font-normal leading-normal">Full Name</div>
              <input className="w-60 px-3 py-2 bg-white rounded border border-slate-100 justify-start items-center gap-2.5 inline-flextext-center text-[14px] font-normal leading-normal focus:outline-sky-500" placeholder="Full name" name="name" required />
            </div>
            <div>
              <div className="text-left text-zinc-700 text-[14px] font-normal leading-normal">Email</div>
              <input className="w-60 px-3 py-2 bg-white rounded border border-slate-100 justify-start items-center gap-2.5 inline-flextext-center text-[14px] font-normal leading-normal focus:outline-sky-500" placeholder="Email" type="email" name="email" required />
            </div>
            <div>
              <div className="text-left text-zinc-700 text-[14px] font-normal leading-normal">Subject</div>
              <input className="w-60 px-3 py-2 bg-white rounded border border-slate-100 justify-start items-center gap-2.5 inline-flextext-center text-[14px] font-normal leading-normal focus:outline-sky-500" placeholder="Subject" name="subject" required />
            </div>
            <div>
              <div className="text-left text-zinc-700 text-[14px] font-normal leading-normal">Message</div>
              <textarea className="w-60 h-20 px-3 py-2 bg-white rounded border border-slate-100 justify-start items-start gap-2.5 inline-flex text-left text-[14px] font-normal leading-normal focus:outline-sky-500" placeholder="Message" name="message"
                rows="5" cols="33" required>
              </textarea>
            </div>
            <div className="mx-auto px-10">
              <PrimaryButton content={<input className="h-full w-full" type="submit" value="Send Message" />} />
            </div>
          </form>
        </div>
      </section>
      <section className="mt-10">
        <Footer />
      </section>
    </div>);
}
