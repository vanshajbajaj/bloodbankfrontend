import React, { useState } from 'react'
import "./../css/Home.css"
import { useEffect } from 'react';
import topimg from "./../assets/topimg.jpg";
import topimg2 from "./../assets/topimg2.jpg";
import { NavLink } from 'react-router-dom';

const Home = () => {

  const[notices,setNotices]=useState({});

  const displaynotices=()=>{

    // const upd=notices;
    // console.log(notices._id);
    // const a=notices.update;
    // alert(a);
    if(!notices.length) return null;
    return notices.map((reqs,index)=>(
      <div className='noticeli' key={index}>{reqs.update}</div>
    ))

  }

  const callHomePage = async () => {

    try {

      const res = await fetch('/home1', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      })

      const data = await res.json();
      console.log(res);

      if (res.status != 200) {
        // alert("hello1");
        const error = new Error(res.error);
        console.log(error);
        throw error;
      }
      else{
        // alert(typeof(data));
      }

      // console.log(data);
      setNotices(data);


    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {

    callHomePage();

  }, []);


  return (
    <>

      <div id="homemain">

        <div id="homehead">

          <div id="hhl" className='hhd'>
            <img src={topimg} id="hhlimg"></img>
          </div>

          <div id="hhr" className='hhd'>

            <p id="hhr1">WELCOME TO</p>
            <p id="hhr2">LIFE PULSE</p>
            <p id="hhr3">LIFEPULSE is an online blood bank where you can request or donate blood.</p>
            <div id="hhr4"><NavLink id="hhr5" to='/register'>REGISTER</NavLink></div>


          </div>

        </div>

        <div id="homemid">

          <div className="homesubdiv">

            <div className="subdivcontent">
              <i class=" subdivlogo zmdi zmdi-hospital"></i>
              <p className='subdivp1'>10K+ DONATIONS</p>
              <p className='subdivp2'> WE HAVE RECIEVED 10K+ DONATIONS</p>
            </div>

          </div>
          <div className="homesubdiv" id="homesubdiv2">

            <div className="subdivcontent">
              <i class=" subdivlogo2 zmdi zmdi-hospital"></i>
              <p className='subdivp1'>15k+ MEMBERS</p>
              <p id='subdivp2'>15K+ MEMBERS HAVE JOINED OUR COMMUNITY</p>
            </div>

          </div>
          <div className="homesubdiv">

            <div className="subdivcontent">
              <i class=" subdivlogo zmdi zmdi-hospital"></i>
              <p className='subdivp1'>7K+ REQUESTS</p>
              <p className='subdivp2'>WE HAVE PROVIDED BLOOD TO 7K+ PATIENTS</p>
            </div>

          </div>

        </div>

        <div id="noticediv">

          <div id="ndl" className='nsd'>
            <div id="ndlp">
              <p>NOTICES</p>
            </div>
            <div id="ndlcontent">
              {displaynotices()}
            </div>

          </div>
          <div id="ndr" className='nsd'>
            <img src={topimg2} id="ndrimg"></img>
          </div>

        </div>

      </div>

    </>
  )
}

export default Home;