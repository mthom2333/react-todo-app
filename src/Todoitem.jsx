import { useState } from "react";

export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  const [editable, setEditable] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    editTodo(id, newTitle);
    setEditable(false);
  };

  const handleInputChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {editable ? (
          <input type="text" value={newTitle} onChange={handleInputChange} />
        ) : (
          title
        )}
      </label>
      <br />
      {editable ? (
        <button onClick={handleSaveClick} className="btn btn-update">
          Save
        </button>
      ) : (
        <button onClick={handleEditClick} className="btn btn-update">
          Edit
        </button>
      )}
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
