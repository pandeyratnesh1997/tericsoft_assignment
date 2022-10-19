import { Button, Heading } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
const navigate = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem("bmiAppToken");

        navigate('/login')
    }

  return (
    <div>
        <Heading size={'md'}>Profile</Heading>
        <p>Name : {props.name}</p>
        <p>email : {props.email}</p>

        <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Profile