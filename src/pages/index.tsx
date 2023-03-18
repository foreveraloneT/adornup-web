import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Background from "../components/Background";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Background />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
