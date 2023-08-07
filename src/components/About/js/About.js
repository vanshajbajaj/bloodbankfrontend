import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./../css/About.css";

const About = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const [donor,setDonor]=useState({
    name2:"",age2:"",phone2:"",bloodgroup2:"",type:false,stat:false
  });

  const [patient,setPatient]=useState({
    name2:"",age2:"",phone2:"",bloodgroup2:"",type:true,stat:false
  });

  let name,value;

  const handleInputs1=(e)=>{

    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setDonor({...donor,[name]:value});

  }

  const handleInputs2=(e)=>{

    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setPatient({...patient,[name]:value});

  }

  

  const displaydon=()=>{
    const allreq=userData.requests;
    if(!allreq) return null;
    var d=0;
    for(var i in allreq){
      if(i.type==false){
        d+=1;
      }
    }
    return d;
  }

  const displayr=()=>{
    const allreq=userData.requests;
    var r=0;
    for(var i in allreq){
      if(i.type==true){
        r+=1;
      }
    }
    return r;
  }

  const DonateBlood=async (e)=>{

    e.preventDefault();
    const{name2,age2,phone2,bloodgroup2,type,stat}=donor;

    const res=await fetch('/donateapi',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({name2,age2,phone2,bloodgroup2,type,stat})
    });

    const data=await res.json();

    if(!data){
      console.log("req not sent");
    }
    else{
      alert("req sent");
      // navigate('/about');
      window.location.reload();
    }

  }

  const RequestBlood=async (e)=>{

    e.preventDefault();
    const{name2,age2,phone2,bloodgroup2,type,stat}=patient;

    const res=await fetch('/requestapi',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({name2,age2,phone2,bloodgroup2,type,stat})
    });

    const data=await res.json();

    if(!data){
      console.log("req not sent");
    }
    else{
      alert("req sent");
      // navigate('/about');
      window.location.reload();
    }

  }

  const callAboutPage = async () => {

    try {

      const res = await fetch('/about1', {
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
      setUserData(data);


    } catch (err) {
      console.log(err);
      navigate('/login');
    }

  }

  const displayreq=()=>{

    const allreq=userData.requests;
    if(!allreq) return null;
    return allreq.map((reqs,index)=>(
      <div className='trcss' key={index}>
        <div className='tccss'>{reqs.name2}</div>
        <div className='tccss'>{reqs.age2}</div>
        <div className='tccss'>{reqs.phone2}</div>
        <div className='tccss'>{reqs.bloodgroup2}</div>
        <div className='tccss'>{reqs.type?"Requested":"Donated"}</div>
        <div className='tccss'>{reqs.stat?"Approved":"Pending"}</div>
      </div>
    ))

  }


  useEffect(() => {

    callAboutPage();

  }, []);

  return (
    // <div>hello{userData.name}</div>
    <>

      <div id="profilemaindiv">

        <div id="profilenamediv">

          <p><span className="profilehead">WELCOME</span> <span class="profilename">{userData.name}</span></p>

        </div>

        <div id="profileinfodiv">

          <div id="profilecount">

            <div className="reqcountbar">
              <p className="reqcounterhead">
                {/* {displaydon()} */}
                </p><p className='reqcounterinfo'>Donations</p>
            </div>

            <div className="reqcountbar">
              <p className="reqcounterhead">
                {/* {displayr()} */}
                </p><p className='reqcounterinfo'>Requests</p>
            </div>

          </div>

          <div id="profileallreq">

            {/* {displayreq()} */}
            {/* <div id="profilereqtable"> */}
              <div id="profiletable2">
              
                <div className='trcss ab'>
                  <div className='tccss ab'>Name</div>
                  <div className='tccss ab'>Age</div>
                  <div className='tccss ab'>Phone</div>
                  <div className='tccss ab'>Bloodgroup</div>
                  <div className='tccss ab'>Type</div>
                  <div className='tccss ab'>Status</div>
                </div>
                
                {displayreq()}
                
              </div>
            {/* </div> */}

          </div>

        </div>

        <div id="profilereqdiv">

          <div class="profilereqformdiv">

            <div id="adrtext1">

              <span id="adrhead">DONATE <span id="adrheadlogo">BLOOD</span></span>

            </div>

            <form id="adrform" method='POST'>

              <section className='adrforminpgroup2 abc'>
                <label htmlFor='name2'>
                  <i className="adrformicon zmdi zmdi-account material-icons-name"></i>
                </label>
                <input className="adrforminp" type="text" name='name2' id='name2'
                   value={donor.name2} onChange={handleInputs1}
                  placeholder='Donor Name' required></input>
              </section>

              <section className='abc adrforminpgroup2'>
                <label htmlFor='age2'>
                  <i className="adrformicon zmdi zmdi-email material-icons-name"></i>
                </label>
                <input className="adrforminp" type="number" name='age2' id='age2'
                   value={donor.age2} onChange={handleInputs1}
                  placeholder='Donor Age' required></input>
              </section>

              <section className='abc adrforminpgroup2'>
                <label htmlFor='phone2'>
                  <i className="adrformicon zmdi zmdi-phone-in-talk material-icons-name"></i>
                </label>
                <input className="adrforminp" type="number" name='phone2' id='phone2'
                  value={donor.phone2} onChange={handleInputs1}
                  placeholder='Donor Phone' required></input>
              </section>

              <section className='abc adrforminpgroup2'>
                <label htmlFor='bloodgroup2'>
                  <i className="adrformicon zmdi zmdi-hospital material-icons-name"></i>
                </label>
                <input className="adrforminp" type="text" name='bloodgroup2' id='bloodgroup2'
                   value={donor.bloodgroup2} onChange={handleInputs1}
                  placeholder="Donor's Blood Group" required></input>
              </section>

              <input type="submit" name='signup' id='signup'
                onClick={DonateBlood}
                className="adrformbt" value="Send Request"></input>

            </form>

          </div>

          <div class="profilereqformdiv">

            <div id="adrtext2">

              <span id="adrhead">REQUEST <span id="adrheadlogo">BLOOD</span></span>

            </div>

            <form id="adrform" method='POST'>

              <section className='adrforminpgroup2'>
                <label htmlFor='name2'>
                  <i className="adrformicon zmdi zmdi-account material-icons-name"></i>
                </label>
                <input className="adrforminp" type="text" name='name2' id='name2'
                   value={patient.name2} onChange={handleInputs2}
                  placeholder='Patient Name' required></input>
              </section>

              <section className='abc adrforminpgroup2'>
                <label htmlFor='age2'>
                  <i className="adrformicon zmdi zmdi-email material-icons-name"></i>
                </label>
                <input className="adrforminp" type="number" name='age2' id='age2'
                   value={patient.age2} onChange={handleInputs2}
                  placeholder='Patient Age' required></input>
              </section>

              <section className='abc adrforminpgroup2'>
                <label htmlFor='phone2'>
                  <i className="adrformicon zmdi zmdi-phone-in-talk material-icons-name"></i>
                </label>
                <input className="adrforminp" type="number" name='phone2' id='phone2'
                  value={patient.phone2} onChange={handleInputs2}
                  placeholder='Patient Phone' required></input>
              </section>

              <section className='abc adrforminpgroup2'>
                <label htmlFor='bloodgroup2'>
                  <i className="adrformicon zmdi zmdi-hospital material-icons-name"></i>
                </label>
                <input className="adrforminp" type="text" name='bloodgroup2' id='bloodgroup2'
                   value={patient.bloodgroup2} onChange={handleInputs2}
                  placeholder="Patient's Blood Group" required></input>
              </section>

              <input type="submit" name='signup' id='signup'
                onClick={RequestBlood}
                className="adrformbt" value="Send Request"></input>

            </form>

          </div>

        </div>

      </div>

    </>

  )
}

export default About;