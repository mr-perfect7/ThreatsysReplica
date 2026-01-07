import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-black text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer hover:text-gray-300 transition">
            Threatsys+
          </span>
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition">About Us</Link>
          </li>
          <li>
            <Link href="/core-values" className="hover:text-blue-400 transition">Core Values</Link>
          </li>
          <li>
            <Link href="/industries" className="hover:text-blue-400 transition">Industries</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
