import React from "react";

//styles
import styles from "./Loading.module.css";

//assets
import loading from "../assets/loading.gif";

const Loading = () => {
    return(
        <div className={styles.container}>
            <h2>Loading...</h2>
            <img src={loading} alt="loading" />
        </div>
    )
}

export default Loading;