const Contact = () => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Get in touch</h2>
      <p className="text-gray-700 lg:text-lg">
        Do you have an interesting collaboration opportunity or idea you'd like to discuss? Feel free
        to reach me at{" "}
        <a href="mailto:nilubava@gmail.com" className="font-medium">
          nilubava@gmail.com
        </a>
        . You can also find me on{" "}
        <a
          href="https://twitter.com/nilubava"
          target="_blank"
          className="font-medium"
        >
          Twitter
        </a>
        ,{" "}
        <a
          href="https://github.com/nilubava"
          target="_blank"
          className="font-medium"
        >
          Github
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/nilufar-bava/"
          target="_blank"
          className="font-medium"
        >
          Linkedin
        </a>
        .
      </p>
    </div>
  );
};

export default Contact;
