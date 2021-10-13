import React,{useState} from 'react';
import './MythsPage.css'
import BackgroundAnimation from '../../components/commonComponents/BackgroundAnimation';

export default function MythsPage() {
  return (
    <BackgroundAnimation>
        <div className="mythsMain">
            <div className="myths_header">
              <p>Важная информация для пользователей</p>
            </div>

            <div className="myths_content">
            
              <div className="myths_contentCenter">
                <div className="myths_cCenterLeft">
                    <h5>
                      В связи с увеличением огромного количества фейковых информации, которые вводят в заблуждение людей, убедительно просим Вас обратить внимание на достоверность точность и источников.                       
                    </h5>
                    

                </div>
                  <div className="myths_cCenterRightH">
                    <p>Где искать адекватную медицинскую информацию на русском:</p>
                      <ul>
                        <li>Официальный сайт всемирной организации здравоохранения.</li>
                        <li>Официальный сайт министерства здравоохранения Кыргызской республики.  </li>
                        <li>Medspecial.ru – проект «Доказательная медицина для всех». Там есть статьи и каталог
                          врачей, работающих по принципам evidence-based medicine.</li>
                        <li>MadMed.Media – медиа, посвященное доказательной медицине для пациентов, студентов,
                          ординаторов и врачей.</li>
                        <li>Evidencebasedclub – блог клуба доказательной медицины.</li>
                        <li>«Намочи Манту» – телеграм-канал от медицинских журналистов.</li>
                        <li>«Заметки детского врача» – группа «Вконтакте» педиатра Сергей Бутрия.</li>
                        <li>Vadimbondar.ru – сайт детского офтальмолога Вадима Бондаря.</li>
                        <li>Rumyantsevamd.ru – сайт акушера-гинеколога Татьяны Румянцевой.</li>
                        <li>Oncobrain – независимый информационный портал об опухолях мозга (проект благотворительного фонда Константина Хабенского).</li>
                      </ul>
                  </div>
                 
                </div>

              </div>
              
   

            <div className="myths_btn">

            </div>
        </div>
    </BackgroundAnimation>
    );
}
