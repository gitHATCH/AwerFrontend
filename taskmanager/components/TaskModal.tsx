import { useContext, useState } from "react";
import { TaskContext } from '@/hooks/TaskContext';
import { toast } from "react-toastify";

interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TaskModal({ isOpen, onClose }: TaskModalProps) {
    const taskContext = useContext(TaskContext);
    const [description, setDescription] = useState("");
    const [charCount, setCharCount] = useState(0);

    if (!taskContext) return <p>Cargando...</p>;
    const { addTask } = taskContext;

    const handleAddTask = async () => {
        if (!description.trim()) {
            toast.error("La descripción no puede estar vacía");
            return;
        }

        try {
            await addTask(description);
            setDescription("");
            setCharCount(0);
            onClose();
        } catch (error) {
            toast.error("Error al agregar la tarea");
        }
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        if (text.length <= 255) {
            setDescription(text);
            setCharCount(text.length);
        }
    };

    return (
        isOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
                <div className="bg-[#2e3440] p-6 rounded-xl shadow-md shadow-black max-w-sm sm:max-w-lg w-full z-50">
                    <h2 className="text-xl font-semibold mb-4">Agregar Nueva Tarea</h2>
                    <div className="relative">
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded-lg mb-4 bg-slate-200 text-black"
                            rows={4}
                            placeholder="Descripción de la tarea"
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                        <span className="absolute top-0 right-2 text-xs text-gray-400">
                            {charCount}/255
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleAddTask}
                            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                        >
                            Aceptar
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}

/* 
    Modal para agregar una tarea.
    Funcionalidad: Permite ingresar la descripción de una tarea para agregarla.
*/