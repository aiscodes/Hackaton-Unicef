import React from 'react'
import telegram from './telegram.png'

export default function Telegram() {
    return (
        <div>
            <a href="https://web.telegram.org/#/im?p=@JuciPussubot" target='_blanck' >
                <img src={telegram} style={{'width':'50px', 'height':'50px'}} alt="" />
            </a> 
        </div>
    )
}
