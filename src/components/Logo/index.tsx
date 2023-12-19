import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo flex justify-center items-center flex-2">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5GPqi4n2UMSPlRuUeZ7X1dlED4zItv-4_rZR1Sr-YNdkxvyUGKu7&usqp=CAE&s"
        alt="Logo"
        height={10}
        width={10}
        className="w-10 h-10 object-cover"
      />
      <span className="text-lg font-bold ml-2">Your Logo Text</span>
    </div>
  );
};

export default Logo;
