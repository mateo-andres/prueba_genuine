import LogoGE from "../icons/logo_GE";

export default function Header() {
  return (
    <header className=" w-full bg-[url('/src/assets/images/happy_family.jpg')] bg-[length:200%] bg-bottom bg-no-repeat bg-[rgb(204,195,183)] grid grid-rows-2 p-3 rounded-lg">
      <article className="">
        <div className="bg-linear-to-t to-blue-100 from-purple-300 px-4 py-6 rounded-t-lg">
          <h2 className=" text-2xl font-bold">
            Estás a punto de entrar al universo de la <span className="bg-blue-900 text-white px-1">educación digital</span>
          </h2>
        </div>
        <div className="flex justify-center p-4 pt-10 pb-6 rounded-b-lg bg-white">
          <LogoGE />
        </div>
      </article>
      <p className="text-center text-white font-bold self-end">studyatgenuine.com</p>
    </header>
  );
}
