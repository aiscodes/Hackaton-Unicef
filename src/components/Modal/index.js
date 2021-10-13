import React from 'react'
import GirlComp from '../commonComponents/GirlComp'
import BackgroundAnimation from '../commonComponents/BackgroundAnimation'
import './Modal.css'
import { NavLink } from 'react-router-dom'


export default function Modal() {
    return (
        <div>
        <BackgroundAnimation>
        <div className='modal_container'>
            <GirlComp/>
            <div className='modal_div'>
                <p>Привет, меня зовут Адель! Я Ваш ассистент и хочу Вам помочь.</p>
                <p>На нашем сайте Вы можете узнать достоверную информацию о вакцинах,
                записаться в очередь на консультацию ко всем врачам Кыргызской Республики, 
                также ваша медицинская карта будет доступна в онлайн формате для того, чтобы она у Вас всегда была под рукой.
                </p>
                        <NavLink to='/modal2'><div className='modal_button btn-hover color-1'>Далее</div></NavLink>   </div>
                         
        </div>
        </BackgroundAnimation>
        </div>
    )
}
