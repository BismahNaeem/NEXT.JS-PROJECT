
import Link from "next/link";

import { AlignJustify } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
  

  function Header(){
    return(
        <header className="flex justify-between py-4 px-4 bg-black text-white max-w-screen-2xl mx-auto ">

          {/* logo */}
<div>
<h2 className="  text-2xl    text-white mx-28 font-bold"> Portfolio</h2>
</div>

          {/* nav buttons */}

    <ul className=" hidden md:flex space-x-5 mx-28    ">
    <li>
            <Link href="/">HOME</Link>
        </li>
        <li>
            <Link href="/about">ABOUT</Link>
          </li>
        <li>
            <Link href="/skills">SKILLS</Link>
        </li>
      
        <li>
            <Link href="/projects">PROJECTS</Link>
          </li>
        
    </ul>
   

                {/* sheet  */}
<Sheet >
  <SheetTrigger className="md:hidden "><AlignJustify  /></SheetTrigger>
  <SheetContent className="bg-teal-600">
  <ul className="  md:block ">
    
    <li className="space-x-5 ">
        
            <Link href="/">HOME</Link>
        </li>
        <li className="mt-2">
            <Link href="/about">ABOUT</Link>
          </li>
        <li className="mt-2">
            <Link href="/skills">SKILLS</Link>
        </li>
       
        <li className="mt-2">
            <Link href="/projects">PROJECTS</Link>
        </li>
    </ul>
    <SheetHeader>
      <SheetTitle>
    </SheetTitle>
      <SheetDescription>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        </header>
    );}
    
export default Header;