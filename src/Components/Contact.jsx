import React from "react";

const Contact = () => {
  return (
    <section id="Contact">
      <div className="contact-container flex flex-row min-h-screen justify-evenly items-center">
        <div className="contact-content flex flex-row justify-between items-center w-3/4 gap-6 ">
          <div className="contact-heading">
            <h1 className="text-5xl font-semibold ">Get In Touch</h1>
          </div>
          <div className="contact-paragraphs w-1/2">
            <div className="contact-p text-3xl">
              <p>
                Have a project for me? I would be pleased to work with you. Let
                me Know How can i contribute to you projects{" "}
              </p>
            </div>
            <div className="contact-links flex flex-col justify-center items-start gap-2 text-2xl">
              <a href="https://www.linkedin.com/in/devagya-rattan-050b30249/">
                Linkedin
              </a>
              <a href="https://github.com/devagya-rattan">Github</a>
              <a href="/">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
