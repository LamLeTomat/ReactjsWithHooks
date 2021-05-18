import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  //Khởi tạo mảng giá trị
  const [todoList, setTodoList] = useState([
    {id: 1, title: 'Đi học'},
    {id: 2, title: 'Đi làm'},
    {id: 3, title: 'Đi chơi'},
  ]);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        
        const data = responseJSON.data; // == const {data} = responseJSON 
        setPostList(data)
      } catch (error) {
        console.log('Failed to fetch', error.message)
      }
      
    }
    console.log('Post list effect')
    fetchPostList();

  },[]);

  useEffect(() => {
    console.log('Todolist effect');
  });

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
      <h1>React hooks PostLisssst</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}

      {/* <ColorBox/> */}
      
      {/* <TodoList 
        todos={todoList}
        onTodoClick={handleTodoClick} 
      /> */}

      <PostList posts={postList} />

    </div>
  );
}



export default App;
