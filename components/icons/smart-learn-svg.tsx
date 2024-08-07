import { FC } from "react"
import { RiBookOpenFill } from "@remixicon/react"

type Theme = "dark" | "light"

interface IconProps {
  theme: Theme
  scale?: number
}

export const SmartLearnSVG: FC<IconProps> = ({ theme, scale = 1 }) => {
  const color = theme === "dark" ? "#fff" : "#000"

  return (
    <>
      <RiBookOpenFill size={149 * scale} color={color} />
    </>
  )
}
