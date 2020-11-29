import React from "react";
import styles from "./index.module.css";
import Heading from "./Heading/index.js";
import Main from "../dashboard/Main/index.js";
import Main1 from "../dashboard/Main1/index.js";

class Deshboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            token: window.sessionStorage.getItem('token') || ''
        }
    }

    componentDidMount() {
        if (this.state.token === '') {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div className={styles.container} >
                <Heading />
                <Main />
                <Main1 />
            </div>
        )
    }
}
export default Deshboard;