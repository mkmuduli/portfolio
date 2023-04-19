import Header from "@/components/Header";
import Intro from "@/components/Intro";

const intoData= {
  name: 'Manoj Muduli',
  description:'I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at',
  company: 'Contentstack',
  companyLink: 'https://www.contentstack.com'
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex">
        <Intro {...intoData} />
      </main>
    </>
  );
}
