import Image from "next/image";

import HTML from "./image/IMAGE1.png"
import CSS from "./image/IMAGE2.png"
import tailwindcss from "./image/IMAGE3.png"
import javascript from "./image/IMAGE.4.png"
import typescript from "./image/image5.png"
import NEXTJS from "./image/image6.png"
import mainpic from "./image/image11.png"

export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Left side text content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Hi,<br />
              I’m <span className="text-blue-500">BISMAH NAEEM</span><br />
                Junior Frontened Web DEVELOPER
            </h1>
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600">
              MY RESUME
            </button>
          </div>

          {/* Right side image content */}
          <div className="relative">
        
            {/* Profile image */}
            <Image
              src={mainpic} 
              alt="WEB"
              className="relative w-96 h-96 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="bg-neutral-400 py-12">
        <div className="text-center text-white mb-8">
          <h2 className="text-3xl font-bold">My Skills ⚡</h2>
        </div>
        <div className="bg-gray-100 py-8 rounded-tl-3xl rounded-tr-3xl">
          <div className="container mx-auto grid grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 px-4">
            <div className="flex flex-col items-center">
              <Image src={HTML} alt="HTML" className="w-20 h-20" />
              <p className="mt-4 text-lg">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={CSS} alt="CSS3" className="w-20 h-20" />
              <p className="mt-4 text-lg">CSS3</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={tailwindcss} alt="CSS3" className="w-20 h-20" />
              <p className="mt-4 text-lg">Tailwind css</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={javascript} alt="JAVASCRIPT" className="w-20 h-20" />
              <p className="mt-4 text-lg">JAVASCRIPT</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={typescript} alt="TYPESCRIPT" className="w-20 h-20" />
              <p className="mt-4 text-lg">TYPESCRIPT</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={NEXTJS} alt="NEXT.JS" className="w-20 h-20" />
              <p className="mt-4 text-lg">NEXT.JS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-4 mt-4">
        <div className="container mx-auto text-center">
          <p> Thanks for visiting.</p>
        </div>
      </footer>
    </div>
  );
}

