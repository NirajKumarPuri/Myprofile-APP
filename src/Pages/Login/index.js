import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleclick = () => {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2ndO7hwSK-sJbqdA9bnixCmUY5lLRIYg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                returnSecureToken: true,
            })
        }).then((res) => {
            // if (res.ok) {
            //     // this.props.history.push('/Dashboard')
            // }
            return res.json()
        }).then((result) => {
            console.log(result)
            window.sessionStorage.setItem('token', result.idToken)
            this.props.history.push('/Dashboard')
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentbox1}>
                        <h1 className={styles.heading}>Login Form</h1>
                    </div>
                    <div className={styles.contentbox2}>
                        <input className={styles.text1}
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={this.handlechange}
                            value={this.state.email}
                            autoComplete="off"
                            autoFocus />

                    </div>
                    <div className={styles.contentbox3}>
                        <input className={styles.text2}
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={this.handlechange}
                            value={this.state.password}
                            autoComplete="off" />

                    </div>
                    <div className={styles.contentbox4}>
                        <button type="submit" onClick={this.handleclick} className={styles.button}>Login</button>

                    </div>
                    <div className={styles.contentbox5}>
                        <span className={styles.cb5heading}>Not a member?</span>
                        <Link className={styles.button1} to="/">Signup</Link>
                    </div>

                </div>
            </div>
        )
    }
}
export default Login;