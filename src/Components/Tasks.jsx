import { ChevronRightIcon, Trash2 } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-50 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-600 font-semibold text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through font-thin"
            }`}
          >
            {task.title}
          </button>
          <button className=" bg-slate-600 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className=" bg-slate-600 p-2 rounded-md text-white"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
