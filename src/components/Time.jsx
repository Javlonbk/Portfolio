import React, { useEffect, useState }  from 'react'

export default function Time(){
    const [dateTime, setDateTime] = useState(new Date())
  
       
    function getTimeInfo(date){   
        
        function getWeekDay(date){
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return weekday[date.getDay()];
        }
        function dates(date){
           return 'Date: ' + date.getDay() +'.'+ date.getMonth() +'.'+date.getFullYear() +','+ getWeekDay(date)
        }
        function time(date){
            const Time = (date.getHours() > 12) ?
             'Time: ' + (date.getHours() - 12) + '.' + date.getMinutes() + '.' + date.getSeconds() + 'AM' :
             'Time: ' + date.getHours()  + '.' + date.getMinutes() + '.' + date.getSeconds() + ' PM'
             return Time
        }
        return(
            <div className='header_time'>
                <h3>{dates(date)}</h3>
                <h3>{time(date)}</h3>
            </div>
        )
    }

    useEffect(() => {
        setInterval(() => setDateTime(new Date()), 1000)
    },[dateTime])
  return (
    <div >{getTimeInfo(dateTime)}</div>
  )
};