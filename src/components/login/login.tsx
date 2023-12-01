import { useState } from "react";
import "./login.css";
import { useAuth } from "../../authContext";
const Login = () => {
    const auth = useAuth();
    const [enteredFormData,setEnteredFormData] = useState<{username: string; password:string}>({
        username: '',
        password: '',
      });
    const submitHandler =  (e:any) =>{
        e.preventDefault();
        if(enteredFormData.username ==="Rishi" && enteredFormData.password ==="123")
        {
            auth.authenticate(true);
        }
    }

    const changeHandler = (event:any)=>{
        const {name,value} = event.target;
        setEnteredFormData((prev) =>({
            ...prev, [name]:value,
        }));
     }

  return (
    <div className="card">
      <h1>{"<Login>"}</h1>
      <form onSubmit={submitHandler}>
        <div className="form-child">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={changeHandler}></input>
        </div>
        <div className="form-child">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={changeHandler}></input>
        </div>
        <div className="form-child">
          <button className="button-login">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
