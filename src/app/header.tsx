import Link from "next/link";

  function Header(){
    return(
        <header className="flex justify-between bg-black text-cyan-50 h-20 ">
<div>
<h2 className="font-extrabold mt-11 ml-4">MY PORTFOLIO</h2>
</div>
<nav>
    <ul className="flex gap-x-4 mt-11 mr-4 font-semibold">
    <li>
            <Link href="/">HOME</Link>
        </li>
        <li>
            <Link href="/skills">SKILLS</Link>
        </li>
        <li>
            <Link href="/">CONTACT US</Link>
        </li>
    </ul>
</nav>


        </header>
    );}
    
export default Header;