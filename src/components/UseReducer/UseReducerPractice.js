import React, { useReducer, useState } from "react";

const TODO = {
  ADD_TODO: "add_todo",
  DELETE: "delete"
};

function reducer(todo, action) {
  switch (action.type) {
    case TODO.ADD_TODO:
      return [...todo, newTodo(action.payload.name)];
    case TODO.DELETE:
      return [...deleteTodo(action.payload.id, todo)];
    default:
      return todo;
  }
}

function deleteTodo(id, todo) {
  return todo.filter(eachValue => eachValue.id !== id);
}

function newTodo(name) {
  return { id: Date.now(), name: name };
}

function UseReducerPractice() {
  const [state, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: TODO.ADD_TODO,
      payload: { name: inputValue },
    });
    setInputValue("");
  }

  const deleteValue = (id) => {
    dispatch({
      type: TODO.DELETE,
      payload: { id },
    });
  }

  console.log(state);

  return (
    <div>
      <form className="flex" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="border border-violet-500  rounded-lg mr-10"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-400 text-white px-5 py-3 rounded-full"
        >
          Submit
        </button>
      </form>

      {state.map((value, id) => {
        return <div key={id} onClick={() => deleteValue(value.id)}>{value.name}</div>
      })}
    </div>
  );
}

export default UseReducerPractice;
