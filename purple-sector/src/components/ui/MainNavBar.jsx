import Link from "next/link";
import Logo from "@/components/ui/Logo";
import NavButton from "@/components/ui/NavButton";
import AppButton from "@/components/ui/AppButton";

const MainNavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 fixed top-0 .bg-background bg-white z-50">
      <Logo />
      <div className="flex space-x-8 text-lg h-full items-start  ">
        <NavButton href="/my-predictions" text="My Predictions" />
        <NavButton href="/leaderboard" text="Leaderboard" />
        <NavButton href="/schedule" text="Schedule" />
        <NavButton href="/standings" text="Standings" />
        <Link href="/login">
          <AppButton className="cursor-pointer border-b-f1-green font-formula-regular">Login</AppButton>
        </Link>
      </div>
    </nav>
  );
};

export default MainNavBar;
