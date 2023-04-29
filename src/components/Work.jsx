import Project from "@/svg/Project";
import Github from "@/svg/github";
import NewTab from "@/svg/newTab";

const projects = [1, 2, 3];

const Work = () => {
  return (
    <section className="flex flex-col gap-2 mt-40 ">
      <h2 className="num-head-v2 text-highlight text-bold text-3xl text-center">
        Projects
      </h2>
      <div className="flex flex-col min-[1150px]:flex-row gap-4 mt-20 flex-wrap items-center">
        {projects.map((each) => {
          return (
            <div
              className="flex flex-col border-2 p-8 border-highlight rounded-md min-[1150px]:flex-1 max-w-[450px] min-[1150px]:max-w-none"
              key={each}
            >
              <div className="flex items-center flex-row justify-between">
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
