import React, { useState, useContext } from "react";
import postLoginUser from "../services/postLoginUser";
//React Router
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginForm = () => {
  //Redireccion
  const navigate = useNavigate();

  //Estado del formulario
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  //Captura los datos del formulairo
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  //Envia los datos del formulario
  const handleSubmit =  async (event) => {
    setIsLoading(true);
    event.preventDefault();

    const congrats = await postLoginUser(form);

    if(congrats) {
      setForm({
        email: "",
        password: "",
      });

      setIsLoading(false);
      navigate('/home')
    } else {
      alert("No");
    }
  };

  return (
    <>
      {isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        <div>
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <section>
              <label htmlFor="email">EMAIL</label>
              <input
                id="email"
                type="email"
                onChange={handleChange}
                value={form.email}
                required
              />
            </section>

            <section>
              <label htmlFor="password">PASSWORD</label>
              <input
                id="password"
                type="password"
                onChange={handleChange}
                value={form.password}
                required
              />
            </section>
            <button type="submit">LOGUEARSE</button>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginForm;
