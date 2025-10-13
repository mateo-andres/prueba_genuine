import GE from "../icons/GE";

export default function Navigation() {
  return (
    <div>
      <nav className="hidden md:block fixed top-4 right-4 w-56 bg-white/90 backdrop-blur-sm rounded-lg p-4 z-10 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <button className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <GE />
        </div>
        <ul className="space-y-2 text-blue-900">
          <li>
            <a href="#inicio" className="hover:underline">
              Inicio
            </a>
          </li>
          <li>
            <a href="#quienes-somos" className="hover:underline">
              ¿Quiénes somos?
            </a>
          </li>
          <li>
            <a href="#somos-estadounidenses" className="hover:underline">
              Somos Estadounidenses
            </a>
          </li>
          <li>
            <a href="#unete" className="hover:underline">
              Únete a Genuine
            </a>
          </li>
        </ul>
      </nav>
      {/* Desktop Pagination Arrows */}
      <div className="hidden md:flex fixed bottom-8 right-8 space-x-2 z-10">
        <button className="w-8 h-8 bg-purple-300/80 rounded-full flex items-center justify-center text-white hover:bg-purple-400/80 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-8 h-8 bg-purple-300/80 rounded-full flex items-center justify-center text-white hover:bg-purple-400/80 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
