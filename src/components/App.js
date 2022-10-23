import React, { useState} from 'react';
import AddForm from './AddForm';
import Header from './Header';
import PostList from './PostList';

function App() {
  
  const [datas, setDatas] = useState([
    {id:1, post:'Learn something and do its', time:"12:44 AM ", important:false, check:false},
    {id:2, post:'Do TO DO LIST PROJECT', time:"08:12 PM", important:true, check:false},
    {id:3, post:'Take higher score from IELTS', time:"08:12 PM", important:true, check:false}
  ])
  const [term, setTerm] = useState('')
  const dateTime = time(new Date())
  function time(date){
    const Time = (date.getHours() > 12) ?
     (date.getHours() - 12) + '.' + date.getMinutes() +  ' AM' :
      date.getHours()  + '.' + date.getMinutes()  +  ' PM'
     return Time
}

  // <-------Add Task----->
  const addTask = (val) => {
    if(val !== ''){
    const newData = {id:datas.length+1, post:val, time:dateTime, important:false, check:false}
    setDatas([...datas, newData]) 
    }
    
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
        <AddForm addTask={addTask} />
    </div>
  );
}

export default App;
