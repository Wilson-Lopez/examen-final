import { create } from "zustand";

export const useGhibliStore = create((set) => ({
    movies: [],
    page: 1,

    fetchMovies: async () => {
        const res = await fetch("https://ghibliapi.vercel.app/films");
        const data = await res.json();
        set({ movies: data });
    },

    nextPage: () => set((state) => ({ page: state.page + 1 })),
    prevPage: () => set((state) => ({ page: Math.max(state.page - 1, 1) })),
}));
