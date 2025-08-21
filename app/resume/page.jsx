"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaFigma, FaNodeJs, FaUnity} from "react-icons/fa"
import { SiTailwindcss, } from "react-icons/si"
import { TbBrandCSharp, TbLanguage, TbLanguageHiragana } from "react-icons/tb"
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobeindesign, SiAdobepremierepro } from "react-icons/si"
import { FaGithub} from "react-icons/fa"
import { GrLanguage } from "react-icons/gr";
import { MdOutlineAccountTree } from "react-icons/md";
import { GiFamilyTree } from "react-icons/gi";
import { TbBrandLinktree } from "react-icons/tb";
import { BiStreetView } from "react-icons/bi";

// About data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus sit similique illum, optio quia cupiditate nobis.Explicabo.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ching-Hua, Hsieh",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+886) 939 309 359",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "uni.toberuneko@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "ROC (Taiwan)",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Open for jobs",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Mandarin, English, Japanese",
    },
  ]
}

// Experience Data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "The following list includes some projects I participated in the university.",
  items: [
    {
      company: "DataAnnotation",
      position: "Multilingual LLM prompt evaluator",
      duration: "2024 - Present",
    },
    {
      company: "LOOP",
      position: "Lead Programmer & Project Manager",
      duration: "2023 - 2024",
    },
    {
      company: "Fire Magician: Arcana",
      position: "Programmer & Steam",
      duration: "2024 - 2024",
    },
    {
      company: "Rescue",
      position: "Lead Programmer & Project Manager",
      duration: "2022 - 2023",
    },
  ]
}

// Education Data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus sit similique illum, optio quia cupiditate nobis.Explicabo.",
  items: [
    {
      institution: "Coursera",
      degree: "IBM DevOps and Software Engineering",
      duration: "2023",
      certificate: "https://coursera.org/share/95fa9c1576d31e5c1a04d7cc5c5c9ad3",
    },
    {
      institution: "Tatung University",
      degree: "Bachelor of Design in Media Design",
      duration: "2020 - 2024",
      certificate: "Nan",
      // https://drive.google.com/file/d/1TwphCRo7bcP0amMtW3XrNgKUn4lE4jPR/view?usp=sharing
    },
  ]
}

const skills = {
  title: 'Skills',
  description: "", // "Game Developement / Language / Design",
  skillCategories: [
    {
      title: "Game Development",
      description: "Design Pattern & Project Management",
      skillList: [
        {
          icon: <FaUnity />,
          name: "Unity",
          level: "Professional",
        },
        {
          icon: <TbBrandCSharp />,
          name: "C#",
          level: "Professional",
        },
        {
          icon: <FaGithub />,
          name: "GitHub",
          level: "Professional",
        },
        {
          icon: <MdOutlineAccountTree />,
          name: "Finite State Machine",
          level: "Professional",
        },
        {
          icon: <TbBrandLinktree />,
          name: "Singleton Pattern",
          level: "Professional",
        },
        {
          icon: <BiStreetView />,
          name: "Observer Pattern",
          level: "Advanced",
        },
        {
          icon: <GiFamilyTree />,
          name: "Behaviour Tree",
          level: "Advanced",
        },
      ]
    },
    {
      title: "Software Development",
      description: "Web application & Python tools",
      skillList: [
        {
          icon: <FaPython />,
          name: "Python",
          level: "Professional",
        },
        {
          icon: <FaHtml5 />,
          name: "HTML5",
          level: "Advanced",
        },
        {
          icon: <FaCss3 />,
          name: "CSS",
          level: "Advanced",
        },
        {
          icon: <FaReact />,
          name: "React",
          level: "Useable",
        },
        {
          icon: <FaNodeJs />,
          name: "NodeJS",
          level: "Useable",
        },
      ]
    },
    {
      title: "Languages",
      description: "Fluent in 3 languages",
      skillList: [
        {
          icon: <GrLanguage />,
          name: "English",
          level: "TOEIC L/R: 950",
        },
        {
          icon: <TbLanguageHiragana />,
          name: "Japanese",
          level: "JLPT: N1-129",
        },
        {
          icon: <TbLanguage />,
          name: "Mandarin",
          level: "Native",
        },
      ]
    },
    {
      title: "Design",
      description: "UI/UX",
      skillList: [
        {
          icon: <SiAdobeindesign />,
          name: "Indesign",
          level: "Professional",
        },
        {
          icon: <SiAdobepremierepro />,
          name: "Premiere",
          level: "Professional",
        },
        {
          icon: <SiAdobeillustrator />,
          name: "Illistrator",
          level: "Advanced",
        },
        {
          icon: <SiAdobeaftereffects />,
          name: "AfterEffects",
          level: "Advanced",
        },
      ]
    },
  ]
}

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.2,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Contents */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-textColor-secondary mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-gray-800 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-highlightColor">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className=" w-[6px] h-[6px] rounded-full bg-importantColor"></span>
                            <p className="text-textColor-secondary">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-textColor-secondary mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-gray-800 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-highlightColor">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className=" w-[6px] h-[6px] rounded-full bg-importantColor"></span>
                            <p className="text-textColor-secondary">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-textColor-secondary mx-auto xl:mx-0">{skills.description}</p>
                </div>

                <ul className="flex flex-col gap-4 xl:gap-[30px]">
                  {skills.skillCategories.map((category, index) => {
                    return (
                      <div key={index} className="gap-[300px] xl:gap-[30px]">
                        <li className="flex flex-col gap-8">
                          <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-2xl font-bold">{category.title}</h3>
                            <p className="max-w-[600px] text-textColor-secondary mx-auto xl:mx-0">{category.description}</p>
                          </div>
                          <ScrollArea className="h-[320px] sm:h-[300px] md:h-[250px]">
                            <TooltipProvider delayDuration={100} >
                              <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 xl:gap-[30px]">
                                {
                                  category.skillList.map((skill, index) => {
                                    return (
                                      <Tooltip key={index}>
                                        <TooltipTrigger className="w-full h-[150px] bg-gray-800 justify-center items-center group rounded-xl flex">
                                          <div className="text-6xl group-hover:text-highlightColor transition-all duration-300">{skill.icon}</div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p className="capitalize text-lg">{skill.name + ": " + skill.level}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    )
                                  })}
                              </ul>
                            </TooltipProvider>
                          </ScrollArea>
                        </li>
                      </div>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-textColor-secondary mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-textColor-secondary">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>

    </motion.div>


  )
}

export default Resume