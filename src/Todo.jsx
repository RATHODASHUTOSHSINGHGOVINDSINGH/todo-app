import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineSaveAs } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const savetodos = localStorage.getItem("todos");
    return savetodos ? JSON.parse(savetodos) : [];
  });
  const [showFinished, setshowFinished] = useState(true);
  const Addtodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { todo, id: uuidv4(), isCompleted: false }]);
      setTodo("");
    } else {
      alert("Please enter a todo");
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleCheckbox = (id) => {
    const updatedtodo = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedtodo);
  };

  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };

  const Edittodo = (id) => {
    let Edittodoitems = todos.find((item) => item.id === id);
    setTodo(Edittodoitems.todo);
    if (Edittodoitems) {
      setTodos(todos.filter((item) => item.id !== id));
    }
    //   Remove the todo from the list to avoid duplicate on update
  };
  const Deletetodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
    //  Delete the todo by filtering out the one with the matching ID
  };

  return (
    <div className="flex flex-col   bg-blue-400   min-h-screen w-full ">
      <h1 className="font-bold text-white text-2xl">Todo List</h1>
      <main>
        <section className="p-1">
          <input
            type="text"
            placeholder="Enter Todo here..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="bg-white text-gray-800 m-1 rounded-md md:w-96"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 p-2 m-2  rounded-sm
    hover:shadow-lg transition duration-300 ease-in-out
    cursor-pointer font-bold text-white  disabled:bg-blue-300
    "
            disabled={todo.length <= 3}
            onClick={Addtodo}
          >
            <MdOutlineSaveAs />
          </button>
          <input
            className="m-1"
            id="show"
            onChange={toggleFinished}
            type="checkbox"
            checked={showFinished}
          />
          <label className="m-1 " htmlFor="show">
            Show Finished
          </label>
        </section>
        <section>
          {todos.length === 0 && <div className="m-5">No Todos to display</div>}

          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div key={item.id} className="todo  flex m-5 justify-center">
                  <div key={item.id}>
                    <article className="flex gap-5 ">
                      <input
                        name={item.id}
                        onChange={(e) => handleCheckbox(item.id)}
                        type="checkbox"
                        checked={item.isCompleted}
                      />
                    </article>
                    <span
                      className={`text-2xl ${
                        item.isCompleted ? "line-through" : ""
                      }`}
                    >
                      {item.todo}
                    </span>
                    <article className="flex   gap-5 justify-center">
                      <button
                        className="bg-blue-700 hover:bg-blue-800 rounded-sm p-2 text-white  hover:shadow-lg transition duration-300 ease-in-out
    cursor-pointer "
                        onClick={(e) => Edittodo(item.id)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="bg-blue-700 hover:bg-blue-800 rounded-sm p-2 text-white  hover:shadow-lg transition duration-300 ease-in-out
    cursor-pointer "
                        onClick={(e) => Deletetodo(item.id)}
                      >
                        <MdDelete />
                      </button>
                    </article>
                  </div>
                </div>
              )
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Todo;
