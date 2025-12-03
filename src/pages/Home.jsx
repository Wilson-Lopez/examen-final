import { useEffect } from "react";
import { useGhibliStore } from "../store/store";
import CardList from "../components/CardList";

export default function Home() {
    const { movies, fetchMovies } = useGhibliStore();

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">Studio Ghibli Films</h1>
                <p className="text-gray-600">
                    Explora las películas más icónicas del mundo Ghibli 🌿✨
                </p>
            </div>

            <CardList movies={movies.slice(0, 6)} />
        </div>
    );
}
