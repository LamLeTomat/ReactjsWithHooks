import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}

function TodoList(props) {
    const {todos, onTodoClick} = props;
    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }
    return (
        //render danh sách todo
        <ul className="todo-list">
            {todos.map(todo => (
                <li 
                    key={todo.id} 
                    onClick={() => handleClick(todo)}
                >
                    {todo.title}
                </li> // loop các giá trị trong mảng
            ))}
        </ul>
    );
}

export default TodoList;