import './App.scss';
import ColorBox from './components/ColorBox';

function App() {
  return (
    <div className="app">
      <h1>Welcome to react hooks</h1>
      <ColorBox/>
    </div>
  );
}

// function TotoList(){
//   const [todoList, setTodoList] = useState(['love', 'easy', 'frontend']);
//   function removeTodo(index){
//     const newTodoList = [...todoList]; //danh sách todoList mới
//     newTodoList.splice(index, 1);
//     setTodoList(newTodoList)
//   }
//   return(
//     <ul className="todo-list">
//       {todoList.map((todo, index) => (
//         <li 
//           key={todo.id}
//           onClick={() => removeTodo(index)}
//         >
//           {todo.title}
//         </li>
//       ))}
//     </ul>
//   )
// }

export default App;
