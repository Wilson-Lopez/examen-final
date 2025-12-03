import { useEffect } from "react";
import { useGhibliStore } from "../store/store";
import CardList from "../components/CardList";

export default function Entities() {
    const { movies, fetchMovies, page, nextPage, prevPage } = useGhibliStore();

    useEffect(() => {
        fetchMovies();
    }, []);

    const itemsPerPage = 6;
    const start = (page - 1) * itemsPerPage;
    const paginated = movies.slice(start, start + itemsPerPage);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Todas las Películas 🎬</h1>

            <CardList movies={paginated} />

            <div className="flex justify-center gap-4 mt-8">
                <button className="px-4 py-2 bg-gray-300 rounded" onClick={prevPage}>
                    Prev
                </button>

                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={nextPage}>
                    Next
                </button>
            </div>
        </div>
    );
}
