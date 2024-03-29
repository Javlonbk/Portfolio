import React, { useState} from 'react';
import AddForm from './AddForm';
import { Datas } from './data.js';
import Header from './Header';
import PostList from './PostList';

function App() {
  
  const memory = localStorage.getItem('ToDos')
  
  const [datas, setDatas] = useState(memory ? JSON.parse(memory) : Datas)
  const [term, setTerm] = useState('')
  const [clear, setClear] = useState('')
  const dateTime = time(new Date())
  localStorage.setItem('ToDos', JSON.stringify(datas))
  
  function time(date){
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const Time = (date.getHours() > 12) ?
     (date.getHours() - 12) + '.' + minute +  'AM' :
       hour + '.' + minute +  ' PM' 
     
     return Time
}
  
  //  <-----getValue----->
   const getValueInput = (val) => {
     setClear(val)
     console.log(clear)
   }
  // <-------Add Task----->
  const addTask = (val) => {
    if(val !== ''){
    const newData = {id:datas.length+1, post:val, time:dateTime, important:false, check:false}
    setDatas([...datas, newData]) 
    }
    setClear('')
    console.log(clear)
    
  }
  // <-----------Delete Task----->
  const onDelete = (index) => {
    const newDatas = datas.filter((data) =>{
      return data.id !== index 
    })
    setDatas(newDatas)
  }
 // <-------Star Tasks------>
 const onStar = (index) => {
    const oldData = datas[index - 1]
    const newData = {...oldData, important: !oldData.important}
    const newDatas = [...datas.slice(0,index-1), newData, ...datas.slice(index)]
    setDatas(newDatas)

 }
 // <------Done Tasks----->
 const onCheck = (index) => {
  const oldData = datas[index - 1]
  const newData = {...oldData, check: !oldData.check}
  const newDatas = [...datas.slice(0,index-1), newData, ...datas.slice(index)]
  setDatas(newDatas)

}
// <-----ClearList------>
const onClearList = () => {
  setDatas([])
}
// <------onSearch------>
const onSearch = (val) => {
  setTerm(val)
}

const resultDatas = datas.filter((data) => {
  if(term.length !== 0) return data.post.toLowerCase().includes(term.toLowerCase())
  else return datas
})



  return (
    <div className="App">
        <Header onSearch={onSearch} onClearList={onClearList} tasks={datas.length} />
        <PostList onStar={onStar} datas={resultDatas} onDelete={onDelete} onCheck={onCheck}  />
        <AddForm addTask={addTask} clear={clear} getValueInput={getValueInput} />
    </div>
  );
}

export default App;
