import Project from "@/svg/Project";
import Github from "@/svg/github";
import NewTab from "@/svg/newTab";

const projects = [1, 2, 3];

const Work = () => {
  return (
    <section className="flex flex-col gap-2 mt-28">
      <h2 className="num-head text-highlight text-bold text-2xl flex items-center">
        Projects
      </h2>
      <div className="flex flex-row gap-4 mt-10">
        {projects.map((each) => {
          return (
            <div
              className="flex flex-col w-96 border-2 p-8 border-highlight rounded-md"
              key={each}
            >
              <div className="flex items-center flex-row justify-between w-full">
                <Project height="60" width="60" className="text-highlight" />
                <div className="flex flex-row items-center gap-2">
                  <Github height="25" width="25" className="text-highlight" />
                  <NewTab height="25" width="25" className="text-highlight" />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl text-bold ">Keep Clone</h3>
                <p className="mt-2">
                  Embeddable web player widget for Apple Music that lets users
                  log in and listen to full song playback in the browser
                  leveraging MusicKit.js. Read more about this project on
                  9to5Mac.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
