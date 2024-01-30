import React, { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSave();
              }
            }}
          />
          <button className="btn btn-success ml-2" onClick={handleSave}>Save</button>
        </div>
      ) : (
        <>
          <span
            style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <div>
            <button className="btn btn-info ml-2" onClick={handleEdit}>Edit</button>
            <button className="btn btn-danger ml-2" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
