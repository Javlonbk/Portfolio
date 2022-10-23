import React from 'react'
import PostListItem from './PostListItem'

const PostList = ({datas, onDelete, onStar, onCheck}) => {
  return (
    <div className='PostList'>
        { datas.length !== 0 ?
          datas.map(data => {
            return (
              <PostListItem  post={data.post} check={data.check} important={data.important} key={data.id} time={data.time} onCheck={() => onCheck(data.id)} onStar={() => onStar(data.id)} onDelete={() => onDelete(data.id)} />
            )
          }):
          <h1>Add Some Todos</h1>
        } 
        
    </div>
  )
}

export default PostList