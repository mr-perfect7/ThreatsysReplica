export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto text-center text-sm px-4 flex flex-col md:flex-row justify-between items-center">
        <span>© {new Date().getFullYear()} Threatsys+. All rights reserved.</span>
        <span className="mt-2 md:mt-0">Designed and Developed by @sasank_lucifer 💻</span>
      </div>
    </footer>
  );
}
