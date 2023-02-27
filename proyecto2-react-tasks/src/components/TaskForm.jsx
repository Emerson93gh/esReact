import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-700 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">
          Crea tu tarea
        </h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={function (e) {
            setTitle(e.target.value);
          }}
          value={title}
          className="bg-slate-500 p-3 mb-2 w-full"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-500 p-3 mb-2 w-full"
        ></textarea>
        <button
          className="bg-indigo-500 text-white px-3 py-1 hover:bg-indigo-400"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
