import React from "react";

export const NewTaskForm = (props) => {
  return (
    <div className="new-task_container">
    <form className="new-task_form" action="">
      <input
        className="new-task_title"
        type="text"
        name="task-title"
        id="task-title"
        placeholder="Please, enter task name"
        value={props.title}
        onChange={e => props.onChange(e.target.value)}
      />
      <button
        type="submit"
        className="new-task_btn"
        onClick={() => props.onSave()}
      >
        Save
      </button>
    </form>
    </div>
  )
}
