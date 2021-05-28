import { useEffect, useState } from 'react';
import './App.scss';
// import ColorBox from './components/ColorBox';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
import queryString from 'query-string';
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock';

function App() {
  //Khởi tạo mảng giá trị
  // const [todoList, setTodoList] = useState([
  //   {id: 1, title: 'Đi học'},
  //   {id: 2, title: 'Đi làm'},
  //   {id: 3, title: 'Đi chơi'},
  // ]);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page : 1,
    _limit : 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 6,
    _page: 1,
  
  })

  //Call API
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters)
        console.log(paramString)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        
        const {data, pagination} = responseJSON;
        setPagination(pagination) 
        setPostList(data)
      } catch (error) {
        console.log('Failed to fetch', error.message)
      }
      
    }
    fetchPostList();

  },[filters]);

  // useEffect(() => {
  //   console.log('Todolist effect');
  // });

  // function handleTodoClick(todo){
  //   console.log(todo);
  //   const index  = todoList.findIndex(x => x.id === todo.id);
  //   if (index < 0 ) return; //Nếu k tìm thấy index thì trả về -1
  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  // function handleTodoFormSubmit(formValues) {
  //   console.log('Form Submit:', formValues )
  // }

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    })
  }
  
  function handleFiltersChange(newFilter) {
    console.log('new filters', newFilter);
    setFilters({
      ...filters,
      title_like: newFilter.searchTerm,
      _page: 1,
    });
  }

  const [showClock, setShowClock] = useState(true)

  
  return (
    <div className="app">
      <h1>React hooks Pagination</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}

      {/* <ColorBox/> */}
      
      {/* <TodoList 
        todos={todoList}
        onTodoClick={handleTodoClick} 
      /> */}
      <PostFiltersForm onSubmit={handleFiltersChange} />

      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange}/>

      { showClock && <Clock />}
      <button onClick={() => {setShowClock(false)}}>Hide Clock</button>
      <button onClick={() => {setShowClock(true)}}>Show Clock</button>

    </div>
  );
}



export default App;
