import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-gray-800 container">
      <div className="text-lg font-bold">AI Sticker Studio</div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
