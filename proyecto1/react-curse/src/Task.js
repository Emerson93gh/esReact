import "./task.css"; // Estilos con clases
// Estilos
export function TaskCard({ ready }) {
  // Estilos en linea
  //   const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };
  //   return (
  //     <div style={cardStyles}>
  //       <h1 style={{ fontWeight: "lighter" }}>Mi primer tarea</h1>
  //       <p>Tarea realizada</p>
  //     </div>
  //   );

  return (
    <div className="card">
      <h1>Mi primer tarea</h1>
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Tarea realizada" : "Tarea no realizada"}
      </span>
    </div>
  );
}
