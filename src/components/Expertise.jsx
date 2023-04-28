import Desktop from "@/svg/desktop";
import Web from "@/svg/web";

const expertise = [
  {
    title: "Software Development",
    desc: `Experienced in both functional and OOP by JavaScript, TypeScript. I have experienced on Testing.`,
  },
  {
    title: "Frontend Web",
    desc: `Passionate about UI/UX. Over 6 years of development experience in HTML, CSS, JS, React and NextJS frameworks.`,
  },
];

const Expertise = () => {
  return (
    <section className="flex flex-col gap-2 mt-28 2xl:mx-20 max-w-3xl">
      <h2 className="num-head text-highlight text-bold text-2xl flex items-center">
        My Expertise
      </h2>
      <div className="flex flex-row gap-4 flex-wrap mt-10 w-full justify-center min-[848px]:justify-start">
        {expertise.map((each) => {
          return (
            <div className=" flex flex-col border w-[21rem] rounded-md p-4 border-highlight" key={each.title}>
              <div className="flex flex-row items-center">
                {each.title === "Software Development"?
                  <Desktop
                  height="42"
                  width="42"
                  className="text-highlight"
                />:
                <Web height="42"
                width="42"
                className="fill-highlight text-primary"
                 />
                }
                
                <h3 className=" ml-4 text-2xl text-bold">
                  {each.title}
                </h3>
              </div>
              <div className="mt-4 ml-1">
                {each.desc}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;
