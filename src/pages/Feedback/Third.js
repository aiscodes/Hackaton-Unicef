import React, { useState } from "react";
import Fourth from "./Fourth";
import BackgroundAnimation from "../../components/commonComponents/BackgroundAnimation";

export default function Third({ goBack }) {
  const [third, setThird] = useState(false);
  return (
    <div>
      <div>
        <BackgroundAnimation>
          {third ? (
            <Fourth getBack={() => setThird(!third)} />
          ) : (
            <div className="feedback_container">
              <div className="first_feedback">
                <h5>
                  Ваши ответы будут направлены в Министерство Здравохранения. <br />
                  Пожалуйста, ответьте на вопросы.
                </h5>
                <div className="feedback_first">
                  <p>Какие вакцины Вы получали и когда?</p>
                  <input type="text" placeholder="Введите данные" />
                </div>
              </div>
              <div className="fdb">
                <button onClick={goBack} className="button_feedback">
                  Вернуться обратно
                </button>
                <button
                  className="button_feedback"
                  onClick={() => setThird(!third)}
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
