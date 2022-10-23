import Time from './Time'

const Header = ({tasks, onClearList, onSearch}) => {
    
    return (
    <div className='header'>
        <h1>To Do List  <span>&copy; Javlonbek</span></h1>
        
           <Time/>
           <div className='header_count-clear'>
            <h3>Tasks: {tasks}</h3>
            <input type="search" onChange={(e) => onSearch(e.target.value)} placeholder='Search ToDos' />
            <button onClick={onClearList}>Clear List</button>
           </div>
    </div>
  )
}

export default Header