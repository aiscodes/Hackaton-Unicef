import React,{useState} from 'react'
import './TestingTab.css'
import TestingTab3 from './TestingTab3'

export default function TestingTab2() {
  const [answerVar, setAnswerVar] = useState('tQuiz_AnswerVar')
  const [answerVar2, setAnswerVar2] = useState('tQuiz_AnswerVar')
  const [answerVar3, setAnswerVar3] = useState('tQuiz_AnswerVar')

  const [testingLine, setTestingLine] = useState('testingPointScaleLine2')
  const [second, setSecond ]=useState(false)
    return (
      <>
      {second ? <TestingTab3 goBack={() => {
        setSecond(!second)
      }} /> :
        <div className="testingQuiz">
          <div className='testingPointScale'><div className={testingLine}></div></div>
          <div className="tQuizQuestion">
            <p>Необходимо ли соблюдать самоизоляцию
после вакцинации?</p>
            
          </div>

          <div className="tQuizAnswer">
            <div className='tQuiz_Answer'>
              <div className={answerVar} onClick={() =>
                setAnswerVar('tQuiz_AnswerVarActive')
              }>a) <div> <span> Самоизоляция после прививки не требуется. Вакцина не содержит патогенный
для человека вирус, вызывающий COVID-19, поэтому заболеть и заразить
окружающих после прививки невозможно. </span></div></div>
              <div className={answerVar2} onClick={() =>
                setAnswerVar2('tQuiz_AnswerVarActive')
              }>б) <div><span>Требуется самоизоляция после прививки требуется, т.к. есть вероятность заразит других.</span></div></div>
              <div className={answerVar3} onClick={() =>
                setAnswerVar3('tQuiz_AnswerVarActive')
              }>в) <div><span>Самое лучшее решение самоизоляция.</span></div></div>
            </div>
            <button className='tQuiz__Answerbutton' onClick={() => { 
              setSecond(!second) 

            }}> 
                >
            </button>
          </div>

        </div>
        
      }
      </>
)
}
