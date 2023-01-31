import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { Posts } from "./Posts";
import { Saludar } from "./Saludar";
// import { Saludar, User } from "./Saludo";
// import Producto, { Navbar } from "./Producto";
import { TaskCard } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value);
};

const users = [
  {
    id: 1,
    name: "Clark Cvas",
    image: "https://robohash.org/alex",
  },
  {
    id: 2,
    name: "Kelvin",
    image: "https://robohash.org/oscar",
  },
];

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
    <Saludar />
    <Button text="Saludar" />

    {/* Manejador de evento - ES5 (ecmascript 5)
    <input
      id="hola"
      onChange={function (e) {
        console.log(e.target.value);
      }}
    /> */}
    {/* ES6 - Array function 
    <input
      id="hola"
      onChange={(e) => {
        console.log(e.target.value);
      }}
    /> */}
    <input id="hola" onChange={handleChange} />

    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Enviado");
      }}
    >
      <h1>Registro de usuarios</h1>
      <button>Enviar</button>
    </form>

    <Posts />

    {/* Arrays */}
    {users.map((user, index) => {
      return <div key={index}>
        <h1>{user.name}</h1>
        <img src={user.image} />
      </div>;
    })}
  </>
);
