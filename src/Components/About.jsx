import React from "react";

const About = () => {
  return (
    <section id="About">
      <div className="about-container flex flex-row min-h-screen justify-evenly items-center">
        <div className="about-content flex flex-col justify-center items-center w-3/4  text-2xl gap-6">
          <div className="about-heading logo">
            <h1 className="text-3xl font-semibold">About Me</h1>
          </div>
          <div className="about-content">
            <p>
              Hi, I am Devagya Rattan a machine learning, web development
              enthusiastic . I an currently pursuing my bachelor's degree in
              electronics and communication from Shri Mata Vaishno Devi
              University, Katra I also love to built web sites and looking
              forward to grow professionally in my domain. I am very passionate
              working in tech industry and upgrading my skills on a regular
              basis.Currently learning machine Learning and Artificial
              intelligence , which interests me a lot. I hope I could also be a
              stepping stair for your company. I love reading books in my free
              time, always eager to learn new things and chase my curiosity. I
              love to develop my intellect and stay aware of of surroundings
              near me. I am a very flexible person who loves to work in a
              collborative environment. 😊
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
