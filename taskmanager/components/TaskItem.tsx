import { TaskContext } from "@/hooks/TaskContext";
import { useContext, useEffect, useState } from "react";

interface TaskItemProps {
    task: { description: string, id: number };
}

export default function TaskItem({ task }: TaskItemProps) {
    const taskContext = useContext(TaskContext);
    if (!taskContext) return <p>Cargando...</p>;
    const { deleteTask } = taskContext;
    const [isHovered, setIsHovered] = useState(false);

    const handleDelete = async () => {
        console.log("El id es: ", task.id);

        await deleteTask(task.id);
    };

    useEffect(() => {
        setIsHovered(false);
    }, [task]);

    return (
        <div
            className={`p-4 rounded-xl shadow-md bg-slate-200 border border-gray-200 transition-transform duration-300 ease-in-out transform ${isHovered ? "scale-105" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex justify-between items-center">
                <p className="text-lg text-black break-words whitespace-normal">
                    {task.description}
                </p>
                {isHovered && (
                    <button
                        onClick={handleDelete}
                        className="ml-4 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        🗑️
                    </button>
                )}
            </div>
        </div>
    );
}

/* 
    Card de una tarea.
    Funcionalidad: Muestra la información de una tarea en particular y permite eliminarla.
*/