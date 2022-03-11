import React from 'react';

export default function Signup() {
  return (
    <div className='signup-container'>
      <p>Username</p>
      <input type="text" />
      <p>Password</p>
      <input type="text" />
      <p>Confirm password</p>
      <input type="text" />
      <button>CONTINUE</button>
    </div>
  );
}
