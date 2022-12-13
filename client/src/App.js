import { useState, useRef } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

const App = () => {
    const [todoItems, setTodoItems] = useState([
        { id: 1, title: "MyTodo1", done: false },
        { id: 2, title: "MyTodo2", done: false },
        { id: 3, title: "MyTodo3", done: true },
    ]);
    const todoId = useRef(4);

    // AddTodo 컴포넌트는 상위 컴포넌트(App)의 todoItems(state)에 접근 불가능
    // 상위 컴포넌트(App)은 AddTodo 컴포넌트 접근 가능
    // => App 컴포넌트에 addItem() 함수를 정의하고, 해당 함수를 AddTodo props로 넘겨야 함
    const addItem = (newItem) => {
        // newItem - {id: ?, title: ?, done: false}
        newItem.id = todoId.current++; // key를 위한 id 설정
        newItem.done = false; // done 초기화
        // 기존 todoItems를 유지하고, 새로운 newItem을 추가
        setTodoItems([...todoItems, newItem]); // setTodoItems(todoItems.concat(newItem))
    };

    return (
        <div className="App">
            <AddTodo addItem={addItem} />
            {todoItems.map((item) => {
                return <Todo key={item.id} item={item} />;
            })}
        </div>
    );
};

export default App;