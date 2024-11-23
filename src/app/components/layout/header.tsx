
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { useState } from "react"; // Import useState

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

//  type for useState to ensure the state is boolean
function Header() {
  // State to toggle the menu visibility
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Function to toggle the sheet menu
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <header className="flex justify-between py-4 px-4 bg-black text-white max-w-screen-2xl mx-auto">
      {/* logo */}
      <div>
        <h2 className="text-2xl text-white mx-28 font-bold">Portfolio</h2>
      </div>

      {/* nav buttons */}
      <ul className="hidden md:flex space-x-5 mx-28">
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

      {/* Sheet (Hamburger Menu) */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="md:hidden" onClick={toggleMenu}>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent className="bg-teal-600">
          <ul className="md:block">
            <li className="space-x-5">
              <Link href="/" onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/about" onClick={closeMenu}>
                ABOUT
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/skills" onClick={closeMenu}>
                SKILLS
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/projects" onClick={closeMenu}>
                PROJECTS
              </Link>
            </li>
          </ul>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Header;