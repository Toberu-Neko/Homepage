import Link from "next/link"
import { FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa"

const socials = [
    { icon: <FaGithub/>, path:"https://github.com/Toberu-Neko"},
    { icon: <FaLinkedin/>, path:"https://www.linkedin.com/in/%E6%B8%85%E8%8F%AF-%E8%AC%9D-3a0808278/"},
    // { icon: <FaYoutube/>, path:""},
]

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const Social = ({containerStyles, iconStyles}: SocialProps) => {
  return (<div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link target="_blank" key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
    })}
  </div>
  )
}

export default Social