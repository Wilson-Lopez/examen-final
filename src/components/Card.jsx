export default function Card({ movie }) {
    return (
        <div className="border rounded shadow p-4">
            <img
                src={movie.image}
                className="w-full h-48 object-cover rounded"
                alt={movie.title}
            />

            <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
            <p className="text-sm text-gray-700">{movie.release_date}</p>

            <p className="text-sm mt-2">
                {movie.description.substring(0, 120)}...
            </p>
        </div>
    );
}
