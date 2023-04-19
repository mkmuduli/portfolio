const Intro = (props) => {
  const { name, description, company, companyLink } = props;
  return (
    <section className="h-screen flex flex-col justify-center" >
      <h1>Hi, my name is</h1>
      <h2>{name}</h2>
      <h3>I build this for web.</h3>
      <p>
        {description} <a href={companyLink}>{company}</a>
      </p>
      <a href="">Check out my course</a>
    </section>
  );
};

export default Intro;
