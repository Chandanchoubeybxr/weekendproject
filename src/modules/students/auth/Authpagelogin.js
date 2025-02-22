import React from 'react'
import FacebookLogin from 'react-facebook-login';



function Authpagelogin() {
    const responseFacebook = (response) => {
        console.log(response);
      }
  
  
    return (
    <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} />
  )
}

export default Authpagelogin