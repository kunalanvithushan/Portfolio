 
import React from 'react';
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
 
const Home = () => {
  
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
                     Hi, i am
                   </p> <h1>
                     KUNALAN <br />
                     VITHUSHAN
                   </h1>
                   <img class='profile-img' src={Profile} />
                   <p>
                     a Full-Stack Developer
                   </p>

                 </div>
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







   <section id='projects' class="about_section layout_padding">
     <div class="container  ">
       <div class="heading_container heading_center">
         <h2>
           My <span>Project</span>
         </h2>

       </div>
       <div class="row">
         <div class="col-md-12 ">
           <div class="project-box">
             <h4>Stock Management System</h4>
             <p>A full-featured CRUD application that helps small businesses manage inventory, categories, and user authentication.</p>
             <p><strong>Tech:</strong> Node.js, Express, MongoDB, React</p>
             <a href="https://github.com/yourusername/stock-management" target="_blank" class="btn btn-primary">View on GitHub</a>
           </div>
         </div>
         <div class="col-md-12 ">
           <div class="project-box">
             <h4>Portfolio Website</h4>
             <p>A responsive personal portfolio website built using React and Vite, showcasing projects, skills, and contact form.</p>
             <p><strong>Tech:</strong> React, Vite, Tailwind CSS</p>
             <a href="https://github.com/yourusername/portfolio" target="_blank" class="btn btn-primary">View on GitHub</a>
           </div>
         </div>
       </div>


       <div class="col-md-12 ">
         <div class="project-box">
           <h4>Portfolio Website</h4>
           <p>A responsive personal portfolio website built using React and Vite, showcasing projects, skills, and contact form.</p>
           <p><strong>Tech:</strong> React, Vite, Tailwind CSS</p>
           <a href="https://github.com/yourusername/portfolio" target="_blank" class="btn btn-primary">View on GitHub</a>
         </div>
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

       <div class="btn-box mt-4 text-center">
         <a href="#projects">
           View My Projects
         </a>
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
             <a href="">
               <i class="fa fa-facebook" aria-hidden="true"></i>
             </a>
             <a href="">
               <i class="fa fa-twitter" aria-hidden="true"></i>
             </a>
             <a href="">
               <i class="fa fa-linkedin" aria-hidden="true"></i>
             </a>
             <a href="">
               <i class="fa fa-instagram" aria-hidden="true"></i>
             </a>
           </div>
         </div>
         <div class="col-md-6 col-lg-3 info_col">
           <div class="info_detail">
             <h4>
               Info
             </h4>
             <p>
               necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
             </p>
           </div>
         </div>
         <div class="col-md-6 col-lg-2 mx-auto info_col">
           <div class="info_link_box">
             <h4>
               Links
             </h4>
             <div class="info_links">
               <a class="active" href="index.html">
                 Home
               </a>
               <a class="" href="about.html">
                 Skills
               </a>
               <a class="" href="service.html">
                 Project
               </a>
               <a class="" href="why.html">
                 about
               </a>
               <a class="" href="team.html">
                 Contact
               </a>
             </div>
           </div>
         </div>
         <div class="col-md-6 col-lg-3 info_col ">
           <h4>
             Subscribe
           </h4>
           <form action="#">
             <input type="text" placeholder="Enter email" />
             <button type="submit">
               Subscribe
             </button>
           </form>
         </div>
       </div>
     </div>
   </section>




   
  
</>

 
  );
};

export default Home;
 


 
 
