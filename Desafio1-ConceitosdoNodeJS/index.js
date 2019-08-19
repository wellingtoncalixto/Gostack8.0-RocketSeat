const express = require("express");

const server = express();

server.use(express.json());

const projects =[]

server.post('/projects', (req,res)=>{
  const { id } = req.body;
  const { title } = req.body;
  const {tasks} = req.body
  projects.push({id, title, tasks});

  return res.json(`id: ${id}, title: ${title}, tasks: ${tasks}`);
});

server.get('/projects', (req, res) => {
  return res.json(projects)
});

server.get('/projects/:id', (req, res) => {
  const {id} = req.params;

  projects.find(project => {
    project.id === id
      
    return res.json(project.title) 
  });
});

server.put('/projects/:id', (req, res) => {
  const {id} = req.params;
  const {title} = req.body;
  
  projects.find(project => {
    project.id === id; 
    project.title = title;
    return res.json(project.title) ;
  });
});

server.delete('/projects/:id', (req, res) => {
  const {id} = req.params;
  
  const index = projects.find(project => {
    project.id === id
  })
  projects.splice(index, 1)

  return res.send()
});




server.listen(3333);