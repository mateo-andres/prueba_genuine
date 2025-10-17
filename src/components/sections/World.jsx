import { useEffect, useState } from "react";
import CreateUser from "./integration/CreateUser";
import HubSpot from "./integration/HubSpot";

export default function World() {
  const [metrics, setMetrics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMetrics = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/metrics`);
      const data = await response.json();

      setMetrics(data);
    } catch (error) {
      console.error("Error fetching metrics:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  return (
    <div>
      {/* Mobile Layout */}
      <section className="grid gap-4 p-6 bg-white rounded-t-lg md:hidden">
        <h2 className="text-2xl font-bold px-8">
          Somos <br />
          del mundo
        </h2>

        <div className="grid gap-4 text-center px-8">
          <article className="border-4 rounded-lg p-4 border-rose-500 text-rose-500">
            <h4 className="text-3xl font-bold">{isLoading ? "..." : metrics ? `+${metrics.total_students}` : "+350"}</h4>
            <p className="text-xl font-bold">Estudiantes</p>
          </article>
          <article className="border-4 rounded-lg p-4 border-purple-300 text-purple-300">
            <h4 className="text-3xl font-bold">{isLoading ? "..." : metrics ? metrics.total_staff : "28"}</h4>
            <p>Staff</p>
          </article>
          <article className="border-4 rounded-lg p-4 border-blue-900 text-blue-900">
            <h4 className="text-3xl font-bold">{isLoading ? "..." : metrics ? metrics.total_teachers : "44"}</h4>
            <p className="text-xl font-bold">Profesores</p>
          </article>
        </div>
        <figure>
          <img src="/images/world-map.png" alt="world map" />
        </figure>
      </section>

      {/* Mobile Countries Section */}
      <section className="md:hidden">
        <div className="text-white font-medium">
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

      {/* Desktop Layout */}
      <div className="hidden md:block bg-white rounded-lg overflow-hidden">
        <div className="grid lg:grid-cols-3 min-h-[600px]">
          {/* Left Column - Countries List */}
          <section className="p-8 bg-white">
            <h2 className="text-6xl font-bold mb-8">Somos del mundo</h2>

            <div className="">
              <div className="bg-orange-500 text-white p-4 ">
                <p className="font-medium">
                  Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile, Argentina, Estados Unidos, Emiratos Árabes, Brasil, República
                  Dominicana, Irlanda, Canadá, España, Portugal, China, Italia.
                </p>
              </div>
              <div className="bg-purple-300 text-white p-4 ">
                <p className="font-medium">Estados Unidos, Colombia, Perú, Brasil, Chile, México, Venezuela.</p>
              </div>
              <div className="bg-purple-900 text-white p-4 ">
                <p className="font-medium">Colombia, Sudáfrica, Filipinas, Chile, México, Singapur.</p>
              </div>
            </div>
          </section>

          {/* Right Column - Statistics and Map */}
          <section className="p-8 bg-white col-span-2">
            {/* Statistics Boxes */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="border-4 border-orange-500 text-orange-500 p-1 rounded-lg flex flex-wrap gap-4 items-center justify-center">
                <h4 className="text-4xl font-bold">{isLoading ? "..." : metrics ? `+${metrics.total_students}` : "+400"}</h4>
                <p className="text-xl font-bold">Estudiantes</p>
              </div>
              <div className="border-4 border-purple-300 text-purple-300 p-4 rounded-lg flex flex-wrap gap-4 items-center justify-center">
                <h4 className="text-4xl font-bold">{isLoading ? "..." : metrics ? metrics.total_staff : "28"}</h4>
                <p className="text-xl font-bold">Staff</p>
              </div>
              <div className="border-4 border-purple-900 text-purple-900 p-4 rounded-lg flex flex-wrap gap-4 items-center justify-center">
                <h4 className="text-4xl font-bold">{isLoading ? "..." : metrics ? metrics.total_teachers : "44"}</h4>
                <p className="text-xl font-bold">Profesores</p>
              </div>
            </div>

            {/* World Map */}
            <div className="">
              <figure className="w-full">
                <img className="w-full h-auto object-contain" src="/images/world-map.png" alt="Mapa mundial con ubicaciones globales" />
              </figure>
            </div>
          </section>
        </div>
      </div>
      <CreateUser fetchMetrics={fetchMetrics} />
      <HubSpot />
    </div>
  );
}
