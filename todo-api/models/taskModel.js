const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/tasks.json');

function getTasks() {
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify([]));
  }
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}

function saveTasks(tasks) {
  fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
}

module.exports = { getTasks, saveTasks };
