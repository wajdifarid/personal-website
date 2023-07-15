import { PrimaryButton, SecondaryButton } from './components/Button'

import NavBar from './components/NavBar'
import SkillCard from './components/SkillCard'
import Footer from './components/Footer'
import BlogCard from './components/BlogCard'
import PortfolioCard from "./components/PortfolioCard"
import DesktopNotificationWIP from "./components/DesktopNotificationWIP";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  return (
    <div className="bg-white">
      <NavBar />
      <DesktopNotificationWIP/>
      <section className="flex flex-col my-8">
        <img className="mx-auto h-36 rounded-full lg:h-72" src="/assets/profile-picture.jpg" alt="Farid Wajdi" />
        <div className="mx-auto text-zinc-700 text-[20px] font-bold leading-loose">Hi, I’m Farid Wajdi</div>
        <div className="mx-auto text-zinc-700 text-[14px] font-normal leading-normal">Full-Stack Software Engineer</div>
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
      <section id="experiences" className="flex flex-col my-12">
        <div className="mx-auto font-bold text-zinc-700 text-[1.25rem] leading-loose">Experiences</div>
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
                  <div className="flex flex-col justify-start items-start w-40 max-w-full">
                    <div className="text-zinc-700 text-[12px] font-bold leading-4">Software Engineer</div>
                    <div className="text-left text-zinc-700 text-[12px] font-normal leading-4">Lumina (YC W22)</div>
                    <div className="text-left text-slate-400 text-[12px] font-normal leading-4">Feb 2022 - May 2023</div>
                    <div className="text-left  text-zinc-700 text-[12px] font-normal leading-4">Lumina is a job platform in Southeast Asia with 1 million workers. Backed by Y-Combinator, Alpha JWC, Monk's Hill Ventures, Goodwater Capital, and SWC Global</div>
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
                  <div className="flex flex-col justify-end items-end w-40 max-w-full">
                    <div className="text-right text-zinc-700 text-[12px] font-bold leading-4">Software Engineer</div>
                    <div className="text-right text-zinc-700 text-[12px] font-normal leading-4">Shopee</div>
                    <div className="text-right text-slate-400 text-[12px] font-normal leading-4">Sep 2020 - Jan 2022</div>
                    <div className="text-right text-zinc-700 text-[12px] font-normal leading-4">Shopee is a leading e-commerce platform in Southeast Asia and Taiwan, providing a secure and fast online shopping experience. Shopee is a part of Sea, a company listed on the NYSE under the symbol SE</div>
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
                  <div className="flex flex-col justify-start items-start w-40 max-w-full">
                    <div className="text-zinc-700 text-[12px] font-bold leading-4">Software Engineer Intern</div>
                    <div className="text-left text-zinc-700 text-[12px] font-normal leading-4">Stoqo</div>
                    <div className="text-left text-slate-400 text-[12px] font-normal leading-4">Jun 2019 - Aug 2019</div>
                    <div className="text-left text-zinc-700 text-[12px] font-normal leading-4">STOQO streamlines the F&B supply chain and empowers small businesses with quality ingredients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- left timeline --> */}
            <div className="flex justify-between flex-row-reverse items-center">
              <div className="w-5/12"></div>
              <div className="relative z-10 flex items-center bg-sky-500 w-3 h-3 rounded-full">
              </div>
              <div className="w-5/12">
                <div className="flex flex-col justify-end items-end">
                  <img className="w-6 h-6 rounded-sm" src="/assets/gojek.png" alt="gojek" />
                  <div className="flex flex-col justify-end items-end w-40 max-w-full">
                    <div className="text-right text-zinc-700 text-[12px] font-bold leading-4">Full Stack Engineer Intern</div>
                    <div className="text-right text-zinc-700 text-[12px] font-normal leading-4">Gojek</div>
                    <div className="text-right text-slate-400 text-[12px] font-normal leading-4">Jun 2018 - Aug 2018</div>
                    <div className="text-right text-zinc-700 text-[12px] font-normal leading-4">Gojek is the top on-demand platform in Southeast Asia, providing transportation, food delivery, logistics, and more. Notable investors include Google, Tencent, JD.com, Mitsubishi Corporation, and Visa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="skills" className="flex flex-col my-12">
        <div className="mx-auto text-zinc-700 text-[20px] font-bold leading-loose">Skills</div>
        <div className="mx-auto">
          <div className="m-2">
            <SkillCard img="/assets/fe-icon.svg" title="Front-End Engineer" content="React, Tailwind, HTML, CSS, Javascript" />
          </div>
          <div className="m-2">
            <SkillCard img="/assets/be-icon.svg" title="Back-End Engineer" content="Python, Golang, JavaScript, PostgreSQL, Redis" />
          </div>
          <div className="m-2">
            <SkillCard img="/assets/devops-icon.svg" title="DevOps Engineer" content="AWS, GCP, Github Actions, Terraform" />
          </div>
        </div>
      </section>

      <section id="portfolio" className="flex flex-col my-12">
        <div className="mx-auto text-zinc-700 text-[20px] font-bold leading-loose">Portfolio</div>
        <div className="flex-col justify-start items-center gap-4 inline-flex">
          <a href="https://github.com/wajdifarid/pick-up-turn" target="_blank" rel="noreferrer">
            <PortfolioCard imgSrc="/assets/pickup-turn.jpg" title="Pickup Turn" details="Displays the order in which individuals from a group take their turns. It had 3 active users for several months" />
          </a>
          <a href="https://github.com/wajdifarid" target="_blank" rel="noreferrer">
            <SecondaryButton content="See Github" />
          </a>
        </div>
      </section>

      <section id="blogs" className="flex flex-col my-12">
        <div className="mx-auto text-zinc-700 text-[20px] font-bold leading-loose">Blog</div>
        <div className="left-[20px]  flex-col justify-start items-center gap-4 inline-flex">
          <a href="https://wajdifarid.substack.com/p/coming-soon" target="_blank" rel="noreferrer">
            <BlogCard title="Coming Soon" publishDate="26 June 2023" />
          </a>
          <a href="https://wajdifarid.substack.com/" target="_blank" rel="noreferrer">
            <SecondaryButton content="Visit Blog" />
          </a>
        </div>
      </section>

      <section id="contact">
        <ContactForm/>
      </section>
      <section className="mt-10">
        <Footer />
      </section>
    </div>);
}
