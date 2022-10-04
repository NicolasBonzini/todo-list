import React from "react";
import LoginForm from "./LoginForm";
import { useState } from 'react';


function Login() {
  const [data, setData] = useState("");
  return (
    <div>
       <LoginForm/> 
    </div>
  );
}

export default Login;
