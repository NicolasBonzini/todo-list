import React from "react";
import axios from "axios";

const urlLogin = "https://api-nodejs-todolist.herokuapp.com/user/login";

const postLoginUser = async (form) => {
  try {
    const res = await axios.post(
      urlLogin,
      JSON.stringify({
        email: form.email,
        password: form.password,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const token = res.data.token;

    localStorage.setItem("token", token);
  } catch (error) {
    console.log(error);
  }
};

export default postLoginUser;
