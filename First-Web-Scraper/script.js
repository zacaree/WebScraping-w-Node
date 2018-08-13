import fileSystem from 'fs';

const app = document.querySelector('#app');
const text = fileSystem.readFileSync('log.txt', 'utf8');
app.innerHTML = text;