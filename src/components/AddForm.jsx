import React, { useState } from 'react'

const AddForm = ({addTask, clear, getValueInput}) => {

  const [inputVal, setInputVal] = useState('')
  return (
    <div className='AddForm'>
       <input placeholder='Add a Todo' type="text" value={clear} onInput={(e) =>  {setInputVal(e.target.value); getValueInput(e.target.value)}} />
       <button onClick={() => addTask(inputVal)}>Add</button>
    </div>
  )
}

export default AddForm