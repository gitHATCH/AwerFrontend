import { useContext, useEffect, useState } from "react";
import TaskItem from "@/components/TaskItem";
import { TaskContext } from "@/hooks/TaskContext";

interface TaskListProps {
    tasks: { description: string, id: number }[];
}

export default function TaskList({ tasks }: TaskListProps) {
    const taskContext = useContext(TaskContext);
    if (!taskContext) return <p>Cargando...</p>;
    const { taskAdded, setTaskAdded } = taskContext;

    const [animateTask, setAnimateTask] = useState(false);

    useEffect(() => {
        if (taskAdded) {
            setAnimateTask(true);
            const timeout = setTimeout(() => {
                setAnimateTask(false);
                setTaskAdded(false);
            }, 500);

            return () => clearTimeout(timeout);
        }
    }, [taskAdded, setTaskAdded]);

    const reversedTasks = tasks.slice().reverse();

    return (
        <div className="w-full mt-6 space-y-4">
            {reversedTasks.map((task, index) => (
                <div key={index} className={animateTask && index === 0 ? "task-animation" : ""}>
                    <TaskItem task={task} />
                </div>
            ))}
        </div>
    );
}

/* 
    Lista de cards de tareas.
    Funcionalidad: Muestra las tareas de manera inversa para mostrar la mas nueva más arriba.
*/