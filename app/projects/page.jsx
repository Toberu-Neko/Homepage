"use client";
import { motion } from "framer-motion"
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import ProjectSliderButtons from "@/components/ProjectSliderButtons ";

const projectList = [
  {
    num: "00",
    category: "game",
    title: "LOOP",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odio temporibus tempora labore aliquid.",
    stack: [{ name: "Unity" }, { name: "C Sharp" }],
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
  },
  {
    num: "01",
    category: "game",
    title: "Fire Magician: Arcana",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odio temporibus tempora labore aliquid.",
    stack: [{ name: "Unity" }, { name: "C Sharp" }],
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
  },
  {
    num: "02",
    category: "game",
    title: "Rescue",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odio temporibus tempora labore aliquid.",
    stack: [{ name: "Unity" }, { name: "C Sharp" }],
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "This website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odio temporibus tempora labore aliquid.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
  },
]

const Projects = () => {
  const [project, setProject] = useState(projectList[0]);

  const handleSliderChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projectList[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className=" text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Category */}
              <div className="text-[42px] font-bold leading-none text-textColor group-hover:text-hoverColor transition-all duration-500 capitalize">
                {project.category} project
              </div>
              {/* Description */}
              <p className="text-textColor-secondary">
                {project.description}
              </p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-highlightColor">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}

              </ul>
              {/* Border */}
              <div className="border border-textColor/40"></div>
              {/* Buttons */}
              <div className="flex gap-4">
                {/* Project page */}
                <Link href={project.link}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-textColor/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-textColor text-3xl group-hover:text-highlightColor" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project Page</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github page */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-textColor/5 flex justify-center items-center group">
                        <BsGithub className="text-textColor text-3xl group-hover:text-highlightColor" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSliderChange}
            >
              {projectList.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-textColor/20">
                      {/* Overlay */}
                      <div className=" absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        ></Image>
                      </div>

                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider buttons */}
              <ProjectSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-textColor hover:bg-highlightColor text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>

        </div>
      </div>

    </motion.section>
  )
}

export default Projects
