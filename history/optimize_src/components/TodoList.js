// TodoList.js

import React from 'react';
import TodoListItem from "./TodoListItem";
import '../scss/TodoList.scss';

function TodoList( {todos, removeTodos,changeChecked} ) {
    return (
        <div className={'TodoList'}>
            {todos && todos.map((todo) => (
                <TodoListItem item={todo} key={todo.id}  removeTodos={removeTodos} changeChecked={changeChecked}  />
            ))}
        </div>
    );
}

export default TodoList;
