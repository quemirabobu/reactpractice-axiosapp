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
//액션에 따라서 다르게 동작하는 메소드
//리듀서 메소드의 첫번째 매개변수로는 state값이 온다.
//리듀서메소드의 두번째 매개변수로는 dispatch 메소드의 매개변수가 온다.
// actioin = {type:'insert', todo  : {id: , text : , checked : }}
// actioin = {type:'remove', todo  : {id: , text : , checked : }}
// actioin = {type:'toggle', todo  : {id: , text : , checked : }}

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

    //useReducer : state를 생성하는 HOOK, setter메소드 대신 dispatch라는 메소드를 갖는다.
    // 첫번째 매개변수로 리듀서 메소드를 매핑, 리듀서 메소드는 상황에 따라서 state값을 다르게 변경하도록 구현.

    //dispatch 메소드가 action을 발생시키면서 자동적으로 지정된 리듀서 메소드를 호출한다.





    const[todos, dispatch] = useReducer( reducer,undefined, bulkTodos  );


    // const [todos, setTodos] = useState(bulkTodos);

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


        // setTodos(todos =>{  console.log(todos);    return todos.concat(todo) }   );

//dispatch로 액션을 실행시킨다. 액션이 실행되면서 useReducer에 매핑해놓은 리듀서 메소드가 자동적으로 실행된다.
        //dispatch method의 배개변수를 action이라고 부른다.

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

        // setTodos(todos=>
        //     //배열.map() 메소드는 새로운 배열 리턴
        //     todos.map(
        //         //매개변수로는 하나씩 순회하면서 사용할 변수명 원하는 대로 지정
        //         //매개변수 t가 객체 형태이기 때문에 리턴되는 값도 객체형태
        //         //스프레드 문법은 ...변수명
        //
        //         //{...t}=>{    id:1, text:'react', checked:true }
        //         // (t) =>({...t, checked: !t.checked} =>{   id:1, text:'react', checked:false(!true)  })
        //
        //         (t) => (t.id === id ? {...t, checked: !t.checked} : t)
        //     )
        // );

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
