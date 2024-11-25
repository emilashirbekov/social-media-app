import { Link } from "react-router-dom";
import { SearchField } from "./SearchField";
import { UserButton } from "../UserButton/UserButton";
import { ModeToggle } from "../Mode-toggle";

export const Navbar = () => {
  return (
    <header className='sticky top-0 z-10 bg-card shadow-sm'>
      <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3'>
        <Link to='/' className='text-2xl font-bold text-primary'>
          bugbook
        </Link>
        <SearchField />
        <UserButton className='sm:ms-auto' />
        <ModeToggle />
      </div>
    </header>
  );
};
