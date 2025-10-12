import Mision from "../icons/Mision";
import Vision from "../icons/Vision";
import CreateUser from "./CreateUser";

export default function Mission() {
  return (
    <div>
      {/* Mobile Layout */}
      <section className="grid gap-4 p-6 bg-gradient-to-t from-blue-100 to-white rounded-t-lg md:hidden">
        <h2 className="text-2xl font-bold">Nuestra misión en el mundo y lo que soñamos para tus hijos</h2>
        <iframe
          height={215}
          width="95%"
          className="place-self-center"
          src="https://www.youtube.com/embed/0IlUVfWThdo?si=_onK2koed97Y4oM9"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <article className="border-3 rounded-lg p-4 border-blue-900">
          <figure className="py-6 p-2">
            <Vision />
          </figure>
          <h3 className="text-2xl font-bold mb-3">Nuestra visión</h3>
          <p className="text-base/5">
            Queremos educar a miles de niños y jóvenes con los más altos estándares de calidad y pertinencia para que <b>descubran su felicidad</b> y
            que a partir de sus competencias, sean agentes de cambio en sus regiones por medio de la <b>tecnología, la innovación</b> y el{" "}
            <b>emprendimiento</b>.
          </p>
        </article>
        <article className="border-3 rounded-lg p-4 border-blue-900">
          <figure className="py-6 p-2">
            <Mision />
          </figure>
          <h3 className="text-2xl font-bold mb-3">Nuestra misión</h3>
          <p className="text-base/5">
            <b>Educar, empoderar y conectar</b> a nuestros estudiantes mediante experiencias de aprendizaje remoto que trasciendan las fronteras
            geográficas e idiomáticas, para inspirarlos a transformar el mundo a través de <b>la tecnología, la innovación</b> y el{" "}
            <b>emprendimiento</b>.
          </p>
        </article>
      </section>

      {/* Desktop Layout */}
      <div className="hidden md:block bg-white rounded-lg overflow-hidden">
        {/* Jetpack Illustration */}
        <div className="bg-white py-8">
          <figure className="w-full h-[200px] bg-[url('/src/assets/images/jet-pack.png')] bg-contain bg-center bg-no-repeat"></figure>
        </div>

        {/* Title */}
        <section className="bg-gradient-to-t from-blue-100 to-white px-8 py-6">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestra misión en el mundo y lo que soñamos para tus hijos</h2>

          {/* Two-column layout for Mission and Vision */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <article className="bg-white rounded-lg p-6 shadow-lg border border-blue-900">
              <figure className="flex justify-center py-4">
                <Mision />
              </figure>
              <h3 className="text-2xl font-bold mb-4 text-center">Nuestra misión</h3>
              <p className="text-base leading-relaxed">
                <b>Educar, empoderar y conectar</b> a nuestros estudiantes mediante experiencias de aprendizaje remoto que trasciendan las fronteras
                geográficas e idiomáticas, para inspirarlos a transformar el mundo a través de <b>la tecnología, la innovación</b> y el{" "}
                <b>emprendimiento</b>.
              </p>
            </article>

            {/* Vision Card */}
            <article className="bg-white rounded-lg p-6 shadow-lg border border-blue-900">
              <figure className="flex justify-center py-4">
                <Vision />
              </figure>
              <h3 className="text-2xl font-bold mb-4 text-center">Nuestra visión</h3>
              <p className="text-base leading-relaxed">
                Visualizamos un mundo donde miles de jóvenes y niños usen sus habilidades para transformar sus comunidades y regiones por medio del{" "}
                <b>emprendimiento</b>, la <b>tecnología</b> y la <b>innovación</b>.
              </p>
            </article>
          </div>
        </section>
      </div>

      {/* Mobile Jetpack Section */}
      <section className="bg-white rounded-b-lg md:hidden">
        <figure className="w-full h-[134px] bg-[url('/src/assets/images/jet-pack.png')] bg-cover bg-top"></figure>
      </section>
    </div>
  );
}
