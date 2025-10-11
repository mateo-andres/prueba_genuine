export default function World() {
  return (
    <div>
      <section className="grid gap-4 p-6 bg-white rounded-t-lg">
        <h2 className="text-2xl font-bold px-8 ">
          Somos <br />
          del mundo
        </h2>

        <div className="grid gap-4 text-center px-8">
          <article className="border-4 rounded-lg p-4 border-rose-500 text-rose-500">
            <h4 className="text-3xl font-bold">+350</h4>
            <p className="text-xl font-bold">Estudiantes</p>
          </article>
          <article className="border-4 rounded-lg p-4 border-purple-300 text-purple-300">
            <h4 className="text-3xl font-bold">28</h4>
            <p>Staff</p>
          </article>
          <article className="border-4 rounded-lg p-4 border-blue-900 text-blue-900">
            <h4 className="text-3xl font-bold">44</h4>
            <p className="text-xl font-bold">Profesores</p>
          </article>
        </div>
        <figure>
          <img src="/src/assets/images/world-map.png" alt="world map" />
        </figure>
      </section>
      <section>
        <div className=" text-white font-medium">
          <div className="bg-rose-500 p-4">
            <p>
              Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile, Argentina, Estados Unidos, Emiratos Árabes, Brasil, República Dominicana,
              Irlanda, Canadá, España, Portugal, China, Italia.
            </p>
          </div>
          <div className="bg-purple-300 p-4">
            <p>Estados Unidos, Colombia, Perú, Brasil, Chile, México, Venezuela.</p>
          </div>
          <div className="bg-blue-900 p-4 rounded-b-lg">
            <p>Colombia, Sudáfrica, Filipinas, Chile, México, Singapur.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
