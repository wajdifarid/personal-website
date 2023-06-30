import Button from './components/Button'
import NavBar from './components/NavBar'
import SkillCard from './components/SkillCard'
import Footer from './components/Footer'
import BlogCard from './components/BlogCard'
import PortfolioCard from "./components/PortfolioCard"

export default function HomePage() {
  return (
    <div className="bg-white">
      <NavBar />
      <section className="flex flex-col my-4">
        <img className="mx-auto min-h-[200px]" src="https://via.placeholder.com/148x200" alt="Farid"/>
        <div className="mx-auto text-zinc-700 text-[20px] font-bold leading-loose">Hi, I’m Farid Wajdi</div>
        <div className="mx-auto text-zinc-700 text-[14px] font-normal leading-normal">Full-stack Software Engineer</div>
        <div className="mx-auto w-60 left-[40px] text-center text-slate-400 text-[14px] font-normal leading-normal">I like to solve problem and build product which leaves an impact on people lives. Based in Jakarta 🇮🇩</div>
        <div className="flex mx-16">
          <div className="px-4 py-2  bg-sky-500 rounded justify-center items-center gap-2.5">
            <div className="text-center text-white text-[14px] font-normal leading-normal">Contact Me</div>
          </div>
          <Button content="See Portfolio" />
        </div>
      </section>
      <section>
        <div className="left-[104px]  text-zinc-700 text-[20px] font-semibold leading-loose">Experiences</div>
        <div className="w-[265px] h-[392px] left-[28px] ">
          <div className="left-[154px] top-0  flex-col justify-start items-start gap-1 inline-flex">
            <img className="w-6 h-6 rounded-sm" src="https://via.placeholder.com/24x24" />
            <div className="flex-col justify-start items-start flex">
              <div className="text-zinc-700 text-[12px] font-bold leading-none">Software Engineer</div>
              <div className="text-center text-zinc-700 text-[12px] font-normal leading-none">Lumina</div>
              <div className="text-center text-zinc-700 text-[12px] font-normal leading-none">Job Platform</div>
              <div className="text-center text-slate-400 text-[12px] font-normal leading-none">Jan 2022 - Jun 2023</div>
            </div>
          </div>
          <div className="left-[154px]  flex-col justify-start items-start gap-1 inline-flex">
            <img className="w-6 h-6 rounded-sm" src="https://via.placeholder.com/24x24" />
            <div className="flex-col justify-start items-start flex">
              <div className="text-zinc-700 text-[12px] font-bold leading-none">Software Engineer</div>
              <div className="text-center text-zinc-700 text-[12px] font-normal leading-none">Stoqo</div>
              <div className="text-center text-zinc-700 text-[12px] font-normal leading-none">Logistics</div>
              <div className="text-center text-slate-400 text-[12px] font-normal leading-none">Jun - Aug 2019</div>
            </div>
          </div>
          <div className="left-0  flex-col justify-start items-end gap-1 inline-flex">
            <img className="w-6 h-6 rounded-sm" src="https://via.placeholder.com/24x24" />
            <div className="flex-col justify-start items-end flex">
              <div className="text-zinc-700 text-[12px] font-bold leading-none">Software Engineer</div>
              <div className="text-center text-zinc-700 text-[12px] font-normal leading-none">Shopee</div>
              <div className="text-center text-zinc-700 text-[12px] font-normal leading-none">Ecommerce</div>
              <div className="text-center text-slate-400 text-[12px] font-normal leading-none">Jan 2020 - Jun 2022</div>
            </div>
          </div>
          <div className="left-0  flex-col justify-center items-end gap-1 inline-flex">
            <img className="w-6 h-6 rounded-sm" src="https://via.placeholder.com/24x24" />
            <div className="flex-col justify-center items-end flex">
              <div className="text-zinc-700 text-[12px] font-bold leading-none">Software Engineer</div>
              <div className="text-center text-zinc-700 text-[12px] font-normal leading-none">Gojek</div>
              <div className="text-center text-zinc-700 text-[12px] font-normal leading-none">Transport</div>
              <div className="text-center text-slate-400 text-[12px] font-normal leading-none">Jun - Aug 2018</div>
            </div>
          </div>
          <div className="left-[126px] flex-col justify-start items-start inline-flex">
            <div className="w-3 h-[100px] relative">
              <div className="w-1 h-[100px] left-[4px] top-0  bg-zinc-200 rounded-tl-lg rounded-tr-lg" />
              <div className="w-3 h-3 left-0 top-0  bg-sky-500 rounded-full" />
            </div>
            <div className="w-3 h-[100px] relative">
              <div className="w-1 h-[100px] left-[4px] top-0  bg-zinc-200 rounded-tl-lg rounded-tr-lg" />
              <div className="w-3 h-3 left-0 top-0  bg-sky-500 rounded-full border border-sky-500" />
            </div>
            <div className="w-3 h-[100px] relative">
              <div className="w-1 h-[100px] left-[4px] top-0  bg-zinc-200 rounded-tl-lg rounded-tr-lg" />
              <div className="w-3 h-3 left-0 top-0  bg-sky-500 rounded-full" />
            </div>
            <div className="w-3 h-3 bg-sky-500 rounded-full" />
          </div>
        </div>
      </section>

      <section>
        <div className="left-[136px]  text-zinc-700 text-[20px] font-semibold leading-loose">Skills</div>
        <div className="left-[43.50px]  flex-col justify-start items-start gap-4 inline-flex">
          <SkillCard title="Front-End Engineer" content="Javascript, React, CSS" />
          <SkillCard title="Back-End Engineer" content="Golang, Java, PHP" />
        </div>
      </section>

      <section>
        <div className="left-[119px]  text-zinc-700 text-[20px] font-semibold leading-loose">Portfolio</div>
        <div className="left-[20px]  flex-col justify-start items-center gap-4 inline-flex">
          <PortfolioCard title="Shopee Barokah" details="Shopee Barokah provides halal-certified products. Help product sales to grow by 200%." />
          <PortfolioCard title="Cari Kerja" details="Lumina helps companies find the best talent. Help grow business partner by 200%." />
          <PortfolioCard title="Gopay Insurance" details="Gopay is the safest payment method. Help companies acquire and retain customer by 200% " />
          <Button content="See Github" />
        </div>
      </section>

      <section>
        <div className="left-[139px]  text-zinc-700 text-[20px] font-semibold leading-loose">Blog</div>
        <div className="left-[20px]  flex-col justify-start items-center gap-4 inline-flex">
          <BlogCard title="An algorithm for checking palindrome numbers" publishDate="29 June 2023" />
          <BlogCard title="The Benefits of Automated Data Capture" publishDate="13 June 2023" />
          <BlogCard title="Data Transformation 101" publishDate="29 June 2023" />
          <Button content="Visit Blog" />
        </div>
      </section>

      <section>
        <div className="left-[40px]  flex-col justify-start items-center gap-1 inline-flex">
          <div className="text-zinc-700 text-[20px] font-semibold leading-loose">Contact Me</div>
          <div className="w-60 text-center text-zinc-700 text-[14px] font-normal leading-normal">I’m available for consultations, collaborations, and coffee! ☕</div>
        </div>
        <div className="left-[40px]  flex-col justify-start items-center gap-4 inline-flex">
          <input className="w-60 px-3 py-2 bg-white rounded border border-slate-100 justify-start items-center gap-2.5 inline-flextext-center text-[14px] font-normal leading-normal" placeholder="Full name" />
          <input className="w-60 px-3 py-2 bg-white rounded border border-slate-100 justify-start items-center gap-2.5 inline-flextext-center text-[14px] font-normal leading-normal" placeholder="Email" type="email" />
          <input className="w-60 px-3 py-2 bg-white rounded border border-slate-100 justify-start items-center gap-2.5 inline-flextext-center text-[14px] font-normal leading-normal" placeholder="Subject" />
          <textarea className="w-60 h-20 px-3 py-2 bg-white rounded border border-slate-100 justify-start items-start gap-2.5 inline-flex text-left text-[14px] font-normal leading-normal" placeholder="Message"
            rows="5" cols="33">
          </textarea>
          <div className="w-[120px] px-4 py-2 bg-sky-500 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-[14px] font-normal leading-normal">Send Message</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);
}
