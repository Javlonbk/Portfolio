import React, { useEffect, useState }  from 'react'

export default function Time(){
    const [dateTime, setDateTime] = useState(new Date())
  
       
    function getTimeInfo(date){   
        function getWeekDay(date){
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return weekday[date.getDay()];
        }
        function dates(date){
            const day =  date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
            const month =  date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
           return 'Date: ' + day  +'.'+ month +'.'+date.getFullYear() +', '+ getWeekDay(date)
        }
        function time(date){
            const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            const Time = (date.getHours() > 12) ?
             'Time: ' + (date.getHours() - 12) + '.' + minute + '.' + second + 'AM' :
             'Time: ' + hour + '.' + minute + '.' + second + ' PM' 
             
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