const Intro = (props) => {
  const { name, description, company, companyLink } = props;
  return (
    <section className="h-screen flex flex-col justify-center gap-4" >
      <h1 className="text-highlight" >Hi, my name is</h1>
      <h2 className="text-4xl text-bold md:text-bold-2 text-highlight leading-none" >{name}.</h2>
      <h3 className="text-4xl text-bold md:text-bold-2 leading-none" >I build this for the web.</h3>
      <p className="text-lg leading-normal font-extralight max-w-[33rem]" >
        {description} <a className="text-highlight" target="_blank"  href={companyLink}>{company}</a>
      </p>
      <a className="border-2 border-highlight px-9 py-3 rounded-md text-highlight w-max mt-8" href="">Check out my course</a>
    </section>
  );
};

export default Intro;
