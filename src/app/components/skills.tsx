import Image from "next/image";
import React from "react";

export default function Skills() {
    return (
        <div className=" pt-11 bg-slate-100">
            {/* Heading */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-black">My Skills ⚡</h2>
            </div>

            {/* Skills Cards */}
            <div className="py-8 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
                {/* First Card */}
                <div className="bg-white p-6 rounded-lg text-center w-52 mx-auto shadow-lg">
                    <div className="flex flex-col items-center">
                        <Image src="/images/IMAGE1.png" alt="HTML" height={500} width={500} className="w-20 h-20 rounded-lg" />
                        <h2 className="mt-4 text-lg font-bold">HTML</h2>
                        {/* Percentage Bar */}
                        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                            <div className="bg-teal-700 h-2 rounded-full w-2/1"></div>
                        </div>
                        <p className="text-gray-400 text-sm mt-2">95%</p>
                    </div>
                </div>

                {/* Second Card */}
                <div className="bg-white p-6 rounded-lg text-center w-52 mx-auto shadow-lg">
                    <div className="flex flex-col items-center">
                        <Image src="/images/IMAGE2.png" alt="CSS3" height={500} width={500} className="w-20 h-20 rounded-lg" />
                        <p className="mt-4 text-lg font-bold">CSS3</p>
                        {/* Percentage Bar */}
                        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                            <div className="bg-teal-700 h-2 rounded-full w-2/3"></div>
                        </div>
                        <p className="text-gray-400 text-sm mt-2">90%</p>
                    </div>
                </div>

                {/* Third Card */}
                <div className="bg-white p-6 rounded-lg text-center w-52 mx-auto shadow-lg">
                    <div className="flex flex-col items-center">
                        <Image src="/images/IMAGE3.png" alt="Tailwind CSS" height={500} width={500} className="w-20 h-20 rounded-lg" />
                        <p className="mt-4 text-lg font-bold">Tailwind CSS</p>
                        {/* Percentage Bar */}
                        <div className="w-full bg-gray-700 h-2 rounded-full ">
                            <div className="bg-teal-700 h-2 rounded-full w-2/3"></div>
                        </div>
                        <p className="text-gray-400 text-sm ">90%</p>
                    </div>
                </div>

                {/* Fourth Card */}
                <div className="bg-white p-6 rounded-lg text-center w-52 mx-auto shadow-lg">
                    <div className="flex flex-col items-center">
                        <Image src="/images/IMAGE.4.png" alt="JavaScript" height={500} width={500} className="w-20 h-20 rounded-lg" />
                        <p className="mt-4 text-lg font-bold">JavaScript</p>
                        {/* Percentage Bar */}
                        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                            <div className="bg-teal-700 h-2 rounded-full w-2/3"></div>
                        </div>
                        <p className="text-gray-400 text-sm mt-2">67%</p>
                    </div>
                </div>

                {/* Fifth Card */}
                <div className="bg-white p-6 rounded-lg text-center w-52 mx-auto shadow-lg">
                    <div className="flex flex-col items-center">
                        <Image src="/images/image5.png" alt="TypeScript" height={500} width={500} className="w-20 h-20 rounded-lg" />
                        <p className="mt-4 text-lg font-bold">TypeScript</p>
                        {/* Percentage Bar */}
                        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                            <div className="bg-teal-700 h-2 rounded-full w-2/3"></div>
                        </div>
                        <p className="text-gray-400 text-sm mt-2">67%</p>
                    </div>
                </div>

                {/* Sixth Card */}
                <div className="bg-white p-6 rounded-lg text-center w-52 mx-auto shadow-lg">
                    <div className="flex flex-col items-center">
                        <Image src="/images/image6.png" alt="Next.js" height={500} width={500} className="w-20 h-20 rounded-lg" />
                        <p className="mt-4 text-lg font-bold">Next.js</p>
                        {/* Percentage Bar */}
                        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                            <div className="bg-teal-700 h-2 rounded-full w-2/3"></div>
                        </div>
                        <p className="text-gray-400 text-sm mt-2">67%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}