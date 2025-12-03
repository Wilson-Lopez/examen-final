import Card from "./Card";

export default function CardList({ movies }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {movies.map((m) => (
                <Card key={m.id} movie={m} />
            ))}
        </div>
    );
}
