
import { create } from 'zustand'

// Definir el store con Zustand
const useStore = create((set) => ({
    user: localStorage.getItem("user") || "", // Inicializa el valor del input desde el localStorage o lo deja en blanco si no hay nada
    setUser: (newValue) => {
        set({ user: newValue }); // Actualiza el estado con el nuevo valor
        localStorage.setItem("user", newValue); // Guarda el nuevo valor en el localStorage
    },
    data: JSON.parse(localStorage.getItem("data")) || "", // Inicializa 'data' desde el localStorage o lo deja en blanco si no hay nada
    setData: (data) => {
        set({ data }); // Actualiza el estado con los datos obtenidos
        localStorage.setItem("data", JSON.stringify(data)); // Guarda los datos en el localStorage
    },
    repo: JSON.parse(localStorage.getItem("repo")) || "", // Inicializa 'data' desde el localStorage o lo deja en blanco si no hay nada
    setRepo: (repo) => {
        set({ repo }); // Actualiza el estado con los datos obtenidos
        localStorage.setItem("repo", JSON.stringify(repo)); // Guarda los datos en el localStorage
    },
}));

export default useStore;