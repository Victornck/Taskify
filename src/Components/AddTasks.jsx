import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-50 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Título da tarefa: "
        className="border outline-slate-400 rounded-md px-4 py-2"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Descrição da tarefa: "
        className="border outline-slate-400 rounded-md px-4 py-2"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os campos de Título e Descrição");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg bg-green-800 font-bold text-white px-4 py-2 rounded-full"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
