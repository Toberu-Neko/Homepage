"use client";

import CountUp from "react-countup"

const stats = [
    {
        num: 3,
        text: "Developed Games",
    },
    {
        num: 3,
        text: "Mastered Spoken Language",
    },
    {
        num: 4,
        text: "Years of Experience",
    },
    {
        num: 13,
        text: "IT Certificates",
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return(
                        <div key={index}
                        className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                            <CountUp
                            end={item.num}
                            duration={2}
                            delay={1}
                            className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p 
                            className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-textColor`}>{item.text}</p>

                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats