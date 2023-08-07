import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import "./../css/Register.css";
import logo4 from "./../assets/logo3.jpg";

const Register = () => {

  const navigate=useNavigate();

  const [user,setUser]=useState({
    name:"",email:"",phone:"",bloodgroup:"",password:"",cpassword:""
  });

  let name,value;

  const handleInputs=(e)=>{

    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});

  }

  const PostData=async(e)=>{

    e.preventDefault();

    const{name,email,phone,bloodgroup,password,cpassword}=user;

    const res=await fetch('/register',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,bloodgroup,password,cpassword
      })
    });

    const data=await res.json();

    if(res.status==422 || !data){
      console.log("Invalid Registeration");
      window.alert("Invalid Registeration");
    }
    else{
      console.log("Successful Registeration");
      window.alert("Successful Registeration");

      navigate('/login');
    }
    

  }

  return (
    <>

      <div id="registermain">

        <div className='registerdivs'>

          <img src={logo4} id="registerleftlogo"></img>

        </div>

        <div className='registerdivs' id="registerdivmid">

        </div>

        <div className='registerdivs' id="registerdivright">
          <div id="rdrtext">

            <span id="rdrhead">Welcome to <span id="rdrheadlogo">LIFEPULSE</span></span>
            <span id="rdrinfo">PLEASE ENTER YOUR DETAILS TO REGISTER.</span>

          </div>
          <div id="rdrform">

            <form id="rdrform" method='POST'>

              <section className='rdrforminpgroup'>
                <label htmlFor='name'>
                  <i className="rdrformicon zmdi zmdi-account material-icons-name"></i>
                </label>
                <input className="rdrforminp" type="text" name='name' id='name' value={user.name} onChange={handleInputs} placeholder='Your Name' required></input>
              </section>

              <section className='rdrforminpgroup'>
                <label htmlFor='email'>
                  <i className="rdrformicon zmdi zmdi-email material-icons-name"></i>
                </label>
                <input className="rdrforminp" type="email" name='email' id='email' value={user.email} onChange={handleInputs} placeholder='Your Email' required></input>
              </section>

              <section className='rdrforminpgroup'>
                <label htmlFor='phone'>
                  <i className="rdrformicon zmdi zmdi-phone-in-talk material-icons-name"></i>
                </label>
                <input className="rdrforminp" type="number" name='phone' id='phone' value={user.phone} onChange={handleInputs} placeholder='Your Phone' required></input>
              </section>

              <section className='rdrforminpgroup'>
                <label htmlFor='bloodgroup'>
                  <i className="rdrformicon zmdi zmdi-hospital material-icons-name"></i>
                </label>
                <input className="rdrforminp" type="bloodgroup" name='bloodgroup' id='bloodgroup' value={user.bloodgroup} onChange={handleInputs} placeholder='Your Blood Group' required></input>
              </section>

              <section className='rdrforminpgroup'>
                <label htmlFor='password'>
                  <i className="rdrformicon zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input className="rdrforminp" type="password" name='password' id='password' value={user.password} onChange={handleInputs} placeholder='Your Password' required></input>
              </section>

              <section className='rdrforminpgroup'>
                <label htmlFor='cpassword'>
                  <i className="rdrformicon zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input className="rdrforminp" type="password" name='cpassword' id='cpassword' value={user.cpassword} onChange={handleInputs} placeholder='Confirm Your Password' required></input>
              </section>

              <input type="submit" name='signup' id='signup' onClick={PostData} className="rdrformbt" value="Register"></input>

              <Link id="rdrlink" to='/login'>Already a member?</Link>

            </form>

          </div>
        </div>

      </div>

    </>
  )
}

export default Register