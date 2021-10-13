import React, { useState } from "react";
import BackgroundAnimation from "../../components/commonComponents/BackgroundAnimation";
import Second from "./Second";
import "./Feedback.css";
export default function Feedback() {
  const [first, setFirst] = useState(false);

  return (
    <div>
      <BackgroundAnimation>
        {first ? (
          <Second getBack={() => setFirst(!first)} />
        ) : (
          <div className="feedback_container">
            <div className="first_feedback">
              <h5>
                Ваши ответы будут направлены в Министерство Здравохранения. <br /> Пожалуйста, ответьте на вопросы.
              </h5>
              <div className="feedback_first">
                <p>Фамилия и имя </p>
                <input type="text" placeholder="Введите Ф.И.О." />
               <div className='fdb'>
                <button
                  className="button_feedback"
                  onClick={() => setFirst(!first)}
                >
                  Отправить
                </button></div>
              </div>
            </div>
          </div>
        )}
      </BackgroundAnimation>
    </div>
  );
}
