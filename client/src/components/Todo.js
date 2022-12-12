const Todo = ({ item }) => {
    const { id, title, done } = item;

    return (
        <div className="Todo">
            <input
                type="checkbox"
                id={`todo${id}`}
                name={`todo${id}`}
                value={`todo${id}`}
                defaultChecked={done}
            />
            <label htmlFor={`todo${id}`}>{title}</label>
        </div>
    );
};

export default Todo;
