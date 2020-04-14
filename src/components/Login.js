import React from 'react';

class Login extends React.Component {

    state = {
        incorrect: false
    }

    loginClicked() {
        let currentComponent = this;
        currentComponent.setState({incorrect: true})
    }

    render() {
        let loginStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          };

        return (
            <div style={loginStyle}>
                <h1>ADMIN LOGIN</h1>
                <form action="http://localhost:3001/login" method="post">
                    <div style={loginStyle}>
                        <label>Username:</label>
                        <input type="text" name="username"/>
                    </div>
                    <div style={loginStyle}>
                        <label>Password:</label>
                        <input type="password" name="password"/>
                    </div>
                    <div style={loginStyle}>
                        <input type="submit" value="Log In" onClick={this.loginClicked}/>
                    </div>
                    {this.state.incorrect && <strong style={{color: 'red'}}>Incorrect username or password.</strong>}
                </form>
                <div>
                    <a href="/register"><button>REGISTER</button></a>
                </div>
            </div>
        );
    }
}
 
export default Login;