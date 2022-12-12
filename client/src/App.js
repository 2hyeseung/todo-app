import { useState } from "react";
import Todo from "./components/Todo";

const App = () => {
    const [todoItems, setTodoItems] = useState([
        { id: 1, title: "MyTodo1", done: false },
        { id: 2, title: "MyTodo2", done: false },
        { id: 3, title: "MyTodo3", done: true },
    ]);
    return (
        <div className="App">
            {todoItems.map((item) => {
                // console.log(item); // {id: 1, title: 'My Todo1', done: false}
                return <Todo key={item.id} item={item} />;
            })}
        </div>
    );
};

export default App;
