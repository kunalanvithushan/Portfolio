 
 
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';

 
    const Navbar = () => {
      const [scrollY, setScrollY] = useState(0);
        useEffect(() => {
          const handleScroll = () => {
            setScrollY(window.scrollY);
          };
      
          window.addEventListener('scroll', handleScroll);
      
         
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
      return (
        <>
          <header className={`header_section fixed-top header-dark ${scrollY > 100 ? 'header-scrolled' : ''}`}>

              <div class="container-fluid">
                <nav class="navbar navbar-expand-lg custom_nav-container ">
                  <a class="navbar-brand" href="index.html">
                    <span>
                      Portfolio
                    </span>
                  </a>
       
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class=""> </span>
                  </button>
       
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  ">
                      <li class="nav-item active">
                      <Link
         to="home"
         smooth={true}
         duration={2000}
         offset={-80}
         class="nav-link"
         style={{ cursor: 'pointer' }}
       >Home  </Link>
                      </li>
                      <li class="nav-item">
                      <Link
         to="skills"
         smooth={true}
         duration={2000}
         offset={-80}
         class="nav-link"
         style={{ cursor: 'pointer' }}
       >Skills </Link>
       
                      </li>
                      <li class="nav-item">
                      <Link
         to="projects"
         smooth={true}
         duration={2000}
         offset={-80}
         class="nav-link"
         style={{ cursor: 'pointer' }}
       >Projects </Link>
                      </li>
          <li class="nav-item">     <Link
         to="about"
         smooth={true}
         duration={2000}
         offset={-80}
         class="nav-link"
         style={{ cursor: 'pointer' }}
       >
         About
       </Link>
       </li>
                      <li class="nav-item">
                      <Link
         to="Contact"
         smooth={true}
         duration={2000}
         offset={-80}
         class="nav-link"
         style={{ cursor: 'pointer' }}
       > Contact</Link> 
                      </li>
       
       
       
                    </ul>
                  </div>
                </nav>
              </div>
            </header>
       
 
      </>


    );
  
     
    
    
    
 
};

export default Navbar;
