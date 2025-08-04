"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaFigma, FaNodeJs, FaUnity } from "react-icons/fa"
import { SiTailwindcss, } from "react-icons/si"
import { TbBrandCSharp } from "react-icons/tb"
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobeindesign, SiAdobepremierepro } from "react-icons/si"

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
  title: 'My skills',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus sit similique illum, optio quia cupiditate nobis.Explicabo.",
  skillList: [
    {
      icon: <FaUnity />,
      name: "Unity",
    },
    {
      icon: <TbBrandCSharp />,
      name: "CSharp",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <SiAdobeindesign />,
      name: "Indesign",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Illistrator",
    },
    {
      icon: <SiAdobepremierepro />,
      name: "Premiere",
    },
    {
      icon: <SiAdobeaftereffects />,
      name: "AfterEffects",
    },
  ]
}

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }}}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience" 
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
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
                <p className="max-w-[600px] text-textColor/85 mx-auto xl:mx-0">
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
                        <p className="text-textColor/80">{item.company}</p>
                      </div>
                    </li>
                    )
                  })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Experience */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/* Experience */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/* Experience */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>

          </div>
        </Tabs>
      </div>

    </motion.div>


  )
}

export default resume