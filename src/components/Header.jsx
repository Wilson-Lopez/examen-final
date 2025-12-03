import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/entities">Películas</Link>
            <Link to="/contact">Contacto</Link>
        </nav>
    );
}
