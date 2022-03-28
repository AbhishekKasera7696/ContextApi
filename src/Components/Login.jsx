import React from "react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
   
    const {login} = React.useContext(AuthContext);

  const [formDetails, setFormDetails] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const { email, password } = formDetails;

  const handleSubmit = (e) => {

    e.preventDefault();
   
    fetch(`https://reqres.in/api/login`, {
        method:"POST",
        body: JSON.stringify(formDetails),
        headers:{"Content-Type" : "application/json"}
    })
    .then((res) => res.json())
    .then((res) => login(res.token));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      <input
        name="email"
        type="text"
        placeholder="email"
        value={email}
        onChange={handleChange}
      ></input>
      <br></br>

      <input
        name="password"
        type="text"
        placeholder="password"
        value={password}
        onChange={handleChange}
      ></input>
      <br></br>
      <input type="submit" value="LOGIN"></input>
     
    </form>
  );
};

export { Login };
