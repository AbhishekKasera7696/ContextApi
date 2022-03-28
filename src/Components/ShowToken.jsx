import React from 'react';
import { AuthContext } from '../Context/AuthContext';

const ShowToken = () => {

   const  {token,logout} = React.useContext(AuthContext)

  return (
    <div>
       <h1>{token}</h1>
       <br>
       </br>
      <button onClick={logout}>LOGOUT</button>
    </div>
  )
}

export {ShowToken}
