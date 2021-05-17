import { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  //Khởi tạo mảng giá trị
  const [todoList, setTodoList] = useState([
    {id: 1, title: 'Đi học'},
    {id: 2, title: 'Đi làm'},
    {id: 3, title: 'Đi chơi'},
  ])
  function handleTodoClick(todo){
    console.log(todo);
    const index  = todoList.findIndex(x => x.id === todo.id);
    if (index < 0 ) return; //Nếu k tìm thấy index thì trả về -1
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log('Form Submit:', formValues )
  }
  
  return (
    <div className="app">
      <h1>React hooks TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      {/* <ColorBox/> */}
      <TodoList 
        todos={todoList}
        onTodoClick={handleTodoClick} 
      />
    </div>
  );
}



export default App;
