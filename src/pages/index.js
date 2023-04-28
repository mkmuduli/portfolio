import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import { Titillium_Web } from 'next/font/google'

const intoData= {
  name: 'Manoj Muduli',
  description:'I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at',
  company: 'Contentstack',
  companyLink: 'https://www.contentstack.com'
}

const myFont = Titillium_Web({ subsets: ['latin'],  weight: '400' })

export default function Home() {
  return (
    <div className={myFont.className}  >
      <Header />
      <main className="flex flex-col px-10 md:px-20 lg:px-40 xl:px-60 num-head-wrap">
        <Intro {...intoData} />
        <About />
        <Expertise />
        <Work />
        <Contact />
      </main>
    </div>
  );
}
