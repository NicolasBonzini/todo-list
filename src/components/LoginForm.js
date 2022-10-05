import React, { useState, useContext } from "react";
import postLoginUser from "../services/postLoginUser";

export const LoginForm = () => {
  //Redireccion
  // const navigate = useNavigate();
  //Estado del formulario
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);

  //Captura los datos del formulairo
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  //Envia los datos del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    if(postLoginUser(form)){
      setForm({
        email: "",
        password: "",
      });
      
    }
  };

  return (
    <>
    {success ? (
      <h1>Ingresastes</h1>
    ): (<div>
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
    </div>)}
    </>
  );
};

export default LoginForm;
