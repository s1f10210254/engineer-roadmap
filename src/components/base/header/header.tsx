import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header className="border-b flex items-center h-14 px-4">
      <h1>
        <Link href="/" className="text-2xl">
          <FaHome />
        </Link>
      </h1>
    </header>
  );
};

export default Header;
