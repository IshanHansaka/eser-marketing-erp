import Image from "next/image"

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-8 py-2 border-b">
      <div className="flex items-center">
        <Image src="/eser-logo.png" width={80} height={80} alt="Eser Logo" />
      </div>
      <div className="flex items-center space-x-8">
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Products
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
          Solutions
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Pricing
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Contact
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-6 py-2 border text-gray-600 hover:text-white border-gray-600 rounded-md hover:bg-gray-800">
          Login
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Register
        </button>
      </div>
    </nav>
  );
}
