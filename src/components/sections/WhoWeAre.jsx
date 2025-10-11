import Play from "../icons/Play";

export default function WhoWeAre() {
  return (
    <section className="bg-white rounded-lg p-6 grid gap-4">
      <h2 className="text-2xl font-bold">¿Quiénes somos?</h2>
      <p>
        Somos un colegio virtual privado estadounidense constituido y registrado en el estado de <b>La Florida con el código 8822.</b>
      </p>
      <h5 className="font-bold text-center mt-4 text-lg">Consulta el registro legal aquí</h5>
      <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold w-fit mx-auto">Registro legal</button>
      <div className="flex flex-col p-4 rounded-lg items-center gap-2 bg-purple-300 text-lg text-center font-medium">
        <p>
          Mira como encontrar el registro legal de <b>Genuine</b>
        </p>
        <Play />
      </div>
      <img className="rounded-b-lg" src="/src/assets/images/foto_bilinguismo.jpg" alt="billingual teacher with students" />
    </section>
  );
}
