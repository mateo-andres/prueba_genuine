import Mision from "../icons/Mision";
import Vision from "../icons/Vision";

export default function Mission() {
  return (
    <section>
      <h2>Nuestra misión en el mundo y lo que soñamos para tus hijos</h2>
      <iframe
        width="360"
        height="215"
        src="https://www.youtube.com/embed/0IlUVfWThdo?si=_onK2koed97Y4oM9"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <article>
        <Vision />
        <h3>Nuestra visión</h3>
        <p>
          Queremos educar a miles de niños y jóvenes con los más altos estándares de calidad y pertinencia para que descubran su felicidad y que a
          partir de sus competencias, sean agentes de cambio en sus regiones por medio de la tecnología, la innovación y el emprendimiento.
        </p>
      </article>
      <article>
        <Mision />
        <h3>Nuestra visión</h3>
        <p>
          Queremos educar a miles de niños y jóvenes con los más altos estándares de calidad y pertinencia para que descubran su felicidad y que a
          partir de sus competencias, sean agentes de cambio en sus regiones por medio de la tecnología, la innovación y el emprendimiento.
        </p>
      </article>
      <img src="/src/assets/images/jet-pack.png" alt="man in a Jet pack" />
    </section>
  );
}
