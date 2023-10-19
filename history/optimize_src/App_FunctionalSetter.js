import TodoTemplate from "./components/TodoTemplate";
import Todoinsert from "./components/Todoinsert";
import TodoList from "./components/TodoList";
import {useCallback, useRef, useState} from "react";



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


function App() {
    const [todos, setTodos] = useState(bulkTodos);

    // const [todos, setTodos] = useState([{
    //     id: 1,
    //     text: 'react',
    //     checked: true
    // }, {
    //     id: 2,
    //     text: 'ex6',
    //     checked: false
    // }, {
    //     id: 3,
    //     text: 'html/css',
    //     checked: false
    // }]);
    const nextId = useRef(2501);
    // todos의 고유한 id를 생성하기 위한 useRef

    //todoInsert에서 새로운 todo를 추가하는 메소드
    const addTodos = useCallback((text) => {


        const todo = {
            id: nextId.current,
            text: text,
            checked: false

        };
        //씨엘은 이전의 스테이트값,(투두)를 가져온다.
        //특이사항이 없을때는 setter메소드를 함수형으로 작성한다.


        setTodos(todos =>{  console.log(todos);    return todos.concat(todo) }   );

        nextId.current += 1;


    }, []);


    //일정 지우는 메소드
    const removeTodos = useCallback((id) => {
        //filter 메소드로 id에 해당하는 todo 삭제

        setTodos(todos=>todos.filter((todo) => todo.id !== id))

    }, [])

    const changeChecked = useCallback((id) => {

        setTodos(todos=>
            //배열.map() 메소드는 새로운 배열 리턴
            todos.map(
                //매개변수로는 하나씩 순회하면서 사용할 변수명 원하는 대로 지정
                //매개변수 t가 객체 형태이기 때문에 리턴되는 값도 객체형태
                //스프레드 문법은 ...변수명

                //{...t}=>{    id:1, text:'react', checked:true }
                // (t) =>({...t, checked: !t.checked} =>{   id:1, text:'react', checked:false(!true)  })

                (t) => (t.id === id ? {...t, checked: !t.checked} : t)
            )
        );

    }, [])

    return (


        <TodoTemplate>

            <Todoinsert addTodos={addTodos}></Todoinsert>

            {/*  자식 컴포넌트에서 이벤트가 발생했을 때 부모 컴포넌트도 리렌더링 하려면 부모의 스테이트를 변경해야 한다.
             부모의 스테이트를 자식에서 변경하는 방법은 부모 컴포넌트에 스테이트의 setter메소드를 호출하는 메소드를 정의한 뒤 자식 컴포넌트에 props로 해당 메소드를 전달해서 자식 컴포넌트에서 이벤트가 발생했을 때 props로 받아온 메소드를 호출
             */}


            <TodoList todos={todos} removeTodos={removeTodos}  changeChecked={changeChecked} ></TodoList>

        </TodoTemplate>

    );
}

export default App;
