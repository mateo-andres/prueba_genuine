import LogoGE from "../icons/logo_GE";
import Apps from "../icons/Apps";

export default function Join() {
  return (
    <section id="unete" className="hidden md:block relative">
      <figure>
        <img src="/images/join.jpg" alt="image of a teacher and students in the nature" />
      </figure>
      <div className="bg-white p-2 px-8 w-fit rounded-full absolute top-8 right-8 hidden lg:block">
        <LogoGE className="max-h-[100px]" />
      </div>
      <article className="w-[90%] mx-auto absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="bg-gradient-to-t from-blue-100 to-purple-300 px-4 py-6 rounded-t-lg">
          <h2 className="text-2xl font-bold text-center">¡Únete a Genuine Digital School hoy!</h2>
        </div>
        <div className="flex flex-col items-center text-center justify-center p-4 pt-10 pb-6 rounded-b-lg bg-white">
          <p className="text-lg font-bold">Explora el increíble universo de la educación virtual junto a tu hijo</p>
          <p>Síguenos en Redes Sociales y conoce nuestra gran comunidad digital</p>
          <Apps className="mt-4 max-h-[20px] mx-auto" />
        </div>
        <p className="text-center text-sm font-bold text-white m-4 hidden md:block">studyatgenuine.com</p>
      </article>
    </section>
  );
}
