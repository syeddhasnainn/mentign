"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "./Navbar";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <main className="">
      <div className="main font-manrope font-extralight">
        <Navbar />

        <section ref={ref} className="hero">
          <div className="page-padding px-[2rem] sm:px-[4rem] w-full ">
            <div className="vertical-padding md:py-[8rem] py-[4rem]">
              <div className="w-full max-w-[87.5rem] mx-auto">
                <div className="w-full max-w-[78rem] mb-4">
                  <div
                    style={{
                      transform: isInView ? "none" : "translateX(-200px)",
                      opacity: isInView ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                  >
                    <h1 className="text-[3.5rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[6.5vw] 2xl:text-8xl leading-[110%]">
                      Unleashing The Potential of Your Online Presence
                    </h1>
                  </div>
                </div>

                <div className="margin-bottom mb-10">
                  <div className="w-full max-w-[30.5rem] 2xl:max-w-[50.5rem] lg:max-w-[47.5rem] md:max-w-[38.5rem] sm:max-w-[39rem]">
                    <div className="text-[1.25rem] sm:text-[1.25rem] leading-normal md:leading-[160%] md:text-[1.5rem]">
                      Expand your reach: We enhance your online presence through
                      innovative digital solutions.
                    </div>
                  </div>
                </div>

                <a
                  href=""
                  className="text-white text-center bg-black border inline-block rounded-full justify-center py-[1.125rem] px-[1.75rem] font-manrope text-base"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="services ">
          <div className="page-padding px-[2rem] sm:px-[4rem]">
            <div className="grid 2xl:grid-cols-4 md:grid-cols-2 gap-8">
              <div className="p-[2rem] bg-[#f8f8f8]">
                <div>
                  <h1 className="mb-[1rem] text-[1.5rem]">Design</h1>
                </div>
                <div className="mb-[2rem] opacity-60 text-[16px] leading-[180%] text-[#222222]">
                  Transforming ideas into captivating visuals, our graphic
                  design services bring your visions to life with precision and
                  creativity.
                </div>
                <a className="underline underline-offset-4" href="">
                  About Graphic Design
                </a>
              </div>

              <div className="p-[2rem] bg-[#f8f8f8]">
                <div>
                  <h1 className="mb-[1rem] text-[1.5rem] ">Animation</h1>
                </div>
                <div className="mb-[2rem] opacity-60 text-[#222222]">
                  Unlock the realm of imagination with our animation services,
                  where stories come alive through vibrant visuals and dynamic
                  motion.
                </div>
                <a className="underline underline-offset-4" href="">
                  About Animation
                </a>
              </div>

              <div className="p-[2rem] bg-[#f8f8f8]">
                <div>
                  <h1 className="mb-[1rem] text-[1.5rem]">Web Development</h1>
                </div>
                <div className="mb-[2rem] opacity-60 text-[#222222]">
                  Unleash the power of code and creativity as we forge digital
                  landscapes that transcend the screen.
                </div>
                <a className="underline underline-offset-4" href="">
                  About Web Development
                </a>
              </div>

              <div className="p-[2rem] bg-[#f8f8f8]">
                <div>
                  <h1 className="mb-[1rem] text-[1.5rem] ">Data Engineering</h1>
                </div>

                <div className="mb-[2rem] opacity-60 text-[#222222]">
                  We unlock business success by refining massive scraped
                  datasets into clear, actionable insights ready to drive
                  growth.
                </div>
                <a className="underline underline-offset-4 " href="">
                  About Data Engineering
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="our-work ">
          <div className="page-padding px-[2rem] sm:px-[4rem] ">
            <div className="padding-top pt-[3.5rem] mb-8">
              <div className="margin-bottom ">
                <div className="border-b pb-4 mb-[2rem] text-[16px]">
                  {" "}
                  OUR WORK
                </div>
                <div className="text-[2rem] ">Selected Work</div>
              </div>
            </div>

            <div className="work-list">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <img className="mb-[1rem]" src="/poster.png" alt="work1" />
                  <div className="flex justify-between">
                    <div className="text-xl">Project Name</div>
                    <div>
                      <a
                        className="outline outline-1 rounded-full px-4 py-2 text-sm"
                        href=""
                      >
                        Button
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <img className="mb-[1rem]" src="/poster.png" alt="work1" />
                  <div className="flex justify-between">
                    <div className="text-xl">Project Name</div>
                    <div>
                      <a
                        className="outline outline-1 rounded-full px-4 py-2 text-sm"
                        href=""
                      >
                        Button
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <img className="mb-[1rem]" src="/poster.png" alt="work1" />
                  <div className="flex justify-between">
                    <div className="text-xl">Project Name</div>
                    <div>
                      <a
                        className="outline outline-1 rounded-full px-4 py-2 text-sm"
                        href=""
                      >
                        Button
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <img className="mb-[1rem]" src="/poster.png" alt="work1" />
                  <div className="flex justify-between">
                    <div className="text-xl">Project Name</div>
                    <div>
                      <a
                        className="outline outline-1 rounded-full px-4 py-2 text-sm"
                        href=""
                      >
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="values pb-14">
          <div className="page-padding px-[2rem] sm:px-[4rem]">
            <div className="padding-top pt-[3.5rem] border-b pb-4 mb-[2rem] text-[16px]">
              OUR VALUES
            </div>

            <div className="values-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="bg-[#F1F5F9]">
                <div className="padding px-[1.5rem] py-[1.25rem] h-full flex flex-col items-start justify-between">
                  <div className="mb-[3.5rem] 2xl:mb-[6rem]">
                    <div className="text-sm mb-[1rem]">SERVICES</div>
                    <div className="text-[1.5rem] 2xl:text-[2rem] lg:mb-[6rem]">
                      What We Do
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <a
                        className="text-white bg-black px-7 rounded-full py-4 inline-flex gap-1"
                        href=""
                      >
                        About Mentign
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-arrow-up-right"
                        >
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F1F6F5]">
                <div className="padding px-[1.5rem] py-[1.25rem] h-full flex flex-col items-start justify-between">
                  <div className="mb-[3.5rem] text-sm xl:mb-[12rem]">
                    CREATING CONNECTIONS
                  </div>
                  <div className="text-2xl lg:text-[1.75vw]">
                    {" "}
                    Crafting Design,
                    <br />
                    Forging Engagement.
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F8F8]">
                <div className="padding px-[1.5rem] py-[1.25rem] h-full flex flex-col items-start justify-between">
                  <div className="mb-[3.5rem] text-sm xl:mb-[12rem]">
                    HELPING BRANDS <br />
                    STAND OUT
                  </div>
                  <div className="text-2xl lg:text-[1.75vw]">
                    {" "}
                    Brand Brilliance,
                    <br />
                    Redefined Here.
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F8F8] xl:col-start-2 xl:col-end-3">
                <div className="padding px-[1.5rem] py-[1.25rem] h-full flex flex-col items-start justify-between">
                  <div className="mb-[3.5rem] text-sm lg:mb-[12rem] ">
                    COLLABORATION IS KEY
                  </div>
                  <div className="text-2xl lg:text-[1.75vw]">
                    {" "}
                    Together We <br />
                    Achieve More.
                  </div>
                </div>
              </div>

              <div className="bg-[#F8EDE3]">
                <div className="padding px-[1.5rem] py-[1.25rem] h-full flex flex-col items-start justify-between">
                  <div className="mb-[3.5rem] text-sm lg:mb-[12rem]">
                    OUR APPROACH
                  </div>
                  <div className="text-2xl lg:text-[1.75vw]">
                    {" "}
                    Building Trust,
                    <br />
                    Delivering Solutions
                  </div>
                </div>
              </div>

              <div className="bg-[#FFFAE7]">
                <div className="padding px-[1.5rem] py-[1.25rem] h-full flex flex-col items-start justify-between">
                  <div className="mb-[3.5rem] text-sm xl:mb-[12rem]">
                    OUR PHILOSOPHY
                  </div>
                  <div className="text-2xl lg:text-[1.75vw]">
                    {" "}
                    Values <br />
                    drive progress.
                  </div>
                </div>
              </div>

              <div className="mt-[1.5rem] sm:col-span-2 lg:col-start-2 lg:col-end-4">
                <div className="mb-5 text-[2rem] md:text-[3rem] xl:leading-tight">
                  Building Digital Presence From Idea to Execution: Our Goal at
                  Mentign.
                </div>
                <div className="text-base md:text-lg">
                  At Mentign, we build exceptional digital experiences across
                  platforms to connect brands and audiences. With technology now
                  integral to customer engagement, an optimized online presence
                  is key. We create customized, seamless digital solutions
                  tailored to your business needs, crafting digital journeys
                  that provide lasting impact. <br />
                  <br />
                  Our commitment extends well beyond launch. We strive to become
                  a trusted partner that helps take your digital presence to the
                  next level. With a keen understanding of design, technology
                  and strategy, we create digitally-driven solutions that engage
                  your customers and drive real results.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact pb-[2rem]">
          <div className="page-padding px-[2rem] sm:px-[4rem] ">
            <div className="contact-grid grid grid-cols-1 gap-4 bg-[#F1F6F5] padding px-[1.5rem] py-[1.25rem] h-full md:grid-cols-[0.3fr,1fr] lg:p-[6rem] md:p-[4rem] ">
              <div>CONTACT</div>
              <div className="flex flex-col items-start justify-between">
                <div className="text-4xl  mb-2 xl:text-[5rem] leading-[120%] sm:text-[2.75rem] md:text-[3.5rem]">
                  Let's start building your online presence together.
                </div>
                <div className="text-xl mb-6 xl:text-3xl leading-[160%] xl:w-full xl:max-w-[50rem] xl:mb-12 md:text-[1.5rem] xl:leading-[160%]">
                  Want to see what a difference a strong online presence can
                  make? Request a consultation today.
                </div>
                <div>
                  <a
                    className="text-white bg-black px-7 rounded-full py-4 inline-flex gap-1"
                    href=""
                  >
                    Get in Touch
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-up-right"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-padding px-[2rem] sm:px-[4rem]">
          {" "}
          <div className="line"></div>
        </div>

        <div className="page-padding px-[2rem] sm:px-[4rem]">
          <div className="py-[2rem]">
            © Made by Mentign. All Rights Reserved.
          </div>
        </div>
      </div>
    </main>
  );
}
