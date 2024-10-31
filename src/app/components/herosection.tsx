import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <div className=" bg-white flex items-center justify-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Left side text content */}
          <div className="text-center md:text-left md:mt-0 mt-12 md:ml-20">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-black">
            Hi,
          
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-black mt-2">I&apos;m Bismah Naeem</h2>
            <p className="mt-2  text-teal-700 py-2 px-4 text-md md:text-lg lg:text-xl txt-center max-w-2xl  font-bold   ">
            A passionate web developer dedicated to creating responsive, user-friendly websites. I love bringing ideas to life through clean, modern designs that look great on any device. 
</p> </div>
          {/* Right side image content */}
          <div className="mt-2 md:mt-0 mx-auto md:mx-0">
            {/* Profile image */}
            <Image
              src="/images/code.png"
              alt="WEB"
              height={500}
              width={500}
              className="w-72 h-58 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}