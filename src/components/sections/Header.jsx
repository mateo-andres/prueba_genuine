import LogoGE from "../icons/logo_GE";

export default function Header() {
  return (
    <header>
      <article className="grid ">
        <div className="bg-blue-300 px-4 py-2 rounded-t-lg">
          <h2 className="text-blue-900 text-2xl font-bold">
            Estás a punto de entrar al universo de la <span className="bg-blue-900 text-white">educación digital</span>
          </h2>
        </div>
        <div className="flex justify-center p-4 rounded-b-lg bg-white">
          <LogoGE />
        </div>
      </article>

      <img src="/src/assets/images/happy_family.jpg" alt="Happy family waving while having a video call" width={200} />
    </header>
  );
}
