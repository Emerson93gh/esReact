import React from "react";

function TaskCard({task, deleteTask}) { // props
  // function eliminarTarea() {
  //   alert('Eliminando...');
  // }

  return (
    <div>
      <h1> {task.title} </h1>
      <p> {task.description} </p>
      <button onClick={() => deleteTask(task.id) }>
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
