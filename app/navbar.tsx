import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Navbar = ({ Page }: { Page: string }) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect( () => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        setcurPage(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });
        return () => {
            observer.disconnect();
        };
    }, []);

    const router = useRouter();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // router.replace(`/#${id}`, undefined);
        }
    };
    // useEffect(
    //     () => {
    //         setcurPage(Page),
    //             // router.replace(`/#${Page}`, undefined);
    //         console.log(Page);
    //     }, [Page]
    // );
    const [curPage, setcurPage] = useState('home');
    const link = "mx-6 rounded-lg  px-4 py-4 transition-colors hover:cursor-pointer"
    const active_link = "mr-6 text-red-600 bg-[url('/images/navicon.svg')] md:bg-cover md:animate-pulse md:w-40 md:h-28 md:bg-center md:text-center md:align-middle md:bg-no-repeat z-10  py-2 md:pl-2 md:pr-4 md:pt-10 hover:cursor-pointer font-medium"
    return (
        <nav className={`px-2 py-2 sm:px-4 fixed w-full z-20 top-0 left-0  transition delay-150 duration-300 ease-in-out bg-[#000C24] md:bg-[#000C24] navbar p-6 h-[60px] md:h-[128px]  ${activeSection === 'home'  ? 'bg-transparent' : ''} px-0 py-2 sm:px-4 fixed  z-20 top-0 -left-0  tracking-wider transition delay-150 duration-300 ease-in-out bg-[#000C24] leading-[21px] font-medium`}> 
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">
                    Open main menu
                </span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd">
                    </path>
                </svg>
            </button>
            <div className="hidden md:flex  md:order-1 mb-32 ml-12 pb-1 pl-1 items-center h-full w-full  text-[#928A97]  text-[18px]">
              <a
                  onClick={() => {
                      scrollToSection('home')
                    //   setcurPage('home')
                  }}
                  className={curPage === 'home' ? active_link : link}
                  target="_blank"
                  rel="noopener noreferrer"
              >

                      <span className="self-center md:-ml-6 text-pw-orange text-xl">
                                              Home  {/* -&gt; */}
                      </span>
    

              </a>
              <a 
                  onClick={() => {
                      scrollToSection('about')
                    //   setcurPage('about')
                  }}
                  className={curPage === 'about' ? active_link : link}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                
                      <span className="self-center md:-ml-6 text-pw-orange text-xl">
                      {/* -&gt; */}
                      About
                      </span>
                 

              </a>
              <a
                  onClick={() => {
                      scrollToSection('experience')
                    //   setcurPage('experience')
                  }}
                  className={curPage === 'experience' ? active_link : link}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  
                    
                      <span className="self-center md:-ml-6 text-pw-orange text-xl">
                      {/* -&gt; */}  Experience
                      </span>
                 

              </a>

              <a
                  onClick={() => {
                      scrollToSection('skills')
                    //   setcurPage('skills')
                  }}
                  className={curPage === 'skills' ? active_link : link}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  
                     
                      <span className="self-center md:-ml-6 text-pw-orange text-xl">
                      {/* -&gt; */} Skills
                      </span>
                

              </a>
              <a
                  onClick={() => {
                      scrollToSection('projects')
                    //   setcurPage('projects')
                  }}
                  className={curPage === 'projects' ? active_link : link}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                 
                     
                      <span className="self-center md:-ml-6 text-pw-orange text-xl">
                      {/* -&gt; */} Projects
                      </span>
                

              </a>


              <a
                  onClick={() => {
                      scrollToSection('contact')
                    //   setcurPage('contact')
                  }}
                  className={curPage === 'contact' ? active_link : link}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                
                      
                      <span className="self-center md:-ml-6 text-pw-orange text-xl">
                          {/* -&gt; */}Contact
                      </span>
                

              </a>
          </div>
    </nav>
  )
}

export default Navbar