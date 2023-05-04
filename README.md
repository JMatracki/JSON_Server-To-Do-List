# JSON_Server To Do List

React application that will allow you to manage your daily tasks using fake REST API.

## Used technologies

- HTML/CSS
- Tailwindcss
- JavaScript
- React
- TypeScript
- JSON-Server (https://github.com/typicode/json-server)
## Installation

First you need to write:
```bash
npm install
```

To use the application properly, you need to run JSON-Server.

```bash
cd db
json-server --watch db.json
```
If there is a problem with an existing port you need to add --port flag (3001 is just example):
```bash
json-server --watch db.json --port 3001
```
    
## Demo

https://lambent-cat-a9c7bf.netlify.app/ (Tasks doesn't work because json-server is disabled)
