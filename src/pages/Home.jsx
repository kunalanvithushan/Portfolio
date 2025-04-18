
import React,{useState} from 'react';
import GIT from "../images/github_git_icon_145985 (1).png"
import netbeans from "../images/netbeans_94416.png"
import postman from "../images/postman_macos_bigsur_icon_189815.png"
import vscode from "../images/folder_type_vs_icon_129803.png"
import JS from "../images/javascript_icon_130900.png"
import react from "../images/react_original_logo_icon_146374.png"
import bootstrap from "../images/postman_macos_bigsur_icon_189815.png"
import express from "../images/expressjs_logo_icon_169185.png"
import sequelize from "../images/sequelize_original_logo_icon_146348.png"
import Java from "../images/java_original_wordmark_logo_icon_146459.png"
import herobg from "../images/hero-bg.png"
import MY  from "../images/Programming-pana.png"
import Profile from "../images/My.jpg"
import Resume from "../assets/Kunalan Vithushan Resume.pdf"
import { projects } from "../data/projects";
const Home = () => {
  const [viewAll, setViewAll] = useState(false);

  const visibleProjects = viewAll ? projects : projects.slice(0, 2);
  return (
    <>
   

    <div class="hero_area">

      <div class="hero_bg_box">
        <div class="bg_img_box">
         <img src={herobg} alt="" />
       </div>
     </div>


    

     <section id="home" class="slider_section ">
       <div id="customCarousel1" class="carousel slide" data-ride="carousel">
         <div class="carousel-inner">

           <div class="container ">
             <div class="row">
               <div class="col-md-6 ">
                 <div class="detail-box">
                   <p>
                    Hello, i am
                   </p> <h1>
                     KUNALAN <br />
                     VITHUSHAN
                   </h1>
                   <img class='profile-img' src={Profile} />
                   <p>
                     a Full-Stack Developer
                   </p>

                 </div>
                    <a
                     href={Resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Resume
                    </a>

                    <a
                      href={Resume}
                      download
                      className="btn btn-outline-secondary"
                    >
                      Download Resume
                    </a>

               </div>
               <div class="col-md-6">
                 <div class="img-box">
                   <img src={MY} alt="" />
                 </div>
               </div>
             </div>
           </div>


           <div class="carousel-item">
             <div class="container ">

             </div>
           </div>
         </div>

       </div>

     </section>

   </div>


   <section id="skills" class="service_section layout_padding">
     <div class="service_container">
       <div class="container">
         <div class="heading_container heading_center">
           <h2>
             Skills   Tech Stack   <span></span>
           </h2>

         </div>


         <div class="row">
           <div class="col-md-6">
             <div class="box custom-box">
               <div class="detail-box">
                 <h5>Frontend Development</h5>
                 <p>
                   <img src={react} alt="React" width="60" /> React.js &nbsp;
                   <img src={bootstrap} alt="Bootstrap" width="60" /> Bootstrap
                 </p>
               </div>
             </div>
           </div>

           <div class="col-md-6">
             <div class="box custom-box">
               <div class="detail-box">
                 <h5>Backend Development</h5>
                 <p>
                   <img src={express} alt="Express" width="60" /> Express.js &nbsp;
                   <img src={sequelize} alt="Sequelize" width="60" /> Sequelize
                 </p>
               </div>
             </div>
           </div>

           <div class="col-md-6">
             <div class="box custom-box">
               <div class="detail-box">
                 <h5>Programming Languages</h5>
                 <p>
                   <img src={JS} alt="JS" width="60" /> JavaScript &nbsp;
                   <img src={Java} alt="Java" width="60" /> Java
                 </p>
               </div>
             </div>
           </div>

           <div class="col-md-6">
             <div class="box custom-box">
               <div class="detail-box">
                 <h5>Tools & DevOps</h5>
                 <p>
                   <img src={GIT} alt="Git" width="60" /> Git & GitHub &nbsp;
                   <img src={vscode} alt="VS Code" width="60" /> VS Code &nbsp;
                   <img src={postman} alt="Postman" width="60" /> Postman &nbsp;
                   <img src={netbeans} alt="NetBeans" width="60" /> NetBeans
                 </p>
               </div>
             </div>
           </div>






         </div>


       </div>
     </div>
   </section>

 
   <section id="projects" className="about_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            My <span>Project</span>
          </h2>
        </div>
        <div className="row">
          {visibleProjects.map((project, index) => (
            <div className="col-md-12" key={index}>
              <div className="project-box">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p>
                  <strong>Tech:</strong> {project.tech}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

     


<div className="btn-box mt-4 text-center">
          <button onClick={() => setViewAll(!viewAll)} className="btn btn-secondary">
            {viewAll ? "Show less" : "View all"}
          </button>
        </div>
      </div>
    </section>


   <section id='about' class="why_section layout_padding">
     <div class="container">
       <div class="heading_container heading_center">
         <h2>
           About <span>Me</span>
         </h2>
       </div>
       <div class="row justify-content-center mt-4">
         <div class="col-md-10 content_box">

           <p  >
             Hello! I'm a passionate and driven software developer with a love for building modern, user-friendly web applications. From the moment I wrote my first line of code, I knew I wanted to make a mark in the tech world.
             <br /><br />
             I completed my Higher National  diploma in IT at <strong>[ATI MANNAR]</strong>, which was a 2.5-year journey filled with hands-on projects, deep technical learning, and real-world practice. My main focus areas were web development, software engineering, and databases.
             <br /><br />
             I dream of becoming apected name in the IT industry — not just writing code, but leading innovation and inspiring others. I believe in the power of technology to change lives, and I’m determined to contribute to that transformation through creativity, consistency, and constant learning.
           </p>


           <div class="container">

             <div class="education_section mt-5">
               <h4>Education</h4>
               <ul>
                 <li>
                   <strong>Degree:</strong> Diploma in Information Technology <br />
                   <strong>Institution:</strong> SLIATE ATI Mannar  <br />
                   <strong>Duration:</strong> 2.5 Years  <br />
                   <strong>Focus Areas:</strong> Web Development, Programming, Software Engineering, Databases  <br />
                   <strong>Location:</strong>Uyilankulam, Mannar, Sri lanka <br />
                 </li>
               </ul>
             </div>


             <div class="experience_section mt-5">
               <h4>Experience</h4>
               <ul>
                 <li>
                   <strong>Intern – Kelaxa Pvt Ltd</strong><br />
                   October 2024 – March 2025<br />
                   - Assisted in developing a responsive web application using ReactJS and Express.js.<br />
                   - Worked with senior developers to troubleshoot bugs and optimize UI components.<br />
                   - Gained hands-on experience with REST APIs, JWT, OAuth, Git workflows, and Agile development.<br />
                   <div class="email"> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kelaxa.vav@gmail.com&su=Hello&body=Hello." target="_blank">

                     kelaxa.vav@gmail.com</a></div>
                 </li>
               </ul>
             </div>
           </div>

         </div>
       </div>

       
     </div>
   </section>









   <section id="Contact" class="info_section layout_padding2">
     <div class="container">
       <div class="row">
         <div class="col-md-6 col-lg-3 info_col">
           <div class="info_contact">
             <h4>
               Contact
             </h4>
             <div class="contact_link_box">
               <a href="">
                 <i class="fa fa-map-marker" aria-hidden="true"></i>
                 <span>
                   Location
                 </span>
               </a>
               <a href="">
                 <i class="fa fa-phone" aria-hidden="true"></i>
                 <span>
                   Call +94764314582
                 </span>
               </a>
               <a href="">
                 <i class="fa fa-envelope" aria-hidden="true"></i>
                 <span>
                   <a href='https://mail.google.com/mail/?view=cm&fs=1&to=kunalanvithusan@gmail.com&su=Hello&body=HelloVithushan.'>kunalanvithusan@gmail.com</a>
                 </span>
               </a>
             </div>
           </div>
           <div class="info_social">
             <a href="https://www.facebook.com/share/15GNXGofG1/">
               <i class="fa fa-facebook" aria-hidden="true"></i>
             </a>
             <a href="https://github.com/kunalanvithushan">
               <i class="fa fa-github" aria-hidden="true"></i>
             </a>
             <a href="http://www.linkedin.com/in/kunalan-vithushan">
               <i class="fa fa-linkedin" aria-hidden="true"></i>
             </a>
             <a href="https://www.instagram.com/kunanlan_vithusan?igsh=MTA2cmthY3RtcXdmYw==">
               <i class="fa fa-instagram" aria-hidden="true"></i>
             </a>
           </div>
         </div>
         <div class="col-md-6 col-lg-3 info_col">
   <div class="info_detail">
     <h4> info</h4>
     <p>
        portfolio! Here, you can find all the latest updates and projects I’ve worked on, directly sent to your inbox. 
       Whether it's about web development, design, or tech tips, I send out regular newsletters to keep you in the loop.
     </p>
   </div>
</div>
 
       
       </div>
     </div>
   </section>




   
  
</>

 
  );
};

export default Home;
 


 
 
