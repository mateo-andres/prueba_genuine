import LogoGE from "../icons/logo_GE";

export default function Header() {
  return (
    <header
      id="inicio"
      className="w-full bg-[url('/images/happy_family.jpg')] bg-[length:200%] md:bg-[length:115%] bg-bottom bg-no-repeat bg-[rgb(204,195,183)] grid grid-rows-2 p-3 rounded-lg md:relative md:h-[600px] md:bg-left-bottom md:overflow-hidden md:grid-rows-none"
    >
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
    </header>
  );
}
