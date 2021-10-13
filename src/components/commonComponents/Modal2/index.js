import React from 'react'
import GirlComp from '../GirlComp'
import BackgroundAnimation from '../BackgroundAnimation'
import { Link } from 'react-router-dom'
import './Modal2.css'


export default function Modal2() {
    return (
        <div>
            <BackgroundAnimation>
            <div className='modal2_container'>
                <GirlComp/>
                <div className='modal2_line'>
                    <p>
                        Знаете ли Вы что-нибудь о вакцинации?
                    </p>
                    <div className='modal2_lineBtn'>
                        <Link to='/modal3'><button className='modal2_button  btn-hover color-1'>Да</button></Link> 
                        <Link to ='/about'><button className='modal2_button  btn-hover color-1'>Нет</button></Link> 
                    </div>
                    
                </div>
                
                </div>
            </BackgroundAnimation>
        </div>
    )
}
