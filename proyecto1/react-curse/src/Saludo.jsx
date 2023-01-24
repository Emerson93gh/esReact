// export function Saludar() {
//   return <h1>Componente de React JS</h1>;
// }

// PROPS
export function Saludar(props) {
  console.log(props)
  return <h1> {props.title} </h1>;
}

export function User(props) {
  console.log(props);
  return (
    <div>
      <h1> {props.name} </h1>
      <p> {props.amount} </p>
      <p> {props.married ? "married" : "single"} </p>
      <ul>
        <li>City: {props.address.city} </li>
        <li>Address: {props.address.street} </li>
      </ul>
    </div>
  );
}
