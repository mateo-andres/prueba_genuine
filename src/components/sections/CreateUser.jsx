import { useState } from "react";

const InputComponent = ({ label, name, type = "text", value, onChange, disabled }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
        {label} *
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        disabled={disabled}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
        placeholder={`Ingrese su ${label}`}
        aria-label={label}
      />
    </div>
  );
};

export default function CreateUser({ fetchMetrics }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createStudent = async (studentData) => {
    const response = await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.detail || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      setIsSubmitting(true);

      const studentData = {
        ...formData,
        registration_date: new Date().toISOString(),
        is_active: true,
      };

      const data = await createStudent(studentData);

      setSuccessMessage(`Estudiante ${data.first_name} ${data.last_name} registrado correctamente!`);

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        date_of_birth: "",
      });

      await fetchMetrics();
    } catch (error) {
      console.error("Error registrando estudiante:", error);
      setErrorMessage(error.message || "Error al registrar estudiante. Por favor, intente nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 mt-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Registrar Nuevo Estudiante</h2>

      <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <InputComponent label="Primer Nombre" name="first_name" value={formData.first_name} onChange={handleInputChange} disabled={isSubmitting} />
        <InputComponent label="Primer Apellido" name="last_name" value={formData.last_name} onChange={handleInputChange} disabled={isSubmitting} />
        <InputComponent label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} disabled={isSubmitting} />
        <InputComponent
          label="Fecha de Nacimiento"
          name="date_of_birth"
          type="date"
          value={formData.date_of_birth}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />

        {successMessage && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800" role="alert" aria-live="polite">
            <p className="font-semibold">✓ {successMessage}</p>
          </div>
        )}

        {errorMessage && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800" role="alert" aria-live="assertive">
            <p className="font-semibold">✗ {errorMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg shadow-md hover:shadow-lg md:col-span-2 md:w-fit mx-auto"
          aria-label="Registrar estudiante"
        >
          {isSubmitting ? "Registrando Estudiante..." : "Registrar Estudiante"}
        </button>
      </form>
    </section>
  );
}
