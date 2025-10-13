import LogoGE from "../icons/logo_GE";

export default function Header() {
  return (
    <header className="w-full bg-[url('/src/assets/images/happy_family.jpg')] bg-[length:200%] md:bg-[length:115%] bg-bottom bg-no-repeat bg-[rgb(204,195,183)] grid grid-rows-2 p-3 rounded-lg md:relative md:h-[600px] md:bg-left-bottom md:overflow-hidden md:grid-rows-none">
      {/* Mobile Layout */}
      <article className="md:hidden max-w-sm mx-auto">
        <div className="bg-gradient-to-t from-blue-100 to-purple-300 px-4 py-6 rounded-t-lg">
          <h2 className="text-2xl font-bold">
            Estás a punto de entrar al universo de la <span className="bg-blue-900 text-white px-1">educación digital</span>
          </h2>
        </div>
        <div className="flex justify-center p-4 pt-10 pb-6 rounded-b-lg bg-white">
          <LogoGE />
        </div>
      </article>

      {/* Desktop Navigation Overlay */}
      <nav className="hidden md:block absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 z-10">
        <div className="flex items-center justify-between mb-4">
          <button className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <LogoGE />
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

      <article className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 p-8 max-w-md">
        <div className="bg-gradient-to-t from-blue-100 to-purple-300 px-4 py-6 rounded-t-lg">
          <h2 className="text-4xl font-bold">
            Estás a punto de entrar al universo de la <span className="bg-blue-900 text-white px-1">educación digital</span>
          </h2>
        </div>
        <div className="flex justify-center p-4 pt-10 pb-6 rounded-b-lg bg-white">
          <LogoGE />
        </div>
      </article>

      {/* Mobile Bottom URL */}
      <p className="text-center text-white font-bold self-end md:absolute md:bottom-8 md:left-1/2 md:transform md:-translate-x-1/2 md:text-lg">
        studyatgenuine.com
      </p>

      {/* Desktop Pagination Arrows */}
      <div className="hidden md:flex absolute bottom-8 right-8 space-x-2">
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
    </header>
  );
}
