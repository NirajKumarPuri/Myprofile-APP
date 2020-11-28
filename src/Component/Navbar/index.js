import React from "react";
import styles from "./index.module.css";
import Icon from "../Icon";
import { useHistory } from "react-router-dom";

const Nav = () => {

    const history = useHistory()
    // const handleFacebookClick = () => {
    // }

    const handleLogout = () => {
        window.sessionStorage.removeItem('token')
        history.push('/login')
    }

    return (
        <div className={styles.container}>
            <a className={styles.Item} href="#">Features</a>
            <a className={styles.Item} href="#">Reviews</a>
            <a className={styles.Item} href="#">About</a>
            <a className={styles.Item} href="#">Screenshots</a>
            <a className={styles.Item} href="#">Demo</a>
            <a className={styles.Item} href="#">Contact</a>
            <a href="https://www.facebook.com/" target="_blank">
                <Icon name='facebook' color='white' size='2x' />
            </a>
            <Icon name='sign-out' color='white' size='2x' onClick={handleLogout} />
        </div>
    )
}
export default Nav;