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
    setTodos([...todos, { todo, id: uuidv4(), isCompleted: false }]);
    setTodo("");
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

  const toggleFinished = () => {
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
    <div className="flex flex-col bg-blue-400 w-full min-h-screen px-4 py-6">
      <h1 className="font-bold text-white text-3xl mb-6 text-center">
        Todo List
      </h1>

      <div className="max-w-md mx-auto w-full">
        {/* Input Section */}
        <section className=" p-4  mb-6">
          <div className="flex flex-col sm:flex-row gap-2 mb-3">
            <input
              type="text"
              placeholder="Enter Todo here..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="bg-white text-gray-800 px-3 py-2 rounded-md w-full"
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md
                text-white font-bold transition duration-300 ease-in-out
                disabled:bg-blue-300
                 disabled:cursor-not-allowed flex items-center justify-center
                 cursor-pointer"
              disabled={todo.length <= 3}
              onClick={Addtodo}
            >
              <MdOutlineSaveAs className="mr-1" />
            </button>
          </div>

          <div className="flex items-center">
            <input
              className="w-5 h-5 mr-2"
              id="show"
              onChange={toggleFinished}
              type="checkbox"
              checked={showFinished}
            />
            <label className="text-white " htmlFor="show">
              Show Finished
            </label>
          </div>
        </section>

        {/* Todo List Section */}
        <section>
          {todos.length === 0 && (
            <div className=" p-4 text-center text-white">
              No Todos to display
            </div>
          )}

          <ul className="">
            {todos.map((item) => {
              return (
                (showFinished || !item.isCompleted) && (
                  <li key={item.id} className="p-3">
                    <div className="flex items-center  ">
                      <input
                        name={item.id}
                        onChange={() => handleCheckbox(item.id)}
                        type="checkbox"
                        checked={item.isCompleted}
                        className="w-5 h-5"
                      />
                      <span
                        className={`text-xl break-words flex-1 ${
                          item.isCompleted
                            ? "line-through text-gray-600"
                            : "text-gray-800"
                        }`}
                      >
                        {item.todo}
                      </span>
                    </div>

                    <div className="flex justify-end gap-2 mt-2">
                      <button
                        className="bg-blue-600 hover:bg-blue-700 rounded-md p-2 text-white
                         hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
                        onClick={() => Edittodo(item.id)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="bg-blue-600 hover:bg-blue-700 rounded-md p-2 text-white hover:shadow-lg transition duration-300 ease-in-out
                        cursor-pointer"
                        onClick={() => Deletetodo(item.id)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </li>
                )
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Todo;
