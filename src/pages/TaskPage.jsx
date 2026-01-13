import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const taskId = Number(searchParams.get("id"));
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <p className="text-white">Tarefa não encontrada</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-black flex justify-center p-6">
      <div className="w-[500px] space-y-8">
        <div className="flex items-center justify-center relative">
          <button onClick={() => navigate(-1)} className="absolute left-0">
            <ChevronLeftIcon className="text-white" />
          </button>

          <h1 className="text-3xl text-slate-100 font-bold text-center px-10">
            Detalhes da sua Tarefa:
          </h1>
        </div>

        <div className="bg-slate-100 p-4 rounded-md">
          <h2 className="text-2xl text-slate-900 font-bold">{task.title}</h2>

          <p className="text-slate-900 font-medium mt-4">{task.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
