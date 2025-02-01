import { RefreshCw } from "lucide-react";
import { useContext, useState } from "react";
import { TaskContext } from "@/hooks/TaskContext";
import { toast } from "react-toastify";

export default function RefreshButton() {
    const taskContext = useContext(TaskContext);
    const [isRefreshing, setIsRefreshing] = useState(false);

    if (!taskContext) return <p>Cargando...</p>;
    const { getTasks } = taskContext;

    const handleRefresh = async () => {
        setIsRefreshing(true);
        await getTasks();
        setIsRefreshing(false);
        toast.success("Tareas actualizadas!")
    };

    return (
        <button
            onClick={handleRefresh}
            className={`fixed bottom-2 sm:bottom-8 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all ${isRefreshing ? "animate-spin" : ""
                }`}
            aria-label="Refrescar tareas"
        >
            <RefreshCw size={24} />
        </button>
    );
}

/* 
    Botón de actualizar tareas.
    Funcionalidad: Obtener el arreglo de tareas actualizado.
*/