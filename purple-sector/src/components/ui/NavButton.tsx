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
        "text-black no-underline p-3 border-b-4 border-transparent hover:bg-black hover:text-white hover:border-b-4 hover:border-f1-purple outline-none transition-colors duration-200 ease-in-out " +
        className
      }
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default NavButton;
