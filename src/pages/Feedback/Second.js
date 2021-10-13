import React from "react";
import { useState } from "react";
import Third from "./Third";
import "./Feedback.css";
import BackgroundAnimation from "../../components/commonComponents/BackgroundAnimation";

export default function Second({ getBack }) {
  const [second, setSecond] = useState(false);
  return (
    <div>
      <div>
        <BackgroundAnimation>
          {second ? (
            <Third goBack={() => setSecond(!second)} />
          ) : (
            <div className="feedback_container">
              <div className="first_feedback">
                <h5>
                  Ваши ответы будут направлены в Министерство Здравохранения. <br /> Пожалуйста, ответьте на вопросы.
                </h5>
                <div className="feedback_first">
                  <p>Дата рождения </p>
                  <input type="text" placeholder="Введите дату рождения" />
                </div>
              </div>
              <div className="fdb">
                <button onClick={getBack} className="button_feedback">
                  Вернуться обратно
                </button>
                <button
                  className="button_feedback"
                  onClick={() => setSecond(!second)}
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
