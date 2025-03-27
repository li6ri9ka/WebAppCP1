import React from "react";
import "../styleComponents/Rental.css";
import bike_2 from "../img/bike_2.png"

const Rental = () => {
    return (
        <section id="rental" className="rental">
            <img src={bike_2} alt="Bikes for rent" className="rental-image" />
            <div className="rental-info">
                <h2>Прокат велосипедов</h2>
                <p>
                    У нас вы можете взять напрокат хорошо обслуженные и настроенные велосипеды.
                    Мы находимся в прекрасном парке!
                </p>
            </div>
        </section>
    );
};

export default Rental;