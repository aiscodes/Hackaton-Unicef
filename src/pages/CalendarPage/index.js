import React, { useState } from 'react'

import './calendar.css'
import BackgroundAnimation from '../../components/commonComponents/BackgroundAnimation';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function CalendarPage() {
    const classes = useStyles();
  const [age, setAge] =useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    const [value, onChange] = useState(new Date(2021,6,12));
    return (
        <BackgroundAnimation>
        <div className="calendarMain">

            <div className='calendar'>
                <div className="calendarMainItem">
                    <h2 className='cMainHeader'>
                        Июнь 2021
                    </h2>
                    <div className="cMainContent">
                        <table>
                            <tr>
                                <th className='calendarWeeks'>Пн</th>
                                <th className='calendarWeeks'>Вт</th>
                                <th className='calendarWeeks'>Ср</th>
                                <th className='calendarWeeks'>Чт</th>
                                <th className='calendarWeeks'>Пт</th>
                                <th className='calendarWeeks'>Сб</th>
                                <th className='calendarWeeks'>Вс</th>
                            </tr>
                            <tr> 
                                <th className='calendarWeeksItem'>31</th>
                                <th className='calendarWeeksItem'>1</th>
                                <th className='calendarWeeksItem'>2</th>
                                <th className='calendarWeeksItem'>3</th>
                                <th className='calendarWeeksItem'>4</th>
                                <th className='calendarWeeksItem'>5</th>
                                <th className='calendarWeeksItem'>6</th>
                            </tr>
                            <tr> 
                                <th className='calendarWeeksItem'>7</th>
                                <th className='calendarWeeksItem'>8</th>
                                <th className='calendarWeeksItem'>9</th>
                                <th className='calendarWeeksItem'>10</th>
                                <th className='calendarWeeksItem'>11</th>
                                <th className='calendarWeeksItem'>12</th>
                                <th className='calendarWeeksItem'>13</th>
                            </tr>
                            <tr> 
                                <th className='calendarWeeksItem'>14</th>
                                <th className='calendarWeeksItem'>15</th>
                                <th className='calendarWeeksItem'>16</th>
                                <th className='calendarWeeksItem'>17</th>
                                <th className='calendarWeeksItem'>18</th>
                                <th className='calendarWeeksItem'>19</th>
                                <th className='calendarWeeksItem'>20</th>
                            </tr>
                            <tr> 
                                <th className='calendarWeeksItem'>21</th>
                                <th className='calendarWeeksItem'>22</th>
                                <th className='calendarWeeksItem'>23</th>
                                <th className='calendarWeeksItem'>24</th>
                                <th className='calendarWeeksItem'>25</th>
                                <th className='calendarWeeksItem'>26</th>
                                <th className='calendarWeeksItem'>27</th>
                            </tr>
                            <tr> 
                                <th className='calendarWeeksItem'>28</th>
                                <th className='calendarWeeksItem'>29</th>
                                <th className='calendarWeeksItem'>30</th>
                                <th className='calendarWeeksItem'>1</th>
                                <th className='calendarWeeksItem'>2</th>
                                <th className='calendarWeeksItem'>3</th>
                                <th className='calendarWeeksItem'>4</th>
                            </tr>
                         
                        </table>
                    </div>  
                </div>

                <div className="calendarItem">  
                    <div className="calendar__infoClockAndAdress">
                        <h2> Время</h2>
                        <input type="time" />
                    </div>
                    <div className="calendar__infoClockAndAdress">
                        <h2> Адрес</h2>
                        <input type="text" />
                    </div>
                </div>
                <div>
                        <FormControl variant="filled" className={classes.formControl} style={{'margin-top':'25%', 'background-color':'white' }}>
                            <InputLabel id="demo-simple-select-filled-label">Записаться</InputLabel>
                            <Select
                                style={{'background-color':'white','box-shadow': '7px 7px 20px 1px #00758e' }}
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={age}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>На вакцинацию</em>
                                </MenuItem>
                                <MenuItem value={10}>На концультацию</MenuItem>
                                <MenuItem value={20}>На лечение</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="filled" className={classes.formControl} style={{'margin-top':'25%','background-color':'white' }}>
                            <InputLabel id="demo-simple-select-filled-label">Виды</InputLabel>
                            <Select
  
                                style={{'background-color':'white', 'box-shadow': '7px 7px 20px 1px #00758e' }}
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={age}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Вирусолог</em>
                                </MenuItem>
                                <MenuItem value={10}>Кардиолог</MenuItem>
                                <MenuItem value={20}>Терапевт</MenuItem>
                                <MenuItem value={30}>Психолог</MenuItem>
                                <MenuItem value={40}>Травматолог</MenuItem>
                                <MenuItem value={50}>Стоматолог</MenuItem>
                                <MenuItem value={60}>Гинеколог</MenuItem>
                            </Select>
                        </FormControl>
                </div>
            </div>


            <div className="calendare__btn">
                <button>Записаться</button>
            </div>
        </div>

        </BackgroundAnimation>
    )
}
