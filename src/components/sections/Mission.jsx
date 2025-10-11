import Mision from "../icons/Mision";
import Vision from "../icons/Vision";

export default function Mission() {
  return (
    <section className="grid gap-4 p-6 to-blue-200 from-white  via-white bg-linear-to-t rounded-lg">
      <h2 className="text-2xl font-bold">Nuestra misión en el mundo y lo que soñamos para tus hijos</h2>
      <iframe
        className="place-self-center"
        src="https://www.youtube.com/embed/0IlUVfWThdo?si=_onK2koed97Y4oM9"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <article className="border-3 rounded-lg p-4 border-blue-900">
        <figure className="py-6 p-2">
          <Vision />
        </figure>
        <h3 className="text-2xl font-bold">Nuestra visión</h3>
        <p>
          Queremos educar a miles de niños y jóvenes con los más altos estándares de calidad y pertinencia para que <b>descubran su felicidad</b> y
          que a partir de sus competencias, sean agentes de cambio en sus regiones por medio de la <b>tecnología, la innovación</b> y el{" "}
          <b>emprendimiento</b>.
        </p>
      </article>
      <article className="border-3 rounded-lg p-4 border-blue-900">
        <figure className="py-6 p-2">
          <Mision />
        </figure>
        <h3 className="text-2xl font-bold">Nuestra visión</h3>
        <p>
          <b>Educar, empoderar y conectar</b> a nuestros estudiantes mediante experiencias de aprendizaje remoto que trasciendan las fronteras
          geográficas e idiomáticas, para inspirarlos a transformar el mundo a través de <b>la tecnología, la innovación</b> y el{" "}
          <b>emprendimiento</b>.
        </p>
      </article>
      <img className="" src="/src/assets/images/jet-pack.png" alt="man in a Jet pack" />
    </section>
  );
}
