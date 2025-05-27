import Link from "next/link";

interface NavButtonProps {
  href: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

const NavButton = ({ href, text, className = "", onClick }: NavButtonProps) => {
  return (
    <Link
      href={href}
      className={
        "text-black no-underline p-2 md:p-3 text-sm md:text-base border-b-2 md:border-b-4 border-transparent hover:bg-black hover:text-white hover:border-b-f1-purple outline-none transition-colors duration-200 ease-in-out " +
        className
      }
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default NavButton;
