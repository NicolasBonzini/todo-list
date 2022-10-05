import React, { useState, useContext } from "react";
import postLoginUser from "../services/postLoginUser";
//React Router
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "",});
  const [isLoading, setIsLoading] = useState(false);
  const [ errors, setErrors ] = useState(false);


  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors(false)
    const response = await postLoginUser(form);

    if (response) {
      setForm({ email: "", password: "" });
      setIsLoading(false);
      navigate("/home");
    } else {
      setIsLoading(false);
      setErrors(true);
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
        {errors ? (<p>Las credenciales ingresadas son incorrectas</p>) : ("")}
    </>
  );
};

export default LoginForm;
