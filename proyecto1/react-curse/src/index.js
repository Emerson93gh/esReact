import React from "react";
import ReactDOM from "react-dom/client";
// import { Saludar, User } from "./Saludo";
// import Producto, { Navbar } from "./Producto";
//import { Button } from "./Button"
import { TaskCard } from "./Task"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Saludar title="Hola mundo" />
    <Saludar title="Hola React" />
    <Saludar title="Hola JSX" /> */}
    {/* <User
      name="eSolano"
      amount={300}
      married={false}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {alert('Hello')}}
    />
    <User
      name="Armando"
      amount={400}
      married={true}
      points={[100, 33]}
      address={{ street: "321 Main Street", city: "New York" }}
      greet={function () {alert('Bye')}}
    />
    <Button text="Click me"/>
    <Button text="Pay"/>
    <Button text="" name="Joe" /> */}
    <TaskCard ready={true} />
  </>
);
