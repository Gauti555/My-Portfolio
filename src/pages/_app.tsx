import { type AppType } from "next/dist/shared/lib/utils"
import "@/styles/globals.css"
import { SmoothScroll } from "@/components/layout/SmoothScroll"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SmoothScroll>
      <Component {...pageProps} />
    </SmoothScroll>
  )
}

export default MyApp
