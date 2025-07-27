export default function Footer() {
  return (
    <footer className="border-t border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          Developed by{" "}
          <span className="text-[#ff1744] font-semibold">Romjan Ali</span>
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Copyright © {new Date().getFullYear()}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
