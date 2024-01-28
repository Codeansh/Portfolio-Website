"use client"

// import Swiper from 'swiper';
import Image from 'next/image'
import Navbar from './navbar'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { EffectCreative, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';
import "swiper/css/effect-cube"

// import Swiper core and required modules
import SwiperCore, {
  EffectCube, Pagination, Navigation, Scrollbar, A11y
} from 'swiper/modules';

// install Swiper modules

// const SectionContent: React.FC = () => {
//   const router = useRouter();



//   useEffect(() => {

//     // Get the section ID from the URL
//     const sectionId = router.query.sectionId as string;

//     // Do something with the section ID (e.g., fetch data, update state, etc.)
//     // console.log('Section ID:', sectionId);
//   }, [router.query.sectionId]);

//   return <div>Section Content</div>;
// };

export default function Home() {


  const [curPage, setCurPage] = useState('home')
  const [curSkill, setCurSkill] = useState('mobile')
  const pas_button_class = "w-full rounded py-2.5 text-xs lg:text-sm font-medium font-spartanMedium ring-white ring-opacity-60 ring-offset-2 ring-offset-[#F44336] focus:outline-none focus:ring-2 text-[#928A97] hover:bg-white/[0.12] hover:text-[#F44336]"
  const act_button_class = "w-full rounded py-2.5 text-xs lg:text-sm font-medium font-spartanMedium ring-white ring-opacity-60 ring-offset-2 ring-offset-[#F44336] focus:outline-none focus:ring-2 text-[#F44336] bg-white shadow"

  type ProjState = {
    p1: boolean;
    p2: boolean;
    p3: boolean;
    p4: boolean;
    p5: boolean;
  };
  const [projExpended, setProjExpended] = useState<ProjState>({ 'p1': true, 'p2': true, 'p3': true, 'p4': true, 'p5': true })

  const expend = ({ proj, st }: { proj: keyof ProjState, st: boolean }) => {

    setProjExpended({ ...projExpended, [proj]: !st });
  }

  return (
    <>
      <Navbar Page={curPage} />

      <main className="bg-[#000C24] lg:bg-white lg:bg-[url('/images/landing-bg.svg')] -mt-28 bg-cover bg-no-repeat">
        <section onMouseEnter={() => setCurPage('home')} id="home" className='min-h-screen' >


          <div className="container md:mx-auto grid h-[calc(100vh)]  ">
            <div className="grid self-start">
            </div>
            <div className="mx-auto grid-self-center mt-36 lg:px-20 container">
              <h1 className=" font-sparton-bold text-4xl stroke-white text-center lg:text-left">Shivansh Pathak</h1>
              <h2 className="font-sparton-semibold text-2xl text-white my-4 text-center lg:text-left">Software Engineer</h2>
              <div className="flex justify-center lg:justify-start">
                <a target="_blank" className="transition delay-150 duration-300 ease-in-out hover:scale-125" href="https://github.com/Codeansh">
                  <img src="/images/ant-design_github-filled.svg" alt="Github" className=" mr-4" loading="lazy">
                  </img>
                </a>
                <a target="_blank" className="transition delay-150 duration-300 ease-in-out hover:scale-125" href="https://www.instagram.com/ptkshivansh/">
                  <img src="/images/ant-design_instagram-filled.svg" alt="Instagram" className=" mr-4" loading="lazy">
                  </img>
                </a>
                <a target="_blank" className="transition delay-150 duration-300 ease-in-out hover:scale-125" href="https://www.linkedin.com/in/shivansh-pathak-737515204/">
                  <img src="/images/entypo-social_linkedin-with-circle.svg" alt="LinkedIn" className=" mr-4" loading="lazy">
                  </img>
                </a>
                <a target="_blank" className="transition delay-150 duration-300 ease-in-out hover:scale-125" href="https://twitter.com/Shivans92802869">
                  <img src="/images/ant-design_twitter-circle-filled.svg" alt="Twitter" className=" mr-4" loading="lazy"></img></a></div></div><div className="grid self-end lg:px-20 container">
              <div className="flex justify-center lg:justify-start items-center my-8">
                <img src="/images/Frame.svg" alt="arrow-icon-down" className=" animate-bounce mr-2" loading="lazy">
                </img>
                <span className=" text-[14.27px] leading-[15.98px] font-spartan text-[#928A97]">Scroll</span>
              </div>
            </div>
          </div>

        </section>
        <section onMouseEnter={() => setCurPage('about')} id="about" className=" snap-y container lg:mx-auto grid lg:min-h-screen xl:py-20 lg:px-20">
          <div className="grid self-start">
          </div>
          <div className=" snap-center grid self-center md:grid-cols-2 lg:grid-cols-2 lg:gap-x-14">
            <div className="relative order-last md:order-1">
              <img src="/images/net-bg.svg" alt="net-bg" className="animate-pulse -top-9 absolute" loading="lazy">
              </img>
              <div className="relative grayscale">
                <img className="max-w-xs mx-auto lg:max-w-sm xl:max-w-md md:h-[30vh] lg:h-[40vh] xl:h-[70vh] lg:ml-auto xl:ml-9" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03fdb466-60c7-4df2-8aeb-8f9f008d2afa/db8o23g-c69fffc4-ad01-4d0a-8add-832de1a26de7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzZmRiNDY2LTYwYzctNGRmMi04YWViLThmOWYwMDhkMmFmYVwvZGI4bzIzZy1jNjlmZmZjNC1hZDAxLTRkMGEtOGFkZC04MzJkZTFhMjZkZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u2KXFJm5O_QWDqHAScT-QTWe_pwrUaCubl4UMxl1Gw0" alt="gif" loading="lazy">
                </img>
              </div>
            </div>
            <div className="grid self-center mb-14 md:order-2">
              <h1 className="text-[#F44336] font-sparton-semibold text-2xl xl:text-3xl xl:leading-[35.84px] xl:font-bold font-bold mb-4 xl:mb-8 text-center md:text-left ">
                About Me.
              </h1>
              <p className="text-white md:text-[#000C24]  font-sparton-regular text-base xl:text-2xl px-4 md:py-0 md:pl-0 lg:pr-0 text-center md:text-left leading-[40.8px] font-normal">
A consistent and self-motivated learner with excellent problem-solving skills and ability to perform well in a team. Passionate about web development and open to trying new ideas and approaches to improve and learn.              </p>
            </div>
          </div>
          <div className="grid self-end">
            <div className="flex justify-center lg:justify-start items-center my-4 lg:my-8">
              <img src="/images/Frame2.svg" alt="arrow-icon-down" className="animate-bounce mr-2" loading="lazy">
              </img>
              <span className=" text-xs font-sparton text-[#000C24]">
                Scroll
              </span>
            </div>
          </div>
        </section>
      </main>

      <main className="lg:bg-[url('/images/experienceBackground.svg')] bg-right  bg-cover bg-no-repeat">
        <section onMouseEnter={() => setCurPage('experience')} id="experience" className="container lg:mx-auto grid lg:min-h-screen p-4 py-10 xl:py-20 lg:px-20">

          <div className="grid self-start">
          </div>
          <div className="grid self-center">
            <h1 className="text-[#F44336] font-spartanBold text-2xl xl:text-3xl mb-4 xl:mb-8 text-center md:text-left col-span-12">
              Experience.
            </h1>
            <div className="relative col-span-12 px-0 md:px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-6 lg:space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-[#000C24]">

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#000C24]">
                  <button className="text-left" id="headlessui-disclosure-button-:r0:" type="button" aria-expanded="false" data-headlessui-state="">
                    <div className="flex justify-between w-fit items-end">
                      <div>
                        <h2 className="text-base lg:text-xl font-spartanBold text-[#000C24]">
                          Fullstack development Intern
                        </h2>
                        <h3 className="text-xl lg:text-xl font-spartanBold text-[#F44336] my-2">
                          Shivankit TechSolutions
                        </h3>
                        <time className=" text-sm lg:text-base font-spartanSemiBold text-[#000C24]">
                          Apr 2023 – Sep 2023
                        </time>
                        <h4 className="text-base lg:text-base font-spartanBold text-[#F44336] my-2">
                          Tech Stack : {' '}
                          <span className="font-spartanMedium text-[#000C24]">
                            ReactJS,{' '}
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            Typescript,{' '}
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            NextJS,{' '}
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            CraftJS,{' '}
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            NestJS,{' '}
                          </span>
                        </h4>
                      </div>
                      <img onClick={() => expend({ proj: 'p1', st: projExpended.p1 })} src="/images/Frame2.svg" alt="arrow-icon-down" className={`&quot;animate-bounce&quot; ${projExpended.p1 ? "" : "rotate-180"}`} loading="lazy">
                      </img>
                    </div>
                  </button>
                  {!projExpended.p1 && <div className="transform scale-100 opacity-100">
                    <div className="my-2 ml-2 prose max-w-[65ch]">
                      <h4 className='text-base font-spartanSemiBold text-[#F44336]' >
                        Achievements so far
                      </h4>
                      <ul className="text-[#000C24] font-spartanMedium text-base">
                        <li>
                          Worked on full-stack web development projects using React (Next.js) for the frontend and Nest.js for the backend.                        </li>
                        <li>
                          Engaged with various open-source projects such as Craft.js and Reka.js to acquire and apply diverse features and
                          functionalities to projects.
                        </li>
                        <li>Collaborated within a team to enhance efficiency and productivity, facilitating improved project coordination through
                          daily status updates.
                        </li>


                      </ul>
                    </div>
                  </div>}
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#000C24]">
                  <button className="text-left" id="headlessui-disclosure-button-:r1:" type="button" aria-expanded="false" data-headlessui-state="">
                    <div className="flex justify-between w-fit items-end  transition ease-in-out delay-150 duration-1000">
                      <div>
                        <h2 className="text-base lg:text-xl font-spartanBold text-[#000C24]">
                          Summer Internship 
                        </h2>
                        <h3 className="text-xl lg:text-xl font-spartanBold text-[#F44336] my-2">
                          CSRBOX ( IBM-SkillsBuild )
                        </h3>
                        <time className=" text-sm lg:text-base font-spartanSemiBold text-[#000C24]">
                          Jun 2023 - Jul 2023
                        </time>
                        <h4 className="text-base lg:text-base font-spartanBold text-[#F44336] my-2">
                          Tech Stack : {' '}
                          <span className="font-spartanMedium text-[#000C24]">
                            HTML,{' '}
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            CSS,{' '}
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            JavaScript,{' '}
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            ReactJS,{' '}
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            TailwindCSS,{' '}
                          </span>
                  
                        </h4>
                      </div>
                      <img onClick={() => expend({ proj: 'p2', st: projExpended.p2 })} src="/images/Frame2.svg" alt="arrow-icon-down" className={`&quot;animate-bounce&quot; ${projExpended.p2 ? "" : "rotate-180"} `} loading="lazy">
                      </img>
                    </div>
                  </button>
                  {!projExpended.p2 && <div className="transform scale-100 opacity-100">
                    <div className="my-2 ml-2 prose max-w-[65ch]">
                      <h4 className='text-base font-spartanSemiBold text-[#F44336]' >
                        Achievements so far
                      </h4>
                      <ul className="text-[#000C24] font-spartanMedium text-base">
                        <li>
                          Learned and practiced basic and important concepts of HTML, CSS and JavaScript.
                        </li>
                        <li>
                          Worked on projects using different frameworks for frontend ( ReactJS, NextJS ) and backend ( Flask, Django etc. ). 
                        </li>
                      </ul>
                    </div>
                  </div>}
                </div>
                {/* <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#000C24]">
                  <button className="text-left" id="headlessui-disclosure-button-:r2:" type="button" aria-expanded="false" data-headlessui-state="">
                    <div className="flex justify-between w-fit items-end"><div><h2 className="text-base lg:text-xl font-spartanBold text-[#000C24]">
                      Mobile Engineer ( React Native )
                    </h2>
                      <h3 className="text-xl lg:text-xl font-spartanBold text-[#F44336] my-2">
                        Conceptual Tech Limited, Nairobi
                      </h3>
                      <time className=" text-sm lg:text-base font-spartanSemiBold text-[#000C24]">
                        Nov 2022 - present
                      </time>
                      <h4 className="text-base lg:text-base font-spartanBold text-[#F44336] my-2">
                        Tech Stack : {' '}
                        <span className="font-spartanMedium text-[#000C24]">
                          Expo,
                        </span>
                        <span className="font-spartanMedium text-[#000C24]">
                          SignalR,
                        </span>
                        <span className="font-spartanMedium text-[#000C24]">
                          Typescript,
                        </span>
                        <span className="font-spartanMedium text-[#000C24]">
                          Sentry,
                        </span>
                      </h4>
                    </div>
                      <img onClick={() => expend({ proj: 'p3', st: projExpended.p3 })} src="/images/Frame2.svg" alt="arrow-icon-down" className={`&quot;animate-bounce&quot; ${projExpended.p3 ? "" : "rotate-180"}`} loading="lazy">
                      </img>
                    </div>
                  </button>
                  {!projExpended.p3 && <div className="transform scale-100 opacity-100">
                    <div className="my-2 ml-2 prose max-w-[65ch]">
                      <h4 className='text-base font-spartanSemiBold text-[#F44336]' >
                        Impact
                      </h4>
                      <ul className="text-[#000C24] font-spartanMedium text-base">
                        <li>
                          Successfully pitched and transitioned company tech stack into modern ones
                        </li>
                        <li>
                          Translated the design into a mobile app using Expo (React Native) and Typescript.
                        </li>
                        <li>Ensured feature efficiency through testing and refactoring of components used using testing library ( React Native ).
                        </li>
                        <li>Ensured the app is production ready by tracking early production bugs using  Sentry Error tracking and monitoring tool.
                        </li>

                      </ul>
                    </div>
                  </div>}
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#000C24]">
                  <button className="text-left" id="headlessui-disclosure-button-:r3:" type="button" aria-expanded="false" data-headlessui-state="">
                    <div className="flex justify-between w-fit items-end">
                      <div>
                        <h2 className="text-base lg:text-xl font-spartanBold text-[#000C24]">
                          Full Stack Engineer
                        </h2>
                        <h3 className="text-xl lg:text-xl font-spartanBold text-[#F44336] my-2">
                          Dimetech Group( Formerly Eupotech Limited), Nairobi
                        </h3>
                        <time className=" text-sm lg:text-base font-spartanSemiBold text-[#000C24]">
                          May 2021 - Sep 2021
                        </time>
                        <h4 className="text-base lg:text-base font-spartanBold text-[#F44336] my-2">
                          Tech Stack : {' '}
                          <span className="font-spartanMedium text-[#000C24]">
                            NextJS,
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            Styled Components,
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            CraftCMS,
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            StrapiCMS,
                          </span>
                        </h4>
                      </div>
                      <img onClick={() => expend({ proj: 'p4', st: projExpended.p4 })} src="/images/Frame2.svg" alt="arrow-icon-down" className={`&quot;animate-bounce&quot; ${projExpended.p4 ? "" : "rotate-180"}`} loading="lazy">

                      </img>
                    </div>
                  </button>
                  {!projExpended.p4 && <div className="transform scale-100 opacity-100">
                    <div className="my-2 ml-2 prose max-w-[65ch]">
                      <h4 className='text-base font-spartanSemiBold text-[#F44336]' >
                        Impact
                      </h4>
                      <ul className="text-[#000C24] font-spartanMedium text-base">
                        <li>
                          Successfully pitched and transitioned company tech stack into modern ones

                        </li>


                      </ul>
                    </div>
                  </div>}
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#000C24]">
                  <button className="text-left" id="headlessui-disclosure-button-:r4:" type="button" aria-expanded="false" data-headlessui-state="">
                    <div className="flex justify-between w-fit items-end">
                      <div>
                        <h2 className="text-base lg:text-xl font-spartanBold text-[#000C24]">
                          Software Developer
                        </h2>
                        <h3 className="text-xl lg:text-xl font-spartanBold text-[#F44336] my-2">
                          Olive Tree Media Limited, Nairobi
                        </h3>
                        <time className=" text-sm lg:text-base font-spartanSemiBold text-[#000C24]">
                          Sep 2019 - Feb 2021
                        </time>
                        <h4 className="text-base lg:text-base font-spartanBold text-[#F44336] my-2">
                          Tech Stack : {' '}
                          <span className="font-spartanMedium text-[#000C24]">
                            VueJS,
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            NuxtJS,
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            OctoberCMS,
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            LeafletJS  MapBox API,
                          </span>
                          <span className="font-spartanMedium text-[#000C24]">
                            ChartJS,
                          </span>
                        </h4>
                      </div>
                      <img onClick={() => expend({ proj: 'p5', st: projExpended.p5 })} src="/images/Frame2.svg" alt="arrow-icon-down" className={`&quot;animate-bounce&quot; ${projExpended.p5 ? "" : "rotate-180"}`} loading="lazy">
                      </img>
                    </div>
                  </button>
                  {!projExpended.p5 && <div className="transform scale-100 opacity-100">
                    <div className="my-2 ml-2 prose max-w-[65ch]">
                      <h4 className='text-base font-spartanSemiBold text-[#F44336]' >
                        Impact
                      </h4>
                      <ul className="text-[#000C24] font-spartanMedium text-base">
                        <li>
                          Transformed website design mock-ups for a gaming progressive web app, to be used by an estimated 5000+ users daily.                        </li>
                        <li>
                          Reduced website page load from  10 seconds to ~5 seconds.                        </li>
                        <li>
                          Implemented SEO - increasing traffic by 10% and analytics by 40%                        </li>


                      </ul>
                      <h4 className='text-base font-spartanSemiBold text-[#F44336]' >
                        Lessons Learnt
                      </h4>
                      <ul className="text-[#000C24] font-spartanMedium text-base">
                        <li>Negotiating for realistic deadlines.</li>
                      </ul>
                    </div>
                  </div>}
                </div> */}

              </div>
            </div>
          </div>
          <div className="hidden lg:grid self-end">
            <div className="flex justify-center lg:justify-start items-center my-4 lg:my-8">
              <img src="/images/Frame2.svg" alt="arrow-icon-down" className="animate-bounce mr-2" loading="lazy">
              </img>
              <span className=" text-xs font-spartanMedium text-[#000C24]">
                Scroll
              </span>
            </div>
          </div>
        </section>
        <section onMouseEnter={() => setCurPage('skills')} id="skills" className="container mx-auto grid lg:h-screen md:px-4 xl:py-20 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-x-14">
            <div className="md:grid md:grid-cols-2 md:gap-x-4 lg:block">
              <div className="md:grid md:self-start lg:self-start">
                <h1 className="text-[#F44336] font-spartanBold text-2xl xl:text-3xl mx-4 md:mx-0 xl:mb-8 text-center md:text-left">
                  Skills.
                </h1>
                <p className="text-[#000C24] font-spartanRegular text-base xl:text-2xl px-4 md:px-0 text-center md:text-left">
                  With a diverse range of skills, including experience in Python, Django, Flask, and MongoDB, I am a versatile software engineer with the ability to tackle a wide variety of projects and challenges.
                </p>
              </div>
              <div className="w-full mx-auto py-8 md:py-4 px-4 sm:px-0"> {/*  */}
                <div className="flex space-x-1 rounded bg-[#000C24] p-1" role="tablist" aria-orientation="horizontal">
                  <button onClick={() => setCurSkill('mobile')} className={`${curSkill === "mobile" ? act_button_class : pas_button_class}`} id="headlessui-tabs-tab-:r6:" role="tab" type="button" aria-selected="false" tabIndex={-1} data-headlessui-state="" aria-controls="headlessui-tabs-panel-:rb:">
                    Programming Languages
                  </button>
                  <button onClick={() => setCurSkill('front')} className={`${curSkill === "front" ? act_button_class : pas_button_class}`} id="headlessui-tabs-tab-:r5:" role="tab" type="button" aria-selected="true" tabIndex={0} data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:ra:">
                    Front-end Development
                  </button>
                  <button onClick={() => setCurSkill('back')} className={`${curSkill === "back" ? act_button_class : pas_button_class}`} id="headlessui-tabs-tab-:r7:" role="tab" type="button" aria-selected="false" tabIndex={-1} data-headlessui-state="" aria-controls="headlessui-tabs-panel-:rc:">
                    Backend Development
                  </button>
                  <button onClick={() => setCurSkill('test')} className={`${curSkill === "test" ? act_button_class : pas_button_class}`} id="headlessui-tabs-tab-:r8:" role="tab" type="button" aria-selected="false" tabIndex={-1} data-headlessui-state="" aria-controls="headlessui-tabs-panel-:rd:">
                    Developer Tools
                  </button>
                  <button onClick={() => setCurSkill('ui')} className={`${curSkill === "ui" ? act_button_class : pas_button_class}`} id="headlessui-tabs-tab-:r9:" role="tab" type="button" aria-selected="false" tabIndex={-1} data-headlessui-state="" aria-controls="headlessui-tabs-panel-:re:">
                    Familiar With
                  </button>
                </div>
                <div className="mt-3"> {/*  */}
                  {curSkill === 'mobile' && <div className="rounded bg-white p-3 shadow-lg ring-white ring-opacity-60 border-2 border-[#000C24] border-double ring-offset-2 ring-offset-[#000C24] focus:outline-none focus:ring-2" id="headlessui-tabs-panel-:ra:" role="tabpanel" tabIndex={0} data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r5:">
                    <div className="flex flex-wrap">
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/py.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          Python
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/c++.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="CSS" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          C++
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="CSS">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/c.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="CSS" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          C
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="CSS">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/js.png" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="CSS" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          JavaScript
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="CSS">
                        </a>
                      </div>
                    </div>
                  </div>}
                  {curSkill === "front" && <div className="rounded bg-white p-3 shadow-lg ring-white ring-opacity-60 border-2 border-[#000C24] border-double ring-offset-2 ring-offset-[#000C24] focus:outline-none focus:ring-2" id="headlessui-tabs-panel-:ra:" role="tabpanel" tabIndex={0} data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r5:">
                    <div className="flex flex-wrap">
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/html-5.png" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          HTML{'  '}{'  '}
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/css.png" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="CSS" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          CSS{'  '}
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="CSS">
                        </a>
                      </div>
                      {/* <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/sass.png" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="SASS" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          SASS{'  '}
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="SASS">
                        </a>
                      </div> */}
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/js.png" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="Javascript" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          Javascript{'  '}{'  '}
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="Javascript">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/typescript.png" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="Typescript" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          Typescript{'  '}
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="Typescript">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/react-2.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="React" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          React{'  '}{'  '}
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="React">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/next-js.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="NextJS" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          NextJS{'  '}{'  '}
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="NextJS">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/tailwindcss.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="TailwindCSS" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          TailwindCSS
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="TailwindCSS">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/bootstrap.png" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="Bootstrap" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          Bootstrap
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="Bootstrap">
                        </a>
                      </div>

                    </div>
                  </div>}
                  {curSkill === 'back' && <div className="rounded bg-white p-3 shadow-lg ring-white ring-opacity-60 border-2 border-[#000C24] border-double ring-offset-2 ring-offset-[#000C24] focus:outline-none focus:ring-2" id="headlessui-tabs-panel-:ra:" role="tabpanel" tabIndex={0} data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r5:">
                    <div className="flex flex-wrap">
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/flask.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          Flask
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/django.png" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          Django
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/fastapi.png" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          FastAPI
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/nodejs-1.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          NodeJS
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/express.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          ExpressJS
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/graphql-logo-2.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          GraphQL
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/mongodb-icon-1.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          MongoDB
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/Docker.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          Docker
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/MySQL.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          MySQL
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                    </div>
                  </div>}
                  {curSkill === 'test' && <div className="rounded bg-white p-3 shadow-lg ring-white ring-opacity-60 border-2 border-[#000C24] border-double ring-offset-2 ring-offset-[#000C24] focus:outline-none focus:ring-2" id="headlessui-tabs-panel-:ra:" role="tabpanel" tabIndex={0} data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r5:">
                    <div className="flex flex-wrap">
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/dock-desk.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          Docker Desktop
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/Jenkins.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          Jenkins
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/Postman.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          Postman
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/PyCharm.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          PyCharm
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/VsCode.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          VS Code
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/GitHub.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          GitHub
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                    </div>
                  </div>}
                  {curSkill === 'ui' && <div className="rounded bg-white p-3 shadow-lg ring-white ring-opacity-60 border-2 border-[#000C24] border-double ring-offset-2 ring-offset-[#000C24] focus:outline-none focus:ring-2" id="headlessui-tabs-panel-:ra:" role="tabpanel" tabIndex={0} data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r5:">
                    <div className="flex flex-wrap">
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/Kubernetes.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          Kubernetes
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/ngin.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          NGINX
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                      <div className="relative rounded p-3 hover:bg-gray-100">
                        <img src="/icons/gitact.svg" className="w-10 h-10 mx-auto mb-2 animate-pulse" alt="HTML" loading="lazy">
                        </img>
                        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-[#000C24] text-center max-w-[8rem]">
                          GitHub Actions
                        </h2>
                        <a href="#" className="absolute inset-0 rounded-md ring-[#F44336] focus:z-10 focus:outline-none focus:ring-2" aria-label="HTML">
                        </a>
                      </div>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
            <div className="relative hidden lg:grid self-center">
              <img src="/images/net-bg.svg" alt="net-bg" className="animate-pulse ml-auto -top-9 right-0 xl:-right-9 absolute" loading="lazy">
              </img>
              <div className="relative ">
                <img className="max-w-xs lg:max-w-sm xl:max-w-sm md:h-[30vh] lg:h-[40vh] xl:h-[40vh] xl:ml-auto" src="" alt="" loading="lazy">
                </img>
              </div>
            </div>
          </div>
          <div className="hidden lg:grid self-end">
            <div className="flex justify-center lg:justify-start items-center my-4 lg:my-8">
              <img src="/images/Frame2.svg" alt="arrow-icon-down" className="animate-bounce mr-2" loading="lazy">
              </img>
              <span className="text-xs font-spartanMedium text-[#000C24]">
                Scroll
              </span>
            </div>
          </div>
        </section>
      </main>



      <section onMouseEnter={() => setCurPage('projects')} id="projects" className="relative bg-white xl:bg-[url('/images/projects-bottom-image.svg')] bg-left bg-contain bg-no-repeat">
        <main className="container md:mx-auto grid lg:min-h-screen px-4 py-4 md:px-0 md:py-10 xl:py-20 lg:px-20">
          <div className="grid self-start">
          </div>
          <h1 className=" text-[#F44336] font-spartanBold text-2xl lg:text-3xl lg:mb-6 text-center md:text-left md:px-4">
            Projects
          </h1>
          <Swiper
            // install Swiper modules

            className='z-[30000000000] w-full swipe '
            grabCursor={true}
            cubeEffect={{
              "shadow": true,
              "slideShadows": true,
              "shadowOffset": 20,
              "shadowScale": 0.94
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCreative, EffectFade, EffectCube]}
            spaceBetween={5}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="grid self-center md:grid-cols-2 gap-x-14 pt-6 lg:pt-12 ">
                <div className="relative z-20">
                  <img src="/images/net-bg.svg" alt="net-bg" className="animate-pulse -top-9 absolute" loading="lazy">
                  </img>
                  <div className="relative grayscale">
                    <img className="mx-auto max-w-xs lg:max-w-sm xl:max-w-md md:h-[30vh] lg:h-[70vh] lg:ml-auto xl:ml-9" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03fdb466-60c7-4df2-8aeb-8f9f008d2afa/db8o23g-c69fffc4-ad01-4d0a-8add-832de1a26de7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzZmRiNDY2LTYwYzctNGRmMi04YWViLThmOWYwMDhkMmFmYVwvZGI4bzIzZy1jNjlmZmZjNC1hZDAxLTRkMGEtOGFkZC04MzJkZTFhMjZkZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u2KXFJm5O_QWDqHAScT-QTWe_pwrUaCubl4UMxl1Gw0" alt="gif" loading="lazy">
                    </img>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid self-center">
                    {/* <h1 className="hidden h-0 text-[#F44336] font-spartanBold text-2xl lg:text-3xl mb-3 lg:mb-6 text-center lg:text-left">
                      Projects
                    </h1> */}
                    <h2 className=" text-[#F44336] font-spartanBold text-2xl lg:text-3xl my-3  lg:mb-6 text-center md:text-left">
                      Auctionize
                    </h2>
                    <p className="text-[#000C24] font-spartanRegular text-base lg:text-2xl mb-3 lg:mb-6 text-center md:text-left">
                      App functionality boosted by seamlessly integrating Docker for Auth and Auction services.
                    </p>
                    <div className="flex flex-wrap mb-3 lg:mb-6 justify-center md:justify-start">
                      <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                        Flask ( Python )
                      </span>
                      <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                        MongoDB
                      </span>
                      <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                        Docker
                      </span>
                    </div>
                    <div className="inline-flex justify-center md:justify-start">
                      <a target="_blank" className="false &quot;transition delay-150 duration-300 ease-in-out hover:scale-125&quot;" href="https://github.com/droidconKE/droidconKE2023ReactNative">
                        <img src="/icons/github-filled.svg" alt="github link" className="mr-4" loading="lazy">
                        </img>
                      </a>
                      <a target="_blank" className="false &quot;transition delay-150 duration-300 ease-in-out hover:scale-125&quot;" aria-label="globe icon link" href="https://play.google.com/store/apps/details?id=com.ke.droidcon.reactnative&amp;hl=en&amp;gl=US">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-[#928A97] w-[37px] h-[37px] mr-4" aria-label="globe icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
                          </path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid self-center md:grid-cols-2 gap-x-14 pt-6 lg:pt-12 ">
                <div className="relative z-20">
                  <img src="/images/net-bg.svg" alt="net-bg" className="animate-pulse -top-9 absolute" loading="lazy">
                  </img>
                  <div className="relative grayscale">
                    <img className="mx-auto max-w-xs lg:max-w-sm xl:max-w-md md:h-[30vh] lg:h-[70vh] lg:ml-auto xl:ml-9" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03fdb466-60c7-4df2-8aeb-8f9f008d2afa/db8o23g-c69fffc4-ad01-4d0a-8add-832de1a26de7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzZmRiNDY2LTYwYzctNGRmMi04YWViLThmOWYwMDhkMmFmYVwvZGI4bzIzZy1jNjlmZmZjNC1hZDAxLTRkMGEtOGFkZC04MzJkZTFhMjZkZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u2KXFJm5O_QWDqHAScT-QTWe_pwrUaCubl4UMxl1Gw0" alt="gif" loading="lazy">
                    </img>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid self-center">
                    {/* <h1 className="hidden lg:block text-[#F44336] font-spartanBold text-2xl lg:text-3xl mb-3 lg:mb-6 text-center lg:text-left">
                      Projects
                    </h1> */}
                    <h2 className=" text-[#F44336] font-spartanBold text-2xl my-3 lg:text-3xl lg:mb-6 text-center md:text-left">
                      Resume Builder
                    </h2>
                    <p className="text-[#000C24] font-spartanRegular text-base lg:text-2xl mb-3 lg:mb-6 text-center md:text-left">
                      A web application to create a resume based on a user’s input.
                    </p>
                    <div className="flex flex-wrap mb-3 lg:mb-6 justify-center md:justify-start">
                      <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                        Django ( Python )
                      </span>
                      <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                        SQLite
                      </span>
                      <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                        Bootstrap
                      </span>
                    </div>
                    <div className="inline-flex justify-center md:justify-start">
                      <a target="_blank" className="false &quot;transition delay-150 duration-300 ease-in-out hover:scale-125&quot;" href="https://github.com/droidconKE/droidconKE2022ReactNative">
                        <img src="/icons/github-filled.svg" alt="github link" className="mr-4" loading="lazy">
                        </img>
                      </a>
                      <a target="_blank" className="false &quot;transition delay-150 duration-300 ease-in-out hover:scale-125&quot;" aria-label="globe icon link" href="https://play.google.com/store/apps/details?id=com.brianwachira.droidconKE2022ReactNative&amp;hl=en&amp;gl=US">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-[#928A97] w-[37px] h-[37px] mr-4" aria-label="globe icon"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
                        </path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid self-center md:grid-cols-2 gap-x-14 pt-6 lg:pt-12 ">
                <div className="relative z-20">
                  <img src="/images/net-bg.svg" alt="net-bg" className="animate-pulse -top-9 absolute" loading="lazy">
                  </img>
                  <div className="relative grayscale">
                    <img className="mx-auto max-w-xs lg:max-w-sm xl:max-w-md md:h-[30vh] lg:h-[70vh] lg:ml-auto xl:ml-9" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03fdb466-60c7-4df2-8aeb-8f9f008d2afa/db8o23g-c69fffc4-ad01-4d0a-8add-832de1a26de7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzZmRiNDY2LTYwYzctNGRmMi04YWViLThmOWYwMDhkMmFmYVwvZGI4bzIzZy1jNjlmZmZjNC1hZDAxLTRkMGEtOGFkZC04MzJkZTFhMjZkZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u2KXFJm5O_QWDqHAScT-QTWe_pwrUaCubl4UMxl1Gw0" alt="gif" loading="lazy">
                    </img>
                  </div>
                </div>
                <div className="grid"><div className="grid self-center">
                  {/* <h1 className="hidden lg:block text-[#F44336] font-spartanBold text-2xl lg:text-3xl mb-3 lg:mb-6 text-center lg:text-left">
                    Projects
                  </h1> */}
                  <h2 className=" text-[#F44336] font-spartanBold text-2xl my-3 lg:text-3xl lg:mb-6 text-center md:text-left">
                    Chat App
                  </h2>
                  <p className="text-[#000C24] font-spartanRegular text-base lg:text-2xl mb-3 lg:mb-6 text-center md:text-left">
                    A real-time chat web-application.
                  </p>
                  <div className="flex flex-wrap mb-3 lg:mb-6 justify-center md:justify-start">
                    <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                      Flask ( Python )
                    </span>
                    <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                      Web Sockets
                    </span>
                    <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                      MongoDB
                    </span>
                  </div>
                  <div className="inline-flex justify-center md:justify-start">
                    <a target="_blank" className=" &quot;transition delay-150 duration-300 ease-in-out hover:scale-125&quot;" href="/">
                      <img src="/icons/github-filled.svg" alt="github link" className="mr-4" loading="lazy">
                      </img>
                    </a>
                    <a target="_blank" className=" &quot;transition delay-150 duration-300 ease-in-out hover:scale-125&quot;" aria-label="globe icon link" href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-[#928A97] w-[37px] h-[37px] mr-4" aria-label="globe icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid self-center md:grid-cols-2 gap-x-14 pt-6 lg:pt-12 ">
                <div className="relative z-20">
                  <img src="/images/net-bg.svg" alt="net-bg" className="animate-pulse -top-9 absolute" loading="lazy">
                  </img>
                  <div className="relative grayscale">
                    <img className="mx-auto max-w-xs lg:max-w-sm xl:max-w-md md:h-[30vh] lg:h-[70vh] lg:ml-auto xl:ml-9" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03fdb466-60c7-4df2-8aeb-8f9f008d2afa/db8o23g-c69fffc4-ad01-4d0a-8add-832de1a26de7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzZmRiNDY2LTYwYzctNGRmMi04YWViLThmOWYwMDhkMmFmYVwvZGI4bzIzZy1jNjlmZmZjNC1hZDAxLTRkMGEtOGFkZC04MzJkZTFhMjZkZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u2KXFJm5O_QWDqHAScT-QTWe_pwrUaCubl4UMxl1Gw0" alt="gif" loading="lazy">
                    </img>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid self-center">
                    {/* <h1 className="hidden lg:block text-[#F44336] font-spartanBold text-2xl lg:text-3xl mb-3 lg:mb-6 text-center lg:text-left">
                      Projects
                    </h1> */}
                    <h2 className=" text-[#F44336] font-spartanBold text-2xl my-3 lg:text-3xl lg:mb-6 text-center md:text-left">
                      Blog Writer
                    </h2>
                    <p className="text-[#000C24] font-spartanRegular text-base lg:text-2xl mb-3 lg:mb-6 text-center md:text-left">
                      A social media web application for writing and sharing blogs.
                    </p>
                    <div className="flex flex-wrap mb-3 lg:mb-6 justify-center md:justify-start">
                      <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                        Flask ( Python )
                      </span>
                      <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                        Bootstrap
                      </span>
                      <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                        SQLite
                      </span>
                    </div>
                    <div className="inline-flex justify-center md:justify-start">
                      <a target="_blank" className=" &quot;transition delay-150 duration-300 ease-in-out hover:scale-125&quot;" href="/">
                        <img src="/icons/github-filled.svg" alt="github link" className="mr-4" loading="lazy">
                        </img>
                      </a>
                      <a target="_blank" className=" &quot;transition delay-150 duration-300 ease-in-out hover:scale-125&quot;" aria-label="globe icon link" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-[#928A97] w-[37px] h-[37px] mr-4" aria-label="globe icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
                          </path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid self-center md:grid-cols-2 gap-x-14 pt-6 lg:pt-12 ">
                <div className="relative z-20">
                  <img src="/images/net-bg.svg" alt="net-bg" className="animate-pulse -top-9 absolute" loading="lazy">
                  </img>
                  <div className="relative grayscale">
                    <img className="mx-auto max-w-xs lg:max-w-sm xl:max-w-md md:h-[30vh] lg:h-[70vh] lg:ml-auto xl:ml-9" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03fdb466-60c7-4df2-8aeb-8f9f008d2afa/db8o23g-c69fffc4-ad01-4d0a-8add-832de1a26de7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzZmRiNDY2LTYwYzctNGRmMi04YWViLThmOWYwMDhkMmFmYVwvZGI4bzIzZy1jNjlmZmZjNC1hZDAxLTRkMGEtOGFkZC04MzJkZTFhMjZkZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u2KXFJm5O_QWDqHAScT-QTWe_pwrUaCubl4UMxl1Gw0" alt="gif" loading="lazy">
                    </img>
                  </div>
                </div>
                <div className="grid"><div className="grid self-center">
                  {/* <h1 className="hidden lg:block text-[#F44336] font-spartanBold text-2xl lg:text-3xl mb-3 lg:mb-6 text-center lg:text-left">
                    Projects
                  </h1> */}
                  <h2 className=" text-[#F44336] font-spartanBold text-2xl my-3 lg:text-3xl lg:mb-6 text-center md:text-left">
                    Portfolio
                  </h2>
                  <p className="text-[#000C24] font-spartanRegular text-base lg:text-2xl mb-3 lg:mb-6 text-center md:text-left">
                    A meticulously crafted portfolio website distinguished by its dynamic and responsive design, providing an engaging showcase for work and skills.
                  </p>
                  <div className="flex flex-wrap mb-3 lg:mb-6 justify-center md:justify-start">
                    <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                      NextJS ( ReactJS )
                    </span>
                    <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                      Tailwind CSS
                    </span>
                    <span className="cursor-pointer py-2 px-3 bg-[#928A97] text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-[#F44336] mb-3 lg:mb-0">
                      Typescript
                    </span>
                  </div>
                  <div className="inline-flex justify-center md:justify-start">
                    <a target="_blank" className="false &quot;transition delay-150 duration-300 ease-in-out hover:scale-125&quot;" href="https://github.com/droidconKE/droidconKE2022ReactNative">
                      <img src="/icons/github-filled.svg" alt="github link" className="mr-4" loading="lazy">
                      </img>
                    </a>
                    <a target="_blank" className="false &quot;transition delay-150 duration-300 ease-in-out hover:scale-125&quot;" aria-label="globe icon link" href="https://play.google.com/store/apps/details?id=com.brianwachira.droidconKE2022ReactNative&amp;hl=en&amp;gl=US">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-[#928A97] w-[37px] h-[37px] mr-4" aria-label="globe icon"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
                      </path>
                      </svg>
                    </a>
                  </div>
                  <div className="inline-flex justify-center md:justify-start">
                    <a target="_blank" className="hidden &quot;transition delay-150 duration-300 ease-in-out hover:scale-125&quot;" href="/">
                      <img src="/icons/github-filled.svg" alt="github link" className="mr-4" loading="lazy">
                      </img>
                    </a>
                    <a target="_blank" className="hidden &quot;transition delay-150 duration-300 ease-in-out hover:scale-125&quot;" aria-label="globe icon link" href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-[#928A97] w-[37px] h-[37px] mr-4" aria-label="globe icon"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
                      </path>
                      </svg>
                    </a>
                  </div>
                </div>
                </div>
              </div>

            </SwiperSlide>

          </Swiper>

          <div className="hidden lg:grid self-end">
            <div className="flex justify-center lg:justify-start items-center my-8">
              <img src="/images/Frame.svg" alt="arrow-icon-down" className="animate-bounce mr-2" loading="lazy">
              </img>
              <span className=" text-xs font-spartanMedium text-[#928A97]">
                Scroll
              </span>
            </div>
          </div>

        </main>
      </section>


      <section onMouseEnter={() => setCurPage('contact')} id="contact" className="bg-[url('/images/contactus-background.svg')] bg-cover p-4 lg:py-20 lg:px-20">
        <main className="bg-white container md:mx-auto grid rounded">
          <div className="p-4 lg:p-9 grid lg:grid-cols-2 gap-x-14">
            <div className="grid self-center">
              <h1 className=" font-spartanSemiBold text-[#000C24] text-2xl lg:text-4xl mb-2 lg:mb-0 text-center lg:text-left">
                Drop me a message,
                <br />
                I would love to hear from you!
              </h1>
            </div>
            <form method="post" className="space-y-6">
              <h2 className=" font-spartanBold text-[#F44336] text-2xl xl:text-3xl mb-4 xl:mb-8 text-center lg:text-left">
                Get in touch
              </h2>
              <div className="relative">
                <input type="text" id="name" name="name" className="block px-2.5 py-2.5 w-full text-base lg:text-xl text-[#000C24] bg-transparent rounded border border-[#000C24] appearance-none focus:outline-none focus:ring-0 focus:border-[#F44336] peer" placeholder=" " required />
                <label htmlFor="name" className="absolute text-base lg:text-xl text-[#928A97] font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#F44336] peer-focus:dark:text-[#F44336] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Name
                </label>
              </div>
              <div className="relative">
                <input type="text" id="email" name="email" className="block px-2.5 py-2.5 w-full text-base lg:text-xl text-[#000C24] bg-transparent rounded border border-[#000C24] appearance-none focus:outline-none focus:ring-0 focus:border-[#F44336] peer" placeholder=" " required />
                <label htmlFor="email" className="absolute text-base lg:text-xl text-[#928A97] font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#F44336] peer-focus:dark:text-[#F44336] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Email
                </label>
              </div>
              <div className="relative">
                <textarea className="block px-2.5 py-2.5 w-full text-base lg:text-xl text-[#000C24] bg-transparent rounded border border-[#000C24] appearance-none focus:outline-none focus:ring-0 focus:border-[#F44336] peer" placeholder=" " id="message" name="message" required>
                </textarea><label htmlFor="message" className="absolute text-base lg:text-xl text-[#928A97] font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#F44336] peer-focus:dark:text-[#F44336] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Message
                </label>
              </div>
              <div className="flex justify-center lg:justify-start">
                <button type="submit" className=" bg-[#000C24] text-white hover:bg-[#F44336] ring-[#F44336] ring-offset-[#000C24]  py-4 px-6  font-spartanMedium text-sm lg:text-base rounded  transition delay-150 duration-300 ease-in-out ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </main>
      </section>

      <footer className=" bg-[#000C24]">
        <main className="lg:bg-[url('/images/footer-bg.svg')] bg-right bg-contain bg-no-repeat px-5 pt-5 lg:pt-10 pb-5">
          <h1 className=" text-white text-sm font-spartanMedium text-center mb-5">
            Find me on social media....
          </h1>
          <div className="flex justify-center mb-5">
            <div className="inline-flex">
              <a target="_blank" className="transition delay-150 duration-300 ease-in-out hover:scale-125" href="https://github.com/Codeansh">
                <img src="/icons/github-filled.svg" alt="Github" className=" mr-4" loading="lazy">
                </img>
              </a>
              <a target="_blank" className="transition delay-150 duration-300 ease-in-out hover:scale-125" href="https://www.instagram.com/ptkshivansh/">
                <img src="/images/ant-design_instagram-filled.svg" alt="Instagram" className=" mr-4" loading="lazy">
                </img>
              </a>
              <a target="_blank" className="transition delay-150 duration-300 ease-in-out hover:scale-125" href="https://www.linkedin.com/in/shivansh-pathak-737515204/">
                <img src="/icons/linkedin-with-circle.svg" alt="LinkedIn" className=" mr-4" loading="lazy">
                </img>
              </a>
              <a target="_blank" className="transition delay-150 duration-300 ease-in-out hover:scale-125" href="https://twitter.com/Shivans92802869">
                <img src="/icons/twitter-circle-filled.svg" alt="Twitter" className=" mr-4" loading="lazy">
                </img>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <span className=" text-white text-sm font-spartanMedium text-center">
              Design inspiration from<a target="_blank" className=" text-sm font-spartanBold text-[#F44336]" href="https://www.figma.com/community/file/1006095821656678611">{' '}
                Akhil T J Portfolio Mockup Design {''}</a>
              <img src="/icons/figma-1.svg" alt="" className="w-5 h-5 animate-pulse inline-flex" loading="lazy">
              </img>
            </span>
          </div>
          <div className="flex items-center justify-center mt-5">
            <h2 className=" text-white text-sm font-spartanMedium text-center">
              All Rights Reserved © {''}2024
            </h2>
            <a target="_blank" className=" inline-flex text-xs font-spartanBold text-[#F44336] ml-5" href="/privacypolicy">
              Privacy Policy
            </a>
          </div>
        </main>
      </footer>

    </>
  )
}
