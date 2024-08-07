import { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
type Theme = "dark" | "light"

interface IconProps {
  icon: IconProp
  theme: Theme
  scale?: number
}

const Icon: FC<IconProps> = ({ icon, theme, scale = 1 }) => {
  const color = theme === "dark" ? "#fff" : "#000"

  return (
    <FontAwesomeIcon
      icon={icon}
      style={{ color, fontSize: `${198 * scale}px` }}
    />
  )
}

export default Icon
