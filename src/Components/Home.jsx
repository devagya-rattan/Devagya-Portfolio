import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import myimage from "./myimage.jpeg";
const Home = () => {
  return (
    <>
      <section id="Home">
        <div class="home-container flex flex-row min-h-screen justify-evenly items-center">
          <div className=" info info flex flex-col justify-center items-center w-1/2 gap-6 text-2xl text-center ">
            <div className="logo">Devagya Rattan</div>
            <p>
              Hi, Devagya Rattan here, currently aiming grow in tech field
              professionally. I love to contribute in opensource projects and
              work collaboratively in a team. I am consistently learning new
              technologies and love working for my passion.
            </p>
            <div className="links flex flex-row justify-center items-center gap-6" target ="blank">
              <a href="https://www.linkedin.com/in/devagya-rattan-050b30249/" target="blank">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/devagya-rattan" target ="blank">
                <FaGithub />
              </a>
              <a href="https://twitter.com/home" target ="blank">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="my_image">
            <img src={myimage} alt="image" className="myimage"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
