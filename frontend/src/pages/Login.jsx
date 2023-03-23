import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Login() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);

  const createUser = () => {
    let data = {
      name: name,
      password: password,
      email: email,
      phone: phone,
    };
    fetch("http://localhost:3500/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="nombre"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        placeholder="telefono"
        onChange={(event) => setPhone(event.target.value)}
      />
      <input
        type="password"
        placeholder="contraseña"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={() => createUser()}>Crear Usuario</button>
    </div>
  );
}

export default Login;
