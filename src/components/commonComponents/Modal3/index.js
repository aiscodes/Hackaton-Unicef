import React from 'react'
import GirlComp from '../GirlComp'
import BackgroundAnimation from '../BackgroundAnimation'
import { Link } from 'react-router-dom'
import './Modal3.css'
export default function Modal3() {
    return (
        <div>
            <BackgroundAnimation>
                <div className='modal3_container'>
                    <GirlComp/>
                    <div className='modal3_line'>
                        <p>
                            А Вы получали вакцинацию?
                        </p>
                        <div className='modal3_lineBtn'>
                            <Link to='/feedback' > <button className='modal3_button btn-hover color-1'>Да</button></Link> 
                            <Link to='about'> <button className='modal3_button btn-hover color-1'>Нет</button></Link>   
                        </div>
                    </div>
                </div>
            </BackgroundAnimation>
        </div>
    )
}
