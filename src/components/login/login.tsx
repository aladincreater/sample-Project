import { useState } from "react";
import "./login.css";
import { useAuth } from "../../authContext";
const Login = () => {
  const auth = useAuth();
  const [counter,setCounter] = useState<number>(0);
  const [enteredFormData, setEnteredFormData] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (
      enteredFormData.username === "Rishi" &&
      enteredFormData.password === "123"
    ) {
      auth.authenticate(true);
    } else {
      if(counter===0){
        alert("Wrong Credentials! Please try again!");
      }
      else{
        let i=counter;
        alert("Try Again! Only "+(2-i)+" tries left");
      }
      setCounter((prev)=> prev +1);
    }
  };

  const changeHandler = (event: any) => {
    const { name, value } = event.target;
    setEnteredFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="card-login">
      {counter === 3 ? (
        <h1>You have failed three times.Please try again after sometime.</h1>
      ) : (
        <>
          <h1>{"<Login>"}</h1>
          <form onSubmit={submitHandler}>
            <div className="form-child">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={changeHandler}
              ></input>
            </div>
            <div className="form-child">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={changeHandler}
              ></input>
            </div>
            <div className="form-child">
              <button className="button-login">Login</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
