import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

export default class LoginPage extends Component {

    constructor() {
        super()
        this.state = {
          authBearer: null,
          authToken: null
        }
    }

    login = () => {
        let input = {
            "username": "admin",
            "password": "admin",
            "rememberMe": true
        }
        console.log(input)
        console.log("start of fetch")
        fetch('http://localhost:8888/admin/docs/api/authenticate', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            input
          })
        })
        .then(resp => {
            resp.json()})
        .then(token => {
            console.log(token)
          this.setState({
            authBearer: token.user,
            authToken: token.jwt,
          })
        })

        this.props.submit(this.state);
    }


    render() {
        return (
            <div>

            <div className="login-box">
                <div className="login-logo">
                <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>
                {/* /.login-logo */}
                <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <Form onSubmit={this.login}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Username" />
                        <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope" />
                        </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="Password" />
                        <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-lock" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                        <div className="icheck-primary">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">
                            Remember Me
                            </label>
                        </div>
                        </div>
                        {/* /.col */}
                        <div className="col-4">
                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                        </div>
                        {/* /.col */}
                    </div>
                    </Form>
                    
                    {/* /.social-auth-links */}
                    <p className="mb-1">
                    <a href="forgot-password.html">I forgot my password</a>
                    </p>
                    <p className="mb-0">
                    <a href="register.html" className="text-center">Register a new membership</a>
                    </p>
                </div>
                {/* /.login-card-body */}
                </div>
            </div>
            </div>

        )
    }
}
