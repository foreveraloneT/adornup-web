import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

const Background: React.FC = () => (
  <div className="w-screen h-screen fixed -z-40 pointer-events-none">
    <StaticImage
      className="w-full h-full object-cover"
      alt="background"
      src="../images/background.png"
    />
  </div>
)

export default Background;