import CTA from "../CTA";
import Header from "../Header";

const Banner = () => {
  return (
    <div
      className={`max-w-[1920px] m-auto banner w-full h-[80vh] bg-cover bg-center  flex items-center justify-center relative `}
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1029614/pexels-photo-1029614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: "cover",
      }}
    >
      <Header />

<CTA/>
     
    </div>
  );
};

export default Banner;
