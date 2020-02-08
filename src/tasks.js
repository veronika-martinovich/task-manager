export function updateTask(tasks, taskId, fieldsToUpdate) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  const taskToUpdate = tasks[taskIndex];
  const updatedTask = { ...taskToUpdate, ...fieldsToUpdate };

  return [
    ...tasks.slice(0, taskIndex),
    updatedTask,
    ...tasks.slice(taskIndex + 1)
  ];
}
