import React from "react";
import "../styleComponents/Workshop.css";
import bike from "../img/bike_1.png"
const Workshop = () => {
    return (
        <section id="workshop" className="workshop">
            <div className="workshop-info">
                <h2>Что мы предлагаем</h2>
                <p>
                    В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.
                </p>
            </div>
            <img src={bike} alt="Веломастерская" className="workshop-image" />
        </section>
    );
};

export default Workshop;