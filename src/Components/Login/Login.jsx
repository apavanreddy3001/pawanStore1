import React, { useState } from 'react'

function Login() {
  const [userEmail,setUserEmail]= useState("");
  const [password,setPassword]= useState("");
  console.log(password + userEmail);
  return (
    <div className='flex w-full'>
      <div className=''> </div>
      <div className=''>
          <div className='card bg-base-300 rounded-box grid h-20 grow place-items-right' >
              <form>
                        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                              <legend className="fieldset-legend">Login</legend>
                              
                              <label className="fieldset-label">Email</label>
                              <input type="email" className="input" placeholder="Email"
                               name='userEmail' value={userEmail}
                               onChange={(e)=>setUserEmail(e.target.value)}
                               />
                              
                              <label className="fieldset-label">Password</label>
                              <input type="password" className="input"
                               placeholder="Password"
                               value={password}
                               onChange={(e)=>{setPassword(e.target.value)}}
                               />
                              
                              <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Login