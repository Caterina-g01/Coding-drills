const backlog = [
  { id: 101, title: "Do homework" },
  { id: 102, title: "Do laundry" },
];

const inProgress = [];

const newInProgress = backlog.filter((task) => {
  return task.id === 101;
});

const newBacklog = backlog.filter((task) => {
  return task.id !== 101;
});

console.log(newInProgress, newBacklog);
