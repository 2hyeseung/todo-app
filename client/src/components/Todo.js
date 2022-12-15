import { useState } from "react";
import axios from "axios";
import "../styles/App.scss";

const Todo = ({ item, deleteItem, updateItem }) => {
    const { id, done } = item;
    const [todoItem, setTodoItem] = useState(item);
    const [readOnly, setReadOnly] = useState(true);
    const onDeleteBtnClick = () => {
        deleteItem(todoItem);
    };

    // title input 커서가 깜빡인다고 수정이 가능한 것은 아님
    // 사용자가 키보드 입력할 때마다 todoItem의 title을 새 값으로 변경
    const editEventHandler = async (e) => {
        const { title, ...rest } = todoItem;
        setTodoItem({
            title: e.target.value,
            ...rest,
        });
    };

    // title input 클릭시 (title를 수정하겠다!!) : readOnly state를 false로 변경
    const offReadOnlyMode = () => {
        setReadOnly(false);
    };

    // title input에서 enter 키 입력시 (title 수정을 완료했다!!): readOnly state를 true로 변경
    const enterKeyEventHandler = async (e) => {
        if (e.key === "Enter") {
            setReadOnly(true);
            updateItem(todoItem);
        }
    };

    const checkboxEventHandler = async (e) => {
        const { done, ...rest } = todoItem;
        setTodoItem({
            done: !done,
            ...rest,
        });
        updateItem(todoItem);
    };

    return (
        <div className="Todo">
            <div className="Left">
                <input
                    className="Checkbox"
                    type="checkbox"
                    id={`todo${id}`}
                    name={`todo${id}`}
                    value={`todo${id}`}
                    defaultChecked={done}
                    onChange={checkboxEventHandler}
                />
                {readOnly ? (
                    <label htmlFor={`todo${id}`} onClick={offReadOnlyMode}>
                        {todoItem.title}
                    </label>
                ) : (
                    <input
                        className="TodoEdit"
                        type="text"
                        value={todoItem.title}
                        onChange={editEventHandler}
                        onKeyPress={enterKeyEventHandler}
                        readOnly={readOnly}
                    />
                )}
            </div>
            <div className="Right">
                <button onClick={onDeleteBtnClick}>🗑️</button>
            </div>
        </div>
    );
};

export default Todo;
