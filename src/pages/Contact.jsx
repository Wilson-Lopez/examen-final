import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setSent(true);
    };

    return (
        <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-bold mb-4">Contacto 📧</h1>

            {sent && (
                <div className="p-4 bg-green-200 text-green-800 rounded mb-4">
                    ¡Mensaje enviado con éxito!
                </div>
            )}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Nombre"
                    className="border p-2"
                    onChange={handleChange}
                />

                <input
                    name="email"
                    placeholder="Email"
                    className="border p-2"
                    onChange={handleChange}
                />

                <textarea
                    name="message"
                    placeholder="Mensaje"
                    className="border p-2"
                    rows="4"
                    onChange={handleChange}
                ></textarea>

                <button className="bg-blue-500 text-white py-2 rounded">
                    Enviar
                </button>
            </form>
        </div>
    );
}
