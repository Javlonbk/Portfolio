import React from 'react'

const PostListItem = ({post, time, onDelete, onStar, important, onCheck, check}) => {
  
  const star = ' star'
  let todo  = ''
  let span = ' span1'
  let starM = "fa-solid fa-star"
  let checkC = 'fa-solid fa-check'
  let done = ' check'
  let doneLine = ' check-underline'
  if(important){
    starM += star
    todo += star
    span += star
  }
  if(check){
      checkC = 'fa-solid fa-check-double'
      checkC += done
      todo += (doneLine + done)
      span += done
  }
  return (
    <div className='PostListItem'>
        <p className={todo}>{post}</p>
        <div>
            <span className={span}>{time}</span>
            <i onClick={onCheck} className={checkC}></i>
            <i onClick={onStar} className={starM}></i>
            <i onClick={onDelete} class="fa-solid fa-trash"></i>
        </div>
    </div>
  )
}

export default PostListItem