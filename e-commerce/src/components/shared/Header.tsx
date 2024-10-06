import Link from "next/link";
import { ModeToggle } from "../partials/ModeToggle";
import SearchForm from "../partials/SearchForm";
import { MonitorSmartphone, ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className=" flex justify-between items-center w-full h-16 shadow-lg dark:border-b-2 border-blue-700">
      <div className="ml-5">
        <Link href={"/"}>
          <h1 className=" text-2xl font-semibold">NagiTech</h1>
        </Link>
      </div>
      <nav className=" flex items-center space-x-6 mr-5">
        <Link href={""}>
          <MonitorSmartphone />
        </Link>
        <Link href={""}>
          <ShoppingBag />
        </Link>
        <SearchForm />
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;
