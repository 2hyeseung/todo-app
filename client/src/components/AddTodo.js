import { useState, useRef, useEffect } from "react";
import "../styles/App.scss";

const AddTodo = ({ addItem }) => {
    // 사용자 입력을 저장할 객체
    // (id, title, done에 대한 정보를 저장해야해서 객체 형태로!!)
    const [todoItem, setTodoItem] = useState({
        title: "",
    });
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onButtonClick();
        }
    };
    const onButtonClick = () => {
        // props로 받아온 addItem 함수 실행
        todoItem.title.trim().length > 0 && addItem(todoItem);
        // input 초기화
        setTodoItem({ title: "" });
    };
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [todoItem]);

    return (
        <div className="AddTodo">
            <input
                ref={inputRef}
                type="text"
                placeholder="Add your new Todo"
                value={todoItem.title}
                onChange={(e) => setTodoItem({ title: e.target.value })}
                onKeyPress={onKeyPress}
            />
            <button onClick={onButtonClick}>+</button>
        </div>
    );
};

export default AddTodo;
