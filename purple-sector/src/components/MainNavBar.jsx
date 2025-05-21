import Link from "next/link";
import Logo from "./Logo";
import NavButton from "./NavButton";
import AppButton from "@/components/AppButton";

export default function MainNavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 pt-0 mt-0 min-h-0 sticky top-0  bg-background">
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
}
