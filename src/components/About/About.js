import React from "react";
import { About_Us } from "../../constants";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.About_Us}>
            <h2>Почему выбирают нас:</h2>
            <div className={styles.AboutUs_Blocks}>
                {About_Us.map((post) => (
                    <div className={styles.block}>
                        <img src={post.img} alt="" />
                        <h4>{post.title}</h4>
                        <p>{post.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;