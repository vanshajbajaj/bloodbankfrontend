import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "./../css/Admin.css";
import { useNavigate } from 'react-router-dom';

const Admin = () => {

  const [userData, setUserData] = useState({});

  const [update, setUpdate] = useState('');

  const navigate = useNavigate();

  const displayall=()=>{

    // const allreq=userData;
    // alert(allreq);
    // if(!allreq) return null;
    // const reqarr=[];

    // for(const i in allreq){
    //     reqarr=reqarr.concat(i);
    //     alert(j);
    // }

    // return reqarr.map((reqs,index)=>(
    //   <div className='trcss' key={index}>
    //     <div className='tccss'>{reqs.name2}</div>
    //     <div className='tccss'>{reqs.age2}</div>
    //     <div className='tccss'>{reqs.phone2}</div>
    //     <div className='tccss'>{reqs.bloodgroup2}</div>
    //     <div className='tccss'>{reqs.type?"Requested":"Donated"}</div>
    //     <div className='tccss'>{reqs.stat?"Approved":"Pending"}</div>
    //   </div>
    // ))
  }

  const callAdminPage = async () => {

    try {

      const res = await fetch('/admin1', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      })

      const data = await res.json();

      if (res.status != 200) {
        const error = new Error(res.error);
        throw error;
      }

      console.log(data);
      setUserData(data.allUsers);


    } catch (err) {
      console.log(err);
      navigate('/login');
    }

  }

  const ChangeStatus = async (tid) => {

    const res = await fetch("/testapi", {
      method: "POST",
      // credentials:'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ tid })
    });

    const data = await res.json();

    if (res.status == 400 || !data) {
      window.alert("failed");
    }
    else {
      window.alert("Successfully");

      // navigate('/');
    }

  }

  const SendMessage = async (e) => {

    e.preventDefault();

    const res = await fetch("/postnotice", {
      method: "POST",
      // credentials:'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ update })
    });

    const data = await res.json();

    if (res.status == 400 || !data) {
      window.alert("Invalid Message");
    }
    else {
      window.alert("Message Displayed");

      navigate('/');
    }

  }

  useEffect(() => {

    callAdminPage();

  }, []);

  return (
    // <button onClick={()=>ChangeStatus(1234)}>Click here</button>
    <>

      <div id="adminmain">

        <div id="adminhead">
          <p><span >Welcome </span><span id='adname'> Admin</span></p>
        </div>

        {/* <div id="adminreqdiv">

                <table>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Bloodgroup</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
                {displayall()}
                </table>

            </div> */}

        <div id="adminsendupdate">

          <div id="adrtext">

            <span id="adrhead">Welcome to <span id="adrheadlogo">LIFEPULSE</span></span>
            <span id="adrinfo">PLEASE ENTER YOUR MESSAGE TO DISPLAY.</span>

          </div>
          <div id="adrform">

            <form id="adrform" method="POST">

              <section className='adrforminpgroup'>
                <label htmlFor='email'>
                  <i className="adrformicon zmdi zmdi-email material-icons-name"></i>
                </label>
                <input className="adrforminp" type="text" name='update' id='update'
                  value={update} onChange={(e) => setUpdate(e.target.value)} placeholder='Your Message' required></input>
              </section>

              <input type="submit" onClick={SendMessage} name='signin' id='signin' className="adrformbt" value="Send"></input>

            </form>

          </div>

        </div>
        <div id="adminshowreq">
          <div id="profiletable2">

            <div className='trcss ab'>
              <div className='tccss ab'>Name</div>
              <div className='tccss ab'>Age</div>
              <div className='tccss ab'>Phone</div>
              <div className='tccss ab'>Bloodgroup</div>
              <div className='tccss ab'>Type</div>
              <div className='tccss ab'>Status</div>
            </div>

            {displayall()}

          </div>
        </div>

      </div>

    </>
  )
}

export default Admin