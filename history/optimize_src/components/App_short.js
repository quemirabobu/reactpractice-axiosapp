import TodoTemplate from "./components/TodoTemplate";
import Todoinsert from "./components/Todoinsert";
import TodoList from "./components/TodoList";
import {useCallback, useReducer, useRef, useState} from "react";



const bulkTodos = () => {
    const todoArray = [];
    for(let i = 1; i <= 2500; i++) {
        const todo = {
            id: i,
            text: `할 일${i}`,
            checked: false
        }
        todoArray.push(todo);
    }
    return todoArray;
}
function reducer(todos, action){
    switch(action.type){
        //{type : 'INSERT, todo:{id:1, text:'react', checked:true/false }}
        case 'INSERT':
            return todos.concat(action.todo);
        case 'REMOVE':
            return todos.filter(todo => todo.id !==action.id);
        case 'TOGGLE':
            //{typ:'toggle}, id:3
            return todos.map(todo=> todo.id == action.id? {...todo, checked: !todo.checked} : todo )
    }
}

function App() {
    const[todos, dispatch] = useReducer( reducer,undefined, bulkTodos  );
    const nextId = useRef(2501);
    const addTodos = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text: text,
            checked: false

        };
        dispatch({type: 'INSERT', todo:todo});
        nextId.current += 1;
    }, []);
    //일정 지우는 메소드
    const removeTodos = useCallback((id) => {
        //filter 메소드로 id에 해당하는 todo 삭제
        dispatch({type: 'REMOVE', id:id});

    }, [])

    const changeChecked = useCallback((id) => {
        dispatch({type: 'TOGGLE', id:id});
    }, [])
    return (
        <TodoTemplate>
            <Todoinsert addTodos={addTodos}></Todoinsert>
            <TodoList todos={todos} removeTodos={removeTodos}  changeChecked={changeChecked} ></TodoList>
        </TodoTemplate>
    );
}
export default App;
