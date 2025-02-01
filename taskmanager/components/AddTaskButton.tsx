import { PlusCircle } from "lucide-react";

interface AddTaskButtonProps {
    onClick: () => void;
}

export default function AddTaskButton({ onClick }: AddTaskButtonProps) {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center p-3 text-white bg-orange-600 rounded-full shadow-lg hover:bg-orange-700 transition-all"
            aria-label="Agregar nueva tarea"
        >
            <PlusCircle size={40} />
        </button>
    );
}

/* 
    Botón de agregar tarea 
    Funcionalidad: Abrir modal para agregar una tarea
*/