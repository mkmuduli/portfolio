

const Contact = () => {
    return (
      <section className="flex flex-col gap-2 mt-32 items-center">
        <h2 className="num-head-v2 text-xl font-bold">
        What’s Next?
        </h2>
        <h3 className="text-highlight text-semibold-2" >
        Get In Touch
        </h3>
        <p className="max-w-2xl text-center font-semibold text-primary">
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <a className="border-2 border-highlight px-9 py-3 rounded-md text-md  text-highlight w-max mt-8 font-bold" href="">Say Hello</a>

        <p className="text-highlight font-bold mt-20 mb-2" >Designed & Built by Manoj Muduli</p>
      </section>
    );
  };
  
  export default Contact;