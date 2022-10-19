import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import styles from '../Styled/form.module.css';


const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  

const handleLogin = async (e) =>{
  e.preventDefault();
  const payload = {
    email,
    password
  }

  

}

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
      <div className={styles.row}>
                <div className={styles.label_column}>
                    <label className={styles.label}>Email</label>
                </div>
                <div className={styles.input_column}>
                    <input
                       className={styles.input}
                    type='email'
                    placeholder='Enter your email id..'
                    
                    value={email}
                    onChange = {(e)=> setEmail(e.target.value)}
                    required />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.label_column}>
                    <label className={styles.label}>Password</label>
                </div>
                <div className={styles.input_column}>
                    <input
                     className={styles.input}
                    type='password'
                    placeholder='Enter your password..'
                     
                    value={password}
                    onChange = {(e)=> setPassword(e.target.value)}
                     required   />
                </div>
            </div>

            <div className={styles.row}>
                  <input className={styles.submit} type='submit' value='Login' />
            </div>
      </form>
    </div>
  )
}

export default Login