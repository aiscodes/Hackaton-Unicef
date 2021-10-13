import React from 'react'
import { useState } from 'react'
import './TestingTab.css'
import BackgroundAnimation from "../../components/commonComponents/BackgroundAnimation";


import TestingTab2 from './TestingTab2'

export default function TestingPage() {
  const [answerVar, setAnswerVar] = useState('tQuiz_AnswerVar')
  const [answerVar2, setAnswerVar2] = useState('tQuiz_AnswerVar')
  const [answerVar3, setAnswerVar3] = useState('tQuiz_AnswerVar')
  const [first, setFirst]=useState(false)

  const [testingLine, setTestingLine] = useState('testingPointScaleLine')
    return (
      <BackgroundAnimation>
        <div className="testingPageMain">
          <div className="testingPage">
            <p>Давайте проверим,<br /> что вы узнали о вакцинации</p>
          </div>
            {first ? <TestingTab2 goBack={() => {
              setFirst(!first)
            }} /> :
              <div className="testingQuiz">
                <div className='testingPointScale'><div className={testingLine}></div></div>
                <div className="tQuizQuestion">
                  <p>Что такое вакцина?</p>
                </div>

                <div className="tQuizAnswer">
                  <div className='tQuiz_Answer'>
                    <div className={answerVar} onClick={() =>
                      setAnswerVar('tQuiz_AnswerVarActive')
                    }>a) <div> <span> Вакцина - это препарат на легкие болезни. </span></div></div>
                    <div className={answerVar2} onClick={() =>
                      setAnswerVar2('tQuiz_AnswerVarActive')
                    }>б) <div><span>Вакцина – это медицинский иммунобиологический препарат.</span></div></div>
                    <div className={answerVar3} onClick={() =>
                      setAnswerVar3('tQuiz_AnswerVarActive') 
                    }>в) <div><span>Вакцина - это препарат для сложных заболеваний.  </span></div></div>
                  </div>
                  <button className='tQuiz__Answerbutton' onClick={() => { 
                    setFirst(!first) 
                  }}> 
                      >
                  </button>
                </div>

              </div>
            }
        </div>
    </BackgroundAnimation>
      
    )
}
