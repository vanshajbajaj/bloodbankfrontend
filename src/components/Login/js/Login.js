import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./../css/Login.css";
import logo3 from "./../assets/logo3.jpg";

const Login = () => {

  const navigate=useNavigate();

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const LoginUser=async(e)=>{

    e.preventDefault();

    console.log(email,password);

    const res=await fetch("/signin",{
      method:"POST",
      // credentials:'include',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,password})
    });

    const data=await res.json();

    if(res.status==400 || !data){
      window.alert("Invalid Credentials");
    }
    else{
      window.alert("Logged in Successfully");

      navigate('/');
    }

  }

  return (
    <>

      <div id="loginmain">

        <div className='logindivs'>
          <img src={logo3} id="leftlogologin"></img>
        </div>

        <div className='logindivs' id="logindivmid">

        </div>

        <div className='logindivs' id="logindivright">
          <div id="ldrtext">

            <span id="ldrhead">Welcome to <span id="ldrheadlogo">LIFEPULSE</span></span>
            <span id="ldrinfo">PLEASE ENTER YOUR CREDENTIALS TO LOGIN.</span>

          </div>
          <div id="ldrform">

            <form id="ldrform" method="POST">

              <section className='ldrforminpgroup'>
                <label htmlFor='email'>
                  <i className="ldrformicon zmdi zmdi-email material-icons-name"></i>
                </label>
                <input className="ldrforminp" type="email" name='email' id='email' 
                value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' required></input>
              </section>

              <section className='ldrforminpgroup'>
                <label htmlFor='password'>
                  <i className="ldrformicon zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input className="ldrforminp" type="password" name='password' id='password'
                value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Your Password' required></input>
              </section>

              <input type="submit" onClick={LoginUser} name='signin' id='signin' className="ldrformbt" value="Login"></input>

            </form>

          </div>
        </div>

      </div>

    </>
  )
}

export default Login