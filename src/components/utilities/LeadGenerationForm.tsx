import { useState } from "react";

interface LeadGenerationFormProps {
  onSuccess?: () => void;
}

export function LeadGenerationForm({ onSuccess }: LeadGenerationFormProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [proyecto, setProyecto] = useState("");
  const [loading, setLoading] = useState(false);

  const sendLead = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://hook.us2.make.com/a7ypg574akz5k9enedo5k9za7bqbavmn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, proyecto }),
      });
      setNombre("");
      setEmail("");
      setProyecto("");
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      alert("Algo salió mal. Por favor intentá más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-1" onSubmit={sendLead}>
      <h5 className="text-sm font-bold mb-2">Presupuesto rápido</h5>
      <input
        type="text"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Tu nombre"
        className="rounded px-2 py-1 border border-portfolio-accent/30 bg-portfolio-dark text-white text-xs"
        required
      />
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Tu email"
        className="rounded px-2 py-1 border border-portfolio-accent/30 bg-portfolio-dark text-white text-xs"
        required
      />
      <textarea
        value={proyecto}
        onChange={e => setProyecto(e.target.value)}
        placeholder="Contame tu idea o proyecto"
        className="rounded px-2 py-1 border border-portfolio-accent/30 bg-portfolio-dark text-white text-xs"
        rows={2}
        required
      />
      <button
        type="submit"
        className="bg-portfolio-accent hover:bg-portfolio-gradient-2 text-white font-semibold px-3 py-1.5 rounded-full shadow transition-all duration-300 text-xs"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
