import React, {useCallback, useState} from 'react';
import { MdAdd } from 'react-icons/md';  // Here is the modification
import '../scss/Todoinsert.scss';
function Todoinsert({addTodos}) {

const[text, setText] = useState('')
const textChange =   useCallback((e)=>{
    setText(e.target.value);

},[])
const handleSubmit = useCallback((e)=>{
    e.preventDefault();
    addTodos(text);
    setText('');
},[addTodos,text])



    return (
        <div>

            <form className={'TodoInsert'} onSubmit={handleSubmit}>
                <input value={text} onChange={textChange} placeholder={'일정을 입력하세요'}/>
                <button type={'submit'}>
                    <MdAdd></MdAdd>
                </button>


            </form>




        </div>
    );
}

export default Todoinsert;
