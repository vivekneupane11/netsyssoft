import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-[1920px] m-auto flex justify-around mt-20 ">
        <section className="w-[45%] flex flex-col items-center justify-center text-center px-11">
        <h2 className="text-4xl font-bold  mb-4 font-sans">About Us</h2>
           
            <p className="text-lg font-sans">We, dummy company, situated at area, city, state are a leading institute offering a wide range of computer courses for all. Our mission is quality training with an affordable fee structure. Our uniquely designed curriculum makes our students employable and future ready. We have a dedicated team of skilled teachers and counsellors who make sure that regular up-gradation of courses is provided to students along with career guidance. Our professional team works harmoniously in unison, pushing the frontiers in growth and quality in imparting education.
</p>
        </section>
       <div className="w-[48%] aspect-[2/1] relative">
       <Image src={'https://image3.jdomni.in/banner/27032023/E4/B0/18/F1478235ABAFC03BCB0E579FAF_1679894114762.png?output-format=webp'} fill style={{objectFit:'cover'}} className="rounded-2xl" alt='logo'/>
       </div>
    </div>
  )
}
