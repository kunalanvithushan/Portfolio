 
 
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
          <header className={`fixed-top header-dark ${scrollY > 100 ? 'header-scrolled' : ''}`}>
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg custom_nav-container">
      <a className="navbar-brand">
        <span>Portfolio</span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  ">
                      <li class="nav-item active">
                      <Link
         to="home"
         smooth={true}
         duration={400}
         offset={-80}
         class="nav-link"
         style={{ cursor: 'pointer' }}
       >Home  </Link>
                      </li>
                      <li class="nav-item">
                      <Link
         to="skills"
         smooth={true}
         duration={400}
         offset={-80}
         class="nav-link"
         style={{ cursor: 'pointer' }}
       >Skills </Link>
       
                      </li>
                      <li class="nav-item">
                      <Link
         to="projects"
         smooth={true}
         duration={400}
         offset={-80}
         class="nav-link"
         style={{ cursor: 'pointer' }}
       >Projects </Link>
                      </li>
          <li class="nav-item">     <Link
         to="about"
         smooth={true}
         duration={400}
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
         duration={400}
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
