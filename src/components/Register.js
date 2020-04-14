import React from 'react';

class Register extends React.Component {
    
    
    render() { 
        let loginStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          };
        return ( 
            <div style={loginStyle}>
                <h1>REGISTER ADMIN ACCOUNT</h1>
                <form action="http://localhost:3001/register" method="post" name="register_form">
                    <div style={loginStyle}>
                        <label>Username:</label>
                        <input type="text" name="username" id="username" required/>
                    </div>
                    <div style={loginStyle}>
                        <label>Password:</label>
                        <input type="password" name="password" id="password" required/>
                    </div>
                    <div style={loginStyle}>
                        <input type="submit" value="Register"/>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Register;