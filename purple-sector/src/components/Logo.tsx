import Link from "next/link";
import "@/app/globals.css";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 bg-black border-b-4 border-f1-purple h-full mt-1 ">
      <Link
        href="/"
        className=" text-white no-underline hover:text-f1-purple transition-colors font-formula-italic  text-3xl tracking-widest  p-3"
      >
        <span className="logo-animated-text font-formula-black text-3xl tracking-tight select-none">
          Purple Sector
        </span>
      </Link>
    </div>
  );
}
