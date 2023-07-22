import React, { useState } from 'react'
import axios from "axios";
import {useNavigate}  from "react-router-dom"


const Login = () => {
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");

const navigate = useNavigate();

const handleEmail = (e) => {
  setEmail(e.target.value);
};
const handlePassword = (e) => {
  setPassword(e.target.value);
};
console.log({ email, password });

const handleApi = () => {
  axios
    .post("https://reqres.in/api/login", { email: email, password: password })
    .then((result) => {
      // console.log(result.data);
      // alert("success");
localStorage.setItem('token' , result.data.token);
navigate('/Dashboard');
    })
    .catch((error) => {
      alert("failed");
      console.log(error);
    });
};

  return (
    <div>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={handleEmail}/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="Password1" placeholder="Password" value={password} onChange={handlePassword}/>
  </div>
 
  <button type="submit" class="btn btn-primary" onClick={handleApi}>Login</button>
</form>
    </div>
  )
}

export default Login
