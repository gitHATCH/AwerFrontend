import React, { createContext, useState, useEffect, ReactNode } from "react";
import { toast } from "react-toastify";
import axiosClient from "../config/axiosClient";

interface Task {
    id: number;
    description: string;
}

interface TaskContextType {
    tasks: Task[];
    loading: boolean;
    taskAdded: boolean;
    setTaskAdded: (value: boolean) => void;
    getTasks: () => Promise<void>;
    addTask: (description: string) => Promise<void>;
    deleteTask: (id: number) => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
    children: ReactNode;
}

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [taskAdded, setTaskAdded] = useState<boolean>(false)

    // Obtener tareas
    const getTasks = async () => {
        setLoading(true);
        try {
            const { data } = await axiosClient.get<Task[]>('/tasks');
            setTasks(data);
            console.log(data);

        } catch (error) {
            console.error("Error al obtener tareas", error);
            toast.error("Error al obtener tareas");
        } finally {
            setLoading(false);
        }
    };

    // Agregar tarea
    const addTask = async (description: string) => {
        try {
            const { data } = await axiosClient.post<Task>('/tasks', { description });
            setTaskAdded(true)
            setTasks((prevTasks) => [...prevTasks, data]);
            toast.success("Tarea agregada correctamente!");
        } catch (error) {
            console.error("Error al agregar tarea", error);
            toast.error("Error al agregar tarea");
        }
    };

    // Eliminar tarea
    const deleteTask = async (id: number) => {

        if (!id) return;
        try {
            await axiosClient.delete(`/tasks/${id}`);
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
            toast.success("Tarea eliminada correctamente");
        } catch (error) {
            console.error("Error al eliminar tarea", error);
            toast.error("Error al eliminar tarea");
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, loading, taskAdded, setTaskAdded, getTasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export { TaskContext, TaskProvider };

/* 
    Hook para gestionar tareas.
    Funcionalidad: 
        Permite obtener las tareas.
        Permite agregar una tarea.
        Permite eliminar una tarea.
        Indica si se ha agregado una tarea para realizar una animación de integración a la lista de tareas.
*/
