import React from "react";

export const NewTaskForm = props => {
  return (
    <div className="new-task">
      <form className="new-task__form" action="">
        <input
          className="new-task__title"
          type="text"
          name="task-title"
          id="task-title"
          placeholder="Please, enter task name"
          value={props.title}
          onChange={e => props.onChange(e.target.value)}
        />
        <button
          className="primary-button"
          type="submit"
          onClick={() => props.onSave()}
        >
          Save
        </button>
        <button
          className="secondary-button"
          type="button"
          onClick={() => props.onCancel()}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
