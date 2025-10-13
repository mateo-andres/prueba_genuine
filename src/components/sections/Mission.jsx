import Mision from "../icons/Mision";
import Vision from "../icons/Vision";

export default function Mission() {
  return (
    <div>
      <div className="-z-10 absolute -top-10 -left-30">
        <Mision />
        <Vision />
      </div>

      {/* Mobile Layout */}
      <section className="grid gap-4 p-6 bg-gradient-to-t to-blue-100 from-white rounded-t-lg md:hidden">
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
      <div className="hidden md:block bg-gradient-to-t to-blue-100 from-white rounded-lg overflow-hidden">
        {/* Jetpack Illustration */}
        <section className=" rounded-b-lg flex justify-center">
          <figure className="w-full h-[341px] max-w-[840px] bg-[url('/src/assets/images/jet-pack.png')] bg-cover bg-top"></figure>
        </section>

        {/* Title */}
        <section className=" px-8 py-6">
          <h2 className="text-4xl max-w-3xl mx-auto font-bold text-center mb-8">Nuestra misión en el mundo y lo que soñamos para tus hijos</h2>

          {/* Two-column layout for Mission and Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <article className="bg-white rounded-lg p-6 shadow-lg border border-blue-900">
              <figure className="py-6 p-2">
                <Mision />
              </figure>
              <h3 className="text-4xl font-bold mb-4 ">Nuestra misión</h3>
              <p className="text-base leading-relaxed">
                Educar, empoderar y conectar a nuestros estudiantes mediante experiencias de aprendizaje remoto que trasciendan las fronteras
                geográficas e idiomáticas, para inspirarlos a transformar el mundo a través de la tecnología, la innovación y el emprendimiento.
              </p>
            </article>

            {/* Vision Card */}
            <article className="bg-white rounded-lg p-6 shadow-lg border border-blue-900">
              <figure className="py-6 p-2">
                <Vision />
              </figure>
              <h3 className="text-4xl font-bold mb-4 ">Nuestra visión</h3>
              <p className="text-base leading-relaxed">
                Visualizamos un mundo donde miles de jóvenes y niños usen sus habilidades para transformar sus comunidades y regiones por medio del
                emprendimiento, la tecnología y la innovación.
              </p>
            </article>
          </div>
        </section>
      </div>

      {/* Mobile Jetpack Section */}
      <section className="bg-white rounded-b-lg md:hidden">
        <figure className="max-w-[340px] mx-auto h-[134px] bg-[url('/src/assets/images/jet-pack.png')] bg-cover bg-top"></figure>
      </section>
    </div>
  );
}
