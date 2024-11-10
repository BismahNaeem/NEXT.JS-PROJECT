import Image from 'next/image';

export default function ProjectsSection() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent projects</h2>
        <p className="text-lg text-gray-800 mb-8">
          Below you can see some examples of my recent work.
          
         
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/project1.jpg" 
              alt="Smooth Smoothies"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              quality={100}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">Shoes Website</h3>
              <p className="text-gray-700 mb-4">
               A sleek and responsive e-commerce website for shoes built with Next.js,HTML,and custom CSS.
              </p>
              <a
                href="https://custom-css--website.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-semibold"
              >
                View project
                <span className="ml-1 text-xl">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/project2.jpg" 
              alt="Snazzy Fashion"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              quality={100}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">Static Resume</h3>
              <p className="text-gray-700 mb-4">
               A professional,fully responsive static resume crafted with HTML,and CSS,designed to showcase skills and experience elegantly.
              </p>
              <a
                href="https://hackathon-milestone2-static-resume.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-semibold"
              >
                View project
                <span className="ml-1 text-xl">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/project3.jpg"
              alt="Hero Block Gallery"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              quality={100}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">Dynamic Resume</h3>
              <p className="text-gray-700 mb-4">
                An interactive,dynamic resume allowing users to input their data,built for a personalized experience and customization.
                </p>
              <a
                href="https://hackathon-milestone-3-dynamic-resume-lake.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-semibold"
              >
                View project
                <span className="ml-1 text-xl">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}