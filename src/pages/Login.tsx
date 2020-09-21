import React, { useState } from "react";
import ACC from "../Data";
import "./login.css";
// interface Props{

// }
export default function Login() {
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const checkLogin = () => {
	  let ckeck:boolean = false;
	  for(let i of ACC){
		  if(i.name === name && i.pass === pass){
			//   console.log
			ckeck = true;
		  }
	  }
	  console.log(ckeck);
	  setName("");
	  setPass("");
  }
  return (
    <div
      className="container-login100"
      // style="background-image: url('images/bg-01.jpg');"
    >
      <div className="wrap-login100">
        <div className="login100-form validate-form">
          <span className="login100-form-logo">
            <i className="zmdi zmdi-landscape"></i>
          </span>

          <span className="login100-form-title p-b-34 p-t-27">Log in</span>

          <div className="wrap-input100 validate-input">
            <input
              className="input100"
              type="text"
              name="username"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
        
          </div>

          <div
            className="wrap-input100 validate-input"
            data-validate="Enter password"
          >
            <input
              className="input100"
              type="password"
              name="pass"
              placeholder="Password"
			  value={pass}
			  onChange={(e)=> setPass(e.target.value)}
            />
          </div>

          {/* <div className="contact100-form-checkbox">
            <label className="label-checkbox100" htmlFor="ckb1">
              <input
                className="input-checkbox100"
                id="ckb1"
                type="checkbox"
                name="remember-me"
              />
              Remember me
            </label>
          </div> */}

          <div className="container-login100-form-btn">
            <button className="login100-form-btn" onClick={checkLogin}>Login</button>
          </div>

          {/* <div className="text-center p-t-90">
            <a className="txt1" href="#">
              Forgot Password?
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
