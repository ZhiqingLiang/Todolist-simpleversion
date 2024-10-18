import { useEffect, useState } from 'react';
import './App.css';


const App =()=>{
  const [todos,setTodos] = useState([]) //拿数组去存储待办事项
  const [inputValue,setInputValue] = useState('') //inputvalue为空字符  
  const [dueTime,setTime] = useState('')


// 添加新的事项
const addTodo=()=>{
  if(inputValue.trim()&&dueTime.trim()){
    // 创建新的新代办对象，包含内容喝截止时间
    const newTodos = {text:inputValue,dueTime:dueTime}
    // 更新todos数组，将新的待办事项加入
    setTodos([...todos, newTodos])
    setInputValue('')
    setTime ('')
  }else{
    alert('请输入内容')
  }
}
const deleteTodo=(index)=>{
  const newTodos = todos.filter((_,i)=>i !==index)
  setTodos(newTodos)
}

  return(
    <div className='list'>
      <h2>To-Do-List</h2>
      <input
        type='text'
        value={inputValue}
        onChange ={(e) =>setInputValue(e.target.value)}
        placeholder='添加代办事项'
      />
      <input
        type='date'
        value={dueTime}
        onChange ={(e) =>setTime(e.target.value)}
        placeholder='截止时间'
      />
      <button onClick ={addTodo}>添加</button>
      {/* 表格头 */}
        <table className='table'>
          <thead>
            <tr>
              <th>待办事项</th>
              <th>截止时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody className='tbody'>
          {/* 遍历todo数组，生成每一行 */}
          {todos.map((toDo,index)=>(
            <tr key={index}>
              <td>{toDo.text}</td>
              <td>{toDo.dueTime}</td>
              <td>
                <button onClick={()=> deleteTodo(index)}>删除</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
    </div>
  )

}


export default App;
