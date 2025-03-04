const tasks = [
  { id: 10, title: "Buy milk" },
  { id: 20, title: "Go to the gym" },
];

for (let key in tasks) {
  tasks[key].id === 20 ? (tasks[key].title = "Read a book") : null;
}

console.log(tasks);
