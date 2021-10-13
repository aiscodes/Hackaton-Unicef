import React from "react";
import "./Feedback.css";
import BackgroundAnimation from "../../components/commonComponents/BackgroundAnimation";

export default function Fifth({ goBack }) {
  return (
    <div>
      <div>
        <BackgroundAnimation>
          <div className="feedback_container">
            <div className="first_feedback">
              <h5>
                Ваши ответы будут направлены в Министерство Здравохранения.  <br />Пожалуйста, ответьте на вопросы.
              </h5>
              <div className="feedback_first">
                <p>Болеете ли Вы какими-нибудь хроническими заболеваниями? </p>
                <input type="text" placeholder="Введите данные" />
              </div>
            </div>
            <div className="fdb">
              <button onClick={goBack} className="button_feedback">
                Вернуться обратно
              </button>
              <button className="button_feedback">Отправить</button>
            </div>
          </div>
        </BackgroundAnimation>
      </div>
    </div>
  );
}
