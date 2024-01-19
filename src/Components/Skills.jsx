import React from "react";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandVscode } from "react-icons/tb";
import { FaSass } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <section id="Skills">
      <div className="skills-container flex flex-row min-h-screen justify-evenly items-center">
        <div className="skill-content flex flex-col justify-center items-center w-3/4  gap-6">
          <div className="skill-heading logo">
            <h1 className="text-3xl font-semibold ">Skills</h1>
          </div>
          <div className="skills-contents flex flex-row justify-between items-center flex-wrap gap-6">
            <div className="icon flex flex-col justify-center items-center">
              {" "}
              <p className="text-7xl">
                {" "}
                <FaGitAlt style={{ color: "	#f14e32" }} />
              </p>
              <p className="icon-name">
                Git
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              {" "}
              <p className="text-7xl">
                <FaGithub style={{ color: "	 #333" }} />
              </p>
              <p className="icon-name">
                Github
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              {" "}
              <p className="text-7xl">
                <TbBrandCpp style={{ color: "	#044F88" }} />
              </p>
              <p className="icon-name">
                C++
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              <p className="text-7xl">
                <TbBrandVscode style={{ color: "#0078d7" }} />
              </p>
              <p className="icon-name">
                Vs Code
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              <p className="text-7xl">
                <FaSass style={{ color: "#c69" }} />
              </p>
              <p className="icon-name">
                Sass
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              <p className="text-7xl">
                <FaReact style={{ color: " #61dbfb" }} />
              </p>
              <p className="icon-name">
                React
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              {" "}
              <p className="text-7xl">
                <FaPython style={{ color: "	#FFE873" }} />
              </p>
              <p className="icon-name">
                Python
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              {" "}
              <p className="text-7xl">
                <FaNodeJs style={{ color: "	#3c873a" }} />
              </p>
              <p className="icon-name">
                Node Js
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              <p className="text-7xl">
                <IoLogoFirebase style={{ color: "#FFCB2B" }} />
              </p>
              <p className="icon-name">
                Firebase
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              <p className="text-7xl">
                <IoLogoJavascript style={{ color: "#F0DB4F" }} />
              </p>
              <p className="icon-name">
                Javascript
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              <p className="text-7xl">
                <FaHtml5 style={{ color: "	#f14e32" }} />
              </p>
              <p className="icon-name">
                HTML
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              {" "}
              <p className="text-7xl">
                <FaCss3 style={{ color: "#264de4" }} />
              </p>
              <p className="icon-name">
                Css
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              {" "}
              <p className="text-7xl">
                <FaBootstrap style={{ color: "#d500f9" }} />
              </p>
              <p className="icon-name">
                Bootstrap
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              <p className="text-7xl">
                <SiMongodb style={{ color: "#589636" }} />
              </p>
              <p className="icon-name">
                Mongo DB
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              {" "}
              <p className="text-7xl">
                <SiExpress />
              </p>
              <p className="icon-name">
                Express Js
              </p>
            </div>
            <div className="icon flex flex-col justify-center items-center">
              {" "}
              <p className="text-7xl">
                <BiLogoTailwindCss style={{ color: "#0ea5e9" }} />
              </p>
              <p className="icon-name">
                Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
