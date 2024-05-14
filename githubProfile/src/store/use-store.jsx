
import { create } from 'zustand'

// Definir el store con Zustand
const useStore = create((set) => ({
    user: localStorage.getItem("user") || "", // Inicializa el valor del input desde el localStorage o lo deja en blanco si no hay nada
    setUser: (newValue) => {
        set({ user: newValue }); // Actualiza el estado con el nuevo valor
        localStorage.setItem("user", newValue); // Guarda el nuevo valor en el localStorage
    },
}));

export default useStore;