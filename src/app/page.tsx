import About from "@/components/About"
import Banner from "@/components/Banner"
import Courses from "@/components/Courses"
import Footer from "@/components/Footer"
import Gallery from "@/components/Gallery"
import MapView from "@/components/Maps"
import Testimonial from "@/components/Testimonial"
import WhyUs from "@/components/WhyUs"
import dynamic from "next/dynamic"
const NoSSR = dynamic(() => import('../components/VideoGallery'), { ssr: false })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-[1920px] m-auto overflow-x-hidden  ">
    <Banner/>
<Courses/>
<About/>
<WhyUs/>
<Gallery/>
<NoSSR/>
<Testimonial/>
<MapView/>
<Footer/>
    </main>
  )
}
