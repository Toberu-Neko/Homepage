import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FiDownload } from 'react-icons/fi'

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/*Text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-highlightColor">Game Developer</span>
            <h1 className="text-4xl text-white py-4 leading-snug font-bold md:text-6xl sm:text-5xl">
              <p>Ching-Hua Hsieh</p>
            </h1>
            <p className="max-w-[500px] mb-9 text-textColor/90">
              A certified DevOps developer, and an experienced multilingual LLM prompt evaluator.
            </p>
            {/*Buttons and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link target="_blank" href="https://drive.google.com/drive/folders/1kqVPWBEgbQGmz3IjSDp6LIKugDNw76bf?usp=drive_link">
                <Button variant={"outline"} size='lg' className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl"></FiDownload>
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-importantColor rounded-full flex justify-center items-center text-importantColor text-base hover:bg-importantColor hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>

          </div>
          {/*Image*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* Stats */}
      <div>
        <Stats />
      </div>
    </section>
  )
}

export default Home