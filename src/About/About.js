import React from "react";
import "../styleComponents/About.css";
import dinoBake from "../img/dinoBake.png"

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-info">
                <h2>О нас</h2>
                <p>
                    Мы - команда профессионалов, готовых помочь вам с ремонтом, настройкой и обслуживанием велосипедов. Доверяйте свой велосипед нам, и он прослужит вам долгие годы.
                </p>
            </div>
            <img src={dinoBake} alt="О нас" className="about-image" />
        </section>
    );
};

export default About;