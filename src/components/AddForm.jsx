import React, { useState } from 'react'

const AddForm = ({addTask}) => {

  const [inputVal, setInputVal] = useState('')
  return (
    <div className='AddForm'>
       <input placeholder='Add a Todo' type="search" onInput={(e) =>  setInputVal(e.target.value)} />
       <button onClick={() => addTask(inputVal)}>Add</button>
    </div>
  )
}

export default AddForm