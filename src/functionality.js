import { db } from "./firebase";

//date formats

export function getDate (date) {
  function addZero(number){
    if (number < 10) return `0${number}`;
    else return number;
  } 
  return `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`;
}

//tasks

export function createTask (tasks, taskToCreate) {
  return [
    ...tasks,
    taskToCreate
  ];
} 

export function updateTask (tasks, taskId, fieldsToUpdate) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  const taskToUpdate = tasks[taskIndex];
  const updatedTask = { ...taskToUpdate, ...fieldsToUpdate };

  return [
    ...tasks.slice(0, taskIndex),
    updatedTask,
    ...tasks.slice(taskIndex + 1)
  ];
}

export function createTaskInDB (taskToCreate, newTaskId) {
  return db.collection("tasks")
  .doc(`task${newTaskId}`)
  .set(taskToCreate)
}

export function updateTaskInDB (taskToEdit, taskId) {
  return db.collection("tasks")
  .doc(`${taskId}`)
  .update(taskToEdit)
}

//projects

export function createProject(projects, projectToCreate) {
  return [
    ...projects,
    projectToCreate
  ];
} 

export function updateProject(projects, projectId, fieldsToUpdate) {
  const projectIndex = projects.findIndex(project => project.id === projectId);
  const projectToUpdate = projects[projectIndex];
  const updatedProject = { ...projectToUpdate, ...fieldsToUpdate };

  return [
    ...projects.slice(0, projectIndex),
    updatedProject,
    ...projects.slice(projectIndex + 1)
  ];
}
