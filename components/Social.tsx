import Link from "next/link"
import { FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa"

const socials = [
    { icon: <FaGithub/>, path:""},
    { icon: <FaLinkedin/>, path:""},
    { icon: <FaYoutube/>, path:""},
]

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const Social = ({containerStyles, iconStyles}: SocialProps) => {
  return (<div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
    })}
  </div>
  )
}

export default Social