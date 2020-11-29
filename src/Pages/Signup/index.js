import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            token: ''
        }
    }
    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleclick = () => {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2ndO7hwSK-sJbqdA9bnixCmUY5lLRIYg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                returnSecureToken: true
            })
        }).then((res) => {
            // if (res.ok) {
            //     // this.props.history.push('/Dashboard')
            // }
            return res.json()
        }).then((result) => {
            console.log(result)
            // this.setState({ token: result.idToken })
            window.sessionStorage.setItem('token', result.idToken)
            this.props.history.push('/Dashboard')
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentbox1}>
                        <h1 className={styles.heading}>Sign Up</h1>
                    </div>
                    <div className={styles.contentbox2}>
                        <span className={styles.hemail}>Email</span><br />
                        <input
                            autoComplete="off"
                            onChange={this.handlechange}
                            value={this.state.email}
                            className={styles.text1}
                            name="email" type="text" placeholder="Enter Email" autoFocus />
                    </div>
                    <div className={styles.contentbox3}>
                        <span className={styles.hpassword}>Password</span><br />
                        <input className={styles.text2}
                            autoComplete="off"
                            onChange={this.handlechange}
                            value={this.state.password}
                            name="password" type="password" placeholder="password" />
                    </div>


                    <div className={styles.contentbox4}>
                        <button onClick={this.handleclick} className={styles.button}>Submit</button>
                    </div>
                    <div className={styles.contentbox5}>
                        <span className={styles.cb5text}>Already a member?</span>
                        <Link className={styles.link} onClick={() => { this.props.history.push('/login') }}>Log In</Link>
                    </div>

                </div>
            </div>
        )
    }
}
export default Signup;
