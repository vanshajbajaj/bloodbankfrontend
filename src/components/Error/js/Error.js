import React from 'react'
import { NavLink } from 'react-router-dom';
import "./../css/Error.css";

const Error = () => {
  return (
    <>

        <div id="errormain">

            <h1>ERROR! PAGE NOT FOUND</h1>
            <p>This Page is not reachable.</p>
            <NavLink id="errornl" to="/">Back to HomePage</NavLink>

        </div>

    </>
  )
}

export default Error