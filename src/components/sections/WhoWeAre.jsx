import Play from "../icons/Play";

export default function WhoWeAre() {
  return (
    <div>
      {/* Mobile Layout */}
      <section className="bg-white rounded-t-lg p-6 grid gap-4 md:hidden">
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
      </section>

      {/* Desktop Layout */}
      <div className="hidden md:block bg-white rounded-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 ">
          {/* Left Column - Text Content */}
          <section className="p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">De Estados Unidos para el mundo</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Nuestro colegio digital privado está constituido y registrado en Estados Unidos ante el{" "}
              <b>Florida Department of Education con el código 8822.</b>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <p className=" text-blue-900 px-6 py-3 rounded-lg font-bold ">Conoce el nuestro aquí</p>
              <a
                href="https://studyatgenuine.com/registro-legal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors"
              >
                Registro legal
              </a>
            </div>
          </section>

          {/* Right Column - Image */}
          <div className="relative">
            <img
              className="w-full h-full object-cover"
              src="/images/foto_bilinguismo.jpeg"
              alt="Estudiantes diversos posando frente a una pared de ladrillos con vegetación verde"
            />
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <img className="rounded-b-lg md:hidden" src="/images/foto_bilinguismo.jpeg" alt="billingual teacher with students" />
    </div>
  );
}
