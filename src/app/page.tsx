import About from "@/components/About"
import Banner from "@/components/Banner"
import Courses from "@/components/Courses"
import Footer from "@/components/Footer"
import Gallery from "@/components/Gallery"
import MapView from "@/components/Maps"
import Testimonial from "@/components/Testimonial"
import VideoGallery from "@/components/VideoGallery"
import WhyUs from "@/components/WhyUs"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-[1920px] m-auto overflow-x-hidden  ">
    <Banner/>
<Courses/>
<About/>
<WhyUs/>
<Gallery/>
<VideoGallery/>
<Testimonial/>
<MapView/>
<Footer/>
    </main>
  )
}
