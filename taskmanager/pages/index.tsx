import AddTaskButton from '@/components/AddTaskButton';
import EmptyState from '@/components/EmptyState';
import RefreshButton from '@/components/RefreshButton';
import TaskList from '@/components/TaskList';
import TaskModal from '@/components/TaskModal';
import { TaskContext } from '@/hooks/TaskContext';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

export default function Home() {
  const taskContext = useContext(TaskContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (!taskContext) return <p>Cargando...</p>;
  const { tasks, loading } = taskContext;

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#2e3440]">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full h-10 sm:h-20 bg-orange-500 rounded-b-2xl z-10"></div>

      {/* Botón de agregar */}
      <div className="fixed sm:top-16 left-1/2 transform -translate-x-1/2 z-20">
        <AddTaskButton onClick={() => setIsModalOpen(true)} />
      </div>

      <div className="pt-20 sm:pt-32 pb-8 px-4 sm:px-20 w-full">
        {/* Modal para agregar tareas */}
        <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* Tareas */}
        {tasks.length > 0 ? <TaskList tasks={tasks} /> : <EmptyState />}

        {/* Botón para refrescar */}
        <RefreshButton />
      </div>
    </div>
  );
}

/* 
    Página central.
*/