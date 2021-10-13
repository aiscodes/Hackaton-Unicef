import React from "react";
import { useState } from "react";
import BackgroundAnimation from "../../components/commonComponents/BackgroundAnimation";
import Fifth from "./Fifth";
import "./Feedback.css";

export default function Fourth({ getBack }) {
  const [fourth, setFourth] = useState(false);
  return (
    <div>
      <div>
        <BackgroundAnimation>
          {fourth ? (
            <Fifth goBack={() => setFourth(!fourth)} />
          ) : (
            <div className="feedback_container">
              <div className="first_feedback">
                <h5>
                  Ваши ответы будут направлены в Министерство Здравохранения.  <br />Пожалуйста, ответьте на вопросы.
                </h5>
                <div className="feedback_first">
                  <p>
                    Расскажите о своем самочувствии в течение месяца после
                    вакцинации{" "}
                  </p>
                  <input type="text" placeholder="Введите данные" />
                </div>
              </div>
              <div className="fdb">
                <button onClick={getBack} className="button_feedback">
                  Вернуться обратно
                </button>
                <button
                  className="button_feedback"
                  onClick={() => setFourth(!fourth)}
                >
                  Отправить
                </button>
              </div>
            </div>
          )}
        </BackgroundAnimation>
      </div>
    </div>
  );
}
