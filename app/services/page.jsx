"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";

const services = [
  {
    num: '00',
    title: 'Game Programmer',
    description: 'Developer Description',
    href: ''
  },
  {
    num: '01',
    title: 'Game Planner',
    description: 'Planner Description',
    href: ''
  },
  {
    num: '02',
    title: 'LLM Prompt Evaluator',
    description: 'prompt evaluator Description',
    href: ''
  },
  {
    num: '03',
    title: 'Developer',
    description: 'Currently trying to get my hand on developments unrelated to games.',
    href: ''
  },
  /*{
    num: '04',
    title: 'Design',
    description: 'Can do simple design work if you insist, including UI/UX and CIS design.',
    href: ''
  },*/
]

import { delay, motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent 
                  group-hover:text-outline-hover
                  transition-all duration-500">
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[70px] h-[70px] rounded-full 
                    bg-textColor group-hover:bg-importantColor
                    transition-all duration-500 
                    flex justify-center items-center 
                    hover:-rotate-45
                    ">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Title */}
                <h2 className="text-[42px] font-bold leading-none 
                text-textColor group-hover:text-hoverColor
                transition-all duration-500">{services.title}</h2>
                {/* Description */}
                <p className="text-textColor/85">{services.description}</p>
                {/* Border */}
                <div className="border-b border-textColor/50 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services