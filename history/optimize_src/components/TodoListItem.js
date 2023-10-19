// TodoListItem.js

import React, { useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import '../scss/TodoListItem.scss';
import classNames from 'classnames';  // classnames 라이브러리를 임포트합니다.

const TodoListItem = ({ item, removeTodos,changeChecked }) => {
    const [isChecked, setIsChecked] = useState(item.checked);

    const{id, text, checked} = item;

    // const toggleCheck = () => {
    //     setIsChecked(!isChecked);
    // }

    return (
        <div className={'TodoListItem'}>
            {/*classnames 라이브러리를 이용한 조건부 스타일 적용   */}
            <div className={classNames('checkbox', {checked: item.checked})} onClick={()=>changeChecked(item.id)}>
                {item.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className={'text'}>{item.text}    { String( item.checked)} {item.id}     </div>
            </div>
            <div className={'remove'}>
                <MdRemoveCircleOutline onClick={ ()=>  removeTodos(item.id)  } />
            </div>
        </div>
    );
};

export default    React.memo(TodoListItem);
