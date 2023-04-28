import Image from "next/image";

const technologies = [
  "Javascript",
  "React",
  "Node.js",
  "Typescript",
  "RTL",
  "tailwind",
];

const desc = [
  `Hello! My name is Manoj and I enjoy creating things that live on the
internet. My interest in web development started back in 2017 when I
decided to try help my team delivery product as promise — turns out
implement a custom Tag taught me a lot about HTML & CSS!`,
  ` Fast-forward to today, and I’ve had the privilege of working at a
start-up, a huge corporation, and deeply work design system. My main
focus these days is building accessible, inclusive products and
improve performance at Contentstack for a variety of
clients.`,
  `Here are a few technologies I’ve been working with recently:`,
];

const About = () => {
  return (
    <section className="flex flex-col gap-2 2xl:mx-20">
      <h2 className="num-head text-highlight text-bold text-2xl flex items-center">
        About me
      </h2>
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center mt-12">
        <div className="flex flex-col gap-3 max-w-lg text-lg">
          {desc.map((eachDesc, i) => (
            <p key={i}>{eachDesc}</p>
          ))}

          <ul className="grid grid-cols-2 gap-4 text-xs font-semibold w-4/6">
            {technologies.map((eachTech) => {
              return (
                <li className="before:content-['▹'] before:mr-3" key={eachTech}>
                  {eachTech}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:self-start" >
          <div className="relative profile-container">
            <Image
              className="rounded min-w-[200px] md:min-w-[250px]"
              src="https://picsum.photos/id/338/200/200"
              alt="User"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
