import React, { useState } from 'react'
import './TestingTab.css'
import TestingPage from './index'

export default function TestingTab5() {
  const [answerVar, setAnswerVar] = useState('tQuiz_AnswerVar')
  const [answerVar2, setAnswerVar2] = useState('tQuiz_AnswerVar')
  const [answerVar3, setAnswerVar3] = useState('tQuiz_AnswerVar')
  
  const [testingLine, setTestingLine] = useState('testingPointScaleLine5')
  const [five, setFive]=useState(false)

  return (
    <>
    {five ? <TestingPage goBack={() => {
      setFive(!five)
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
            }>a) <div> <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quam at sunt ratione unde est aperiam totam optio ullam id recusandae libero exercitationem, fugit sequi aliquid perspiciatis doloribus soluta ducimus?</span></div></div>
            <div className={answerVar2} onClick={() =>
              setAnswerVar2('tQuiz_AnswerVarActive')
            }>б) <div><span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, voluptas.</span></div></div>
            <div className={answerVar3} onClick={() =>
              setAnswerVar3('tQuiz_AnswerVarActive')
            }>в) <div><span>tele3</span></div></div>
          </div>
          <button className='tQuiz__Answerbutton' onClick={() => { 
            setFive(!five) 

          }}> 
              >
          </button>
        </div>

      </div>
      
    }
    </>
)
}
