import React from 'react';
import '../../styles/login/login.scss'
import { useState, useRef } from 'react';


const Login = () => {
  const adminRef = useRef();
  const passwordRef = useRef();

  const [state, setState] = useState('false');
  console.log(state);
  console.log(setState);

  return (
    <div className='login-container'>
      <div className='left-container'>
        <a href="/">ZETAPLAN 홈페이지로</a>
        <div className='text'>
          <p>반갑습니다</p>
          <p>ZETAPLAN입니다</p>
        </div>
      </div>
      <div className='right-container'>
        <form className='login-form'>
          <label htmlFor="admin-id">
            <input className="id-input" name="admin-id" type="text" placeholder='아이디' ref={adminRef} />
          </label>
          <label htmlFor="admin-pwd">
            <input className="pwd-input" type="admin-pwd" placeholder='비밀번호' ref={passwordRef} />
          </label>
        </form>
        <button className="login-btn" type="button">로그인</button>
      </div>
    </div>
  );
};
 

export default Login;