import React from "react";
import "../about.css";
import me from "./img/me.jpeg";
import { ImLocation } from "react-icons/im";
import { GiSmartphone } from "react-icons/gi";
import { GoMail } from "react-icons/go";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { LiaGamepadSolid } from "react-icons/lia";
import Navbar from "./Navbar";
import { BiSwim, BiMusic, BiFootball } from "react-icons/bi";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-500">
      <Navbar></Navbar>

      <div>
        <div class="resume">
          <div class="resume_left">
            <div class="resume_profile">
              <img src={me} alt="profile_pic" />
            </div>
            <div class="resume_content">
              <div class="resume_item resume_info">
                <div class="title">
                  <p class="bold">Juan Sukaton</p>
                  <p class="regular">Front End Developer</p>
                </div>
                <ul>
                  <li>
                    <div class="icon">
                      <i>
                        <ImLocation></ImLocation>
                      </i>
                    </div>
                    <div class="data">
                      rawa indah no 6a <br /> DEPOK
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i>
                        <GiSmartphone></GiSmartphone>
                      </i>
                    </div>
                    <div class="data">081310944727</div>
                  </li>
                  <li>
                    <div class="icon" style={{ padding: "17px" }}>
                      <i>
                        <GoMail></GoMail>
                      </i>
                    </div>
                    <div class="data">sukatonj@gmail.com</div>
                  </li>
                  <li>
                    <div class="icon" style={{ padding: "17px" }}>
                      <i>
                        <SiGithub></SiGithub>
                      </i>
                    </div>
                    <div class="data">github.com/JuanAsDev</div>
                  </li>
                </ul>
              </div>
              <div class="resume_item resume_skills">
                <div class="title">
                  <p class="bold">skill's</p>
                </div>
                <ul>
                  <li>
                    <div class="skill_name">HTML</div>
                    <div class="skill_progress">
                      <span style={{ width: "80%" }}></span>
                    </div>
                    <div class="skill_per">80%</div>
                  </li>
                  <li>
                    <div class="skill_name">CSS</div>
                    <div class="skill_progress">
                      <span style={{ width: "70%" }}></span>
                    </div>
                    <div class="skill_per">70%</div>
                  </li>
                  <li>
                    <div class="skill_name">SASS</div>
                    <div class="skill_progress">
                      <span style={{ width: "70%" }}></span>
                    </div>
                    <div class="skill_per">70%</div>
                  </li>
                  <li>
                    <div class="skill_name">JS</div>
                    <div class="skill_progress">
                      <span style={{ width: "60%" }}></span>
                    </div>
                    <div class="skill_per">60%</div>
                  </li>
                  <li>
                    <div class="skill_name" style={{ marginRight: "10px" }}>
                      JQUERY
                    </div>
                    <div class="skill_progress">
                      <span style={{ width: "55%" }}></span>
                    </div>
                    <div class="skill_per">55%</div>
                  </li>
                  <li>
                    <div class="skill_name" style={{ marginRight: "25px" }}>
                      Bootstrap
                    </div>
                    <div class="skill_progress">
                      <span style={{ width: "75%" }}></span>
                    </div>
                    <div class="skill_per">75%</div>
                  </li>
                </ul>
              </div>
              <div class="resume_item resume_social">
                <div class="title">
                  <p class="bold">Social</p>
                </div>
                <ul>
                  <li>
                    <div class="icon">
                      <i>
                        <FaInstagram></FaInstagram>
                      </i>
                    </div>
                    <div class="data">
                      <p class="semi-bold">Instagram</p>
                      <p>juan.sukaton07</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="resume_right">
            <div class="resume_item resume_about">
              <div class="title">
                <p class="bold">About me</p>
              </div>
              <p>
                Saya adalah seorang Front End Developer yang berkomitmen untuk
                menciptakan pengalaman pengguna web yang menarik dan responsif.
                Dengan latar belakang dalam pengembangan web dan desain
                antarmuka pengguna, saya memiliki hasrat untuk menciptakan situs
                web yang mudah digunakan, estetis menarik, dan dioptimalkan
                dengan baik.
              </p>
            </div>
            <div class="resume_item resume_work">
              <div class="title">
                <p class="bold">Work Experience</p>
              </div>
              <ul>
                <li>
                  <div class="date">2017</div>
                  <div class="info">
                    <p class="semi-bold">Seksi Pelayanan KPP pratama Depok</p>
                  </div>
                </li>
                <li>
                  <div class="date">2021</div>
                  <div class="info">
                    <p class="semi-bold">IT Support RSU ADHYAKSA</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="resume_item resume_education">
              <div class="title">
                <p class="bold">Education</p>
              </div>
              <ul>
                <li>
                  <div class="date">2006 - 2012</div>
                  <div class="info">
                    <p class="semi-bold">Mi Arrahmaniyah</p>
                  </div>
                </li>
                <li>
                  <div class="date">2012 - 2015</div>
                  <div class="info">
                    <p class="semi-bold">MTS Arrahmaniyah</p>
                  </div>
                </li>
                <li>
                  <div class="date">2015 - 2018</div>
                  <div class="info">
                    <p class="semi-bold">SMK Arrahmaniyah</p>
                  </div>
                </li>
                <li>
                  <div class="date">2018 - 2021</div>
                  <div class="info">
                    <p class="semi-bold">Bina Sarana Informatika</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="resume_item resume_hobby">
              <div class="title">
                <p class="bold">Hobby</p>
              </div>
              <ul>
                <li>
                  <i>
                    <BiMusic></BiMusic>
                  </i>
                </li>
                <li>
                  <i>
                    <LiaGamepadSolid></LiaGamepadSolid>
                  </i>
                </li>
                <li>
                  <i>
                    <BiSwim></BiSwim>
                  </i>
                </li>
                <li>
                  <i>
                    <BiFootball></BiFootball>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
